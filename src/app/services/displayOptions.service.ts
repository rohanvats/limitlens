import { Injectable } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';

import {
  DisplayOptions,
  displayOption,
} from '../interfaces/displayOptions.interface';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DisplayOptionsService {
  constructor() {}

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

  getDisplayOption(option: string): Observable<displayOption> {
    return of([
      {
        key: 'camera',
        data: [
          {
            name: 'eye level',
            styleImage:
              'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Camera/eye_level.webp',
          },
          {
            name: 'fish eye',
            styleImage:
              'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Camera/fish_eye.webp',
          },
          {
            name: 'low angle',
            styleImage:
              'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Camera/low_angle.webp',
          },
          {
            name: 'high angle',
            styleImage:
              'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Camera/high_angle.webp',
          },
          {
            name: 'side view',
            styleImage:
              'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Camera/side_view.webp',
          },
          {
            name: 'dutch angle',
            styleImage:
              'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Camera/dutch_angle.webp',
          },
          {
            name: 'close up',
            styleImage:
              'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Camera/close_up.webp',
          },
        ],
      },
      {
        key: 'lighting',
        data: [
          {
            name: 'artificial',
            styleImage:
              'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Lighting/artificial.webp',
          },
          {
            name: 'background',
            styleImage:
              'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Lighting/background.webp',
          },
          {
            name: 'backlight',
            styleImage:
              'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Lighting/backlight.webp',
          },
          {
            name: 'blur',
            styleImage:
              'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Lighting/blur.webp',
          },
          {
            name: 'bokeh',
            styleImage:
              'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Lighting/bokeh.webp',
          },
          {
            name: 'diffused',
            styleImage:
              'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Lighting/diffused.webp',
          },
          {
            name: 'direct',
            styleImage:
              'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Lighting/direct.webp',
          },
          {
            name: 'dawn',
            styleImage:
              'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Lighting/dawn.webp',
          },
          {
            name: 'dusk',
            styleImage:
              'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Lighting/dusk.webp',
          },
          {
            name: 'gelled',
            styleImage:
              'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Lighting/gelled.webp',
          },
          {
            name: 'hard light',
            styleImage:
              'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Lighting/hard_light.webp',
          },
          {
            name: 'high key',
            styleImage:
              'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Lighting/high_key.webp',
          },
          {
            name: 'low key',
            styleImage:
              'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Lighting/low_key.webp',
          },
          {
            name: 'mixed',
            styleImage:
              'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Lighting/mixed.webp',
          },
          {
            name: 'moonlight',
            styleImage:
              'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Lighting/moonlight.webp',
          },
          {
            name: 'neon',
            styleImage:
              'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Lighting/neon.webp',
          },
          {
            name: 'rembrandt',
            styleImage:
              'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Lighting/rembrandt.webp',
          },
          {
            name: 'rim light',
            styleImage:
              'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Lighting/rim_light.webp',
          },
          {
            name: 'side light',
            styleImage:
              'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Lighting/side_light.webp',
          },
          {
            name: 'soft light',
            styleImage:
              'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Lighting/soft_light.webp',
          },
          {
            name: 'sunlight',
            styleImage:
              'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Lighting/sunlight.webp',
          },
          {
            name: 'top',
            styleImage:
              'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Lighting/top.webp',
          },
          {
            name: 'direct',
            styleImage:
              'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Lighting/direct.webp',
          },
          {
            name: 'window',
            styleImage:
              'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Lighting/window.webp',
          },
        ],
      },
      {
        key: 'styling',
        data: [
          {
            name: '3d',
            styleImage:
              'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Styles/3D.webp',
          },
          {
            name: 'black & white',
            styleImage:
              'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Styles/black___white.webp',
          },
          {
            name: 'blueprint',
            styleImage:
              'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Styles/blueprint.webp',
          },
          {
            name: 'charcoal',
            styleImage:
              'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Styles/charcoal_drawing.webp',
          },
          {
            name: 'comics',
            styleImage:
              'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Styles/comic.webp',
          },
          {
            name: 'cyberpunk',
            styleImage:
              'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Styles/cyberpunk.webp',
          },
          {
            name: 'gothic',
            styleImage:
              'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Styles/gothic.webp',
          },
          {
            name: 'graffiti',
            styleImage:
              'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Styles/graffiti.webp',
          },
          {
            name: 'heroic fantasy',
            styleImage:
              'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Styles/heroic_fantasy.webp',
          },
          {
            name: 'japan art',
            styleImage:
              'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Styles/japan_art.webp',
          },
          {
            name: 'movie',
            styleImage:
              'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Styles/movie.webp',
          },
          {
            name: 'oil painting',
            styleImage:
              'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Styles/oil_painting.webp',
          },
          {
            name: 'pastel',
            styleImage:
              'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Styles/pastel_drawing.webp',
          },
          {
            name: 'polaroid',
            styleImage:
              'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Styles/polaroid.webp',
          },
          {
            name: 'pop art',
            styleImage:
              'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Styles/pop_art.webp',
          },
        ],
      },
    ]).pipe(map((options) => options.find((el) => el.key === option)));
  }
}
