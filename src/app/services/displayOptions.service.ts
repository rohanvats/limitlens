import { Injectable } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';

import {
  DisplayOptions,
  displayOption,
} from '../interfaces/displayOptions.interface';
import { Observable, forkJoin, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CreateService } from '../pages/tabs/create/create.service';

@Injectable({
  providedIn: 'root',
})
export class DisplayOptionsService {
  constructor(private http: HttpClient, private createService: CreateService) {}

  fetchDisplayOptions(): Observable<DisplayOptions[]> {
    return of([
      {
        name: 'format',
        value: 'format',
        url: 'assets/UI_Images/WebP_Regular_Size/App_Filters_Titles_small_size-assets/format.webp',
      },
      {
        name: 'styling',
        value: 'styling',
        url: 'assets/UI_Images/WebP_Regular_Size/App_Filters_Titles_small_size-assets/styles.webp',
      },
      {
        name: 'lighting',
        value: 'lighting',
        url: 'assets/UI_Images/WebP_Regular_Size/App_Filters_Titles_small_size-assets/lighting.webp',
      },
      {
        name: 'camera',
        value: 'camera',
        url: 'assets/UI_Images/WebP_Regular_Size/App_Filters_Titles_small_size-assets/camera.webp',
      },
    ]);
  }

  getDisplayOption(option: string): any {
    return this.createService.displayOptions$.pipe(
      map((options) => options.find((el: any) => el.key === option))
    );
  }
}
