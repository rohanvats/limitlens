import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  delayWhen,
  exhaustMap,
  forkJoin,
  interval,
  map,
  repeat,
  skipWhile,
  take,
  tap,
} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CreateService {
  private displayOptionsSubject = new BehaviorSubject<any>(null);
  public displayOptions$ = this.displayOptionsSubject.asObservable();

  updateDisplayOptions(value) {
    this.displayOptionsSubject.next(value);
  }

  constructor(private http: HttpClient) {}

  // Image Generation
  generateImage(payload, uuid): Observable<any> {
    return this.http.post(`${environment.URL}/generated-prompts`, payload).pipe(
      map((value: any) => value.id),
      exhaustMap((value) => {
        return this.checkImageState(uuid, value);
      })
    );
  }

  // Image generation progress
  checkImageState(uuid, processId): Observable<any> {
    return this.http
      .get(`${environment.URL}/generatedimages-status/${uuid}/${processId}`)
      .pipe(
        delayWhen(() => interval(2000)),
        repeat(),
        tap((value: any) => console.log(value.data)),
        skipWhile((value) => value.data.status !== 'Succeeded'),
        take(1)
      );
  }

  // Display options for image generation
  getDisplayOptions(): void {
    const cameras$ = this.http.get(`${environment.URL}/cameras`);
    const formats$ = this.http.get(`${environment.URL}/formats`);
    const lightings$ = this.http.get(`${environment.URL}/lightings`);
    const stylings$ = this.http.get(`${environment.URL}/stylings`);
    forkJoin([cameras$, formats$, lightings$, stylings$])
      .pipe(tap((data) => console.log('image data...', data)))
      .subscribe(
        (displayOptions) => {
          if (displayOptions) {
            this.updateDisplayOptions(displayOptions);
          }
        },
        (error) => {
          console.log('error image..', error);
        }
      );
  }
}
