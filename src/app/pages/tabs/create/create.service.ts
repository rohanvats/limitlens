import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy, OnInit } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  Subscription,
  catchError,
  delayWhen,
  exhaustMap,
  finalize,
  forkJoin,
  interval,
  map,
  repeat,
  skipWhile,
  take,
  tap,
  throwError,
} from 'rxjs';
import { ToastService } from 'src/app/helper/toast.service';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';
import { FilterModalComponent } from './filter-modal/filter-modal.component';
import { DisplayOptionsService } from 'src/app/services/displayOptions.service';
import { ModalController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class CreateService implements OnInit, OnDestroy {
  private displayOptionsSubject = new BehaviorSubject<any>(null);
  public displayOptions$ = this.displayOptionsSubject.asObservable();
  uuidSub: Subscription;
  user_uuid: string = '';

  updateDisplayOptions(value) {
    this.displayOptionsSubject.next(value);
  }

  constructor(
    private http: HttpClient,
    private modalCtrl: ModalController,
    private toastService: ToastService,
    private authService: AuthService,
    private displayOptionsService: DisplayOptionsService
  ) {}

  ngOnInit(): void {
    this.uuidSub = this.authService
      .checkUserUUID()
      .subscribe((uuid: string) => {
        this.user_uuid = uuid;
      });
  }

  getDisplayOption(option: string): any {
    return this.displayOptions$.pipe(
      map((options) => options.find((el: any) => el.key === option))
    );
  }

  // Image Generation
  generateImage(payload, uuid): Observable<any> {
    return this.http.post(`${environment.URL}/generated-prompts`, payload).pipe(
      catchError((err) => {
        this.toastService.PresentToast(err.message);
        return throwError((err) => {
          console.log('erroor');
        });
      }),
      finalize(() => console.log('finalized')),
      map((value: any) => value.id),
      exhaustMap((value) => {
        return this.checkImageState(uuid, value, 1);
      })
    );
  }

  generateFaceSwappedImage(payload, uuid): Observable<any> {
    return this.http
      .post(`${environment.URL}/faceswaped-prompts`, payload)
      .pipe(
        catchError((err) => {
          this.toastService.PresentToast(err.message);
          return throwError((err) => {
            console.log('erroor');
          });
        }),
        map((processId: any) => processId.id),
        exhaustMap((processId) => {
          return this.checkImageState(uuid, processId, 2);
        })
      );
  }

  checkImageState(uuid, processId, faceswapId: number) {
    const endpoint = faceswapId === 1 ? 'generatedimages' : 'faceswapedimages';
    return this.http
      .get(`${environment.URL}/${endpoint}-status/${uuid}/${processId}`)
      .pipe(
        catchError((err) => {
          return throwError('new error..', err);
        }),
        finalize(() => console.log('finalized')),
        delayWhen(() => interval(2000)),
        repeat(),
        tap((value: any) => console.log(value.data)),
        skipWhile((value) => value.data.status !== 'Succeeded'),
        take(1)
      );
  }

  // Display options for image generation
  getDisplayStyles(): void {
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

  // open filter modal
  openFilterModal(filterType: string) {
    this.modalCtrl
      .create({
        component: FilterModalComponent,
        componentProps: {
          filterType,
        },
      })
      .then((modalEl) => {
        modalEl.present();
        return modalEl.onDidDismiss();
      })
      .then((result) => {
        const element = this.displayOptionsService
          .fetchDisplayOptions()
          ?.find((el) => el.value === result.data?.key);
        if (element) {
          if (element.value === 'format') {
            element.name = result.data.name;
            switch (result.data.name) {
              case 'portrait':
                element.url = 'assets/icon/@2x-format_vertical.png';
                break;
              case 'square':
                element.url = 'assets/icon/@2x-format_square.png';
                break;
              case 'landscape':
                element.url = 'assets/icon/@2x-format_landscape.png';
                break;
            }
          } else {
            element['id'] = result.data.id;
            element.name = result.data.name;
            console.log(this.displayOptionsService.fetchDisplayOptions());

            element.url = result.data.imageUrl;
          }
        } else {
          return;
        }
      });
  }

  ngOnDestroy() {
    this.uuidSub.unsubscribe();
  }
}
