import { Injectable } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';

import { DisplayOptions } from '../interfaces/displayOptions.interface';
import { Observable, forkJoin, map, shareReplay } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CreateService } from '../pages/tabs/create/create.service';

@Injectable({
  providedIn: 'root',
})
export class DisplayOptionsService {
  constructor(private http: HttpClient) {}

  private displayOptions = [
    {
      name: 'format',
      value: 'format',
      // url: 'assets/UI_Images/WebP_Regular_Size/App_Filters_Titles_small_size-assets/format.webp',
      url: 'assets/UI_Images/Latest App Icons/Format.webp',
    },
    {
      name: 'styling',
      value: 'styling',
      // url: 'assets/UI_Images/WebP_Regular_Size/App_Filters_Titles_small_size-assets/styles.webp',
      url: 'assets/UI_Images/Latest App Icons/Styling.webp',
    },
    {
      name: 'lighting',
      value: 'lighting',
      // url: 'assets/UI_Images/WebP_Regular_Size/App_Filters_Titles_small_size-assets/lighting.webp',
      url: 'assets/UI_Images/Latest App Icons/Lighting.webp',
    },
    {
      name: 'camera',
      value: 'camera',
      // url: 'assets/UI_Images/WebP_Regular_Size/App_Filters_Titles_small_size-assets/camera.webp',
      url: 'assets/UI_Images/Latest App Icons/Camera.webp',
    },
  ];

  fetchDisplayOptions() {
    return this.displayOptions;
  }
}
