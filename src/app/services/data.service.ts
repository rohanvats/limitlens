import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getExamples() {
    return this.http.get('http://localhost:3000/api/v1/example');
  }

  getLightingData() {
    const lighting = [
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
    ];
    return of(lighting);
  }

  // getDisplayOption(option: string) {
  //   return of([
  //     {
  //       key: 'camera',
  //       data: [
  //         {
  //           name: 'eye level',
  //           styleImage:
  //             'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Camera/eye_level.webp',
  //         },
  //         {
  //           name: 'fish eye',
  //           styleImage:
  //             'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Camera/fish_eye.webp',
  //         },
  //         {
  //           name: 'low angle',
  //           styleImage:
  //             'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Camera/low_angle.webp',
  //         },
  //         {
  //           name: 'high angle',
  //           styleImage:
  //             'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Camera/high_angle.webp',
  //         },
  //         {
  //           name: 'side view',
  //           styleImage:
  //             'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Camera/side_view.webp',
  //         },
  //         {
  //           name: 'dutch angle',
  //           styleImage:
  //             'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Camera/dutch_angle.webp',
  //         },
  //         {
  //           name: 'close up',
  //           styleImage:
  //             'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Camera/close_up.webp',
  //         },
  //       ],
  //     },
  //     {
  //       key: 'lighting',
  //       data: [
  //         {
  //           name: 'artificial',
  //           styleImage:
  //             'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Lighting/artificial.webp',
  //         },
  //         {
  //           name: 'background',
  //           styleImage:
  //             'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Lighting/background.webp',
  //         },
  //         {
  //           name: 'backlight',
  //           styleImage:
  //             'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Lighting/backlight.webp',
  //         },
  //         {
  //           name: 'blur',
  //           styleImage:
  //             'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Lighting/blur.webp',
  //         },
  //         {
  //           name: 'bokeh',
  //           styleImage:
  //             'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Lighting/bokeh.webp',
  //         },
  //         {
  //           name: 'diffused',
  //           styleImage:
  //             'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Lighting/diffused.webp',
  //         },
  //         {
  //           name: 'direct',
  //           styleImage:
  //             'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Lighting/direct.webp',
  //         },
  //         {
  //           name: 'dawn',
  //           styleImage:
  //             'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Lighting/dawn.webp',
  //         },
  //         {
  //           name: 'dusk',
  //           styleImage:
  //             'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Lighting/dusk.webp',
  //         },
  //         {
  //           name: 'gelled',
  //           styleImage:
  //             'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Lighting/gelled.webp',
  //         },
  //         {
  //           name: 'hard light',
  //           styleImage:
  //             'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Lighting/hard_light.webp',
  //         },
  //         {
  //           name: 'high key',
  //           styleImage:
  //             'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Lighting/high_key.webp',
  //         },
  //         {
  //           name: 'low key',
  //           styleImage:
  //             'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Lighting/low_key.webp',
  //         },
  //         {
  //           name: 'mixed',
  //           styleImage:
  //             'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Lighting/mixed.webp',
  //         },
  //         {
  //           name: 'moonlight',
  //           styleImage:
  //             'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Lighting/moonlight.webp',
  //         },
  //         {
  //           name: 'neon',
  //           styleImage:
  //             'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Lighting/neon.webp',
  //         },
  //         {
  //           name: 'rembrandt',
  //           styleImage:
  //             'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Lighting/rembrandt.webp',
  //         },
  //         {
  //           name: 'rim light',
  //           styleImage:
  //             'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Lighting/rim_light.webp',
  //         },
  //         {
  //           name: 'side light',
  //           styleImage:
  //             'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Lighting/side_light.webp',
  //         },
  //         {
  //           name: 'soft light',
  //           styleImage:
  //             'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Lighting/soft_light.webp',
  //         },
  //         {
  //           name: 'sunlight',
  //           styleImage:
  //             'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Lighting/sunlight.webp',
  //         },
  //         {
  //           name: 'top',
  //           styleImage:
  //             'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Lighting/top.webp',
  //         },
  //         {
  //           name: 'direct',
  //           styleImage:
  //             'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Lighting/direct.webp',
  //         },
  //         {
  //           name: 'window',
  //           styleImage:
  //             'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Lighting/window.webp',
  //         },
  //       ],
  //     },
  //     {
  //       key: 'styling',
  //       data: [
  //         {
  //           name: '3d',
  //           styleImage:
  //             'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Styles/3D.webp',
  //         },
  //         {
  //           name: 'black & white',
  //           styleImage:
  //             'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Styles/black___white.webp',
  //         },
  //         {
  //           name: 'blueprint',
  //           styleImage:
  //             'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Styles/blueprint.webp',
  //         },
  //         {
  //           name: 'charcoal',
  //           styleImage:
  //             'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Styles/charcoal_drawing.webp',
  //         },
  //         {
  //           name: 'comics',
  //           styleImage:
  //             'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Styles/comic.webp',
  //         },
  //         {
  //           name: 'cyberpunk',
  //           styleImage:
  //             'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Styles/cyberpunk.webp',
  //         },
  //         {
  //           name: 'gothic',
  //           styleImage:
  //             'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Styles/gothic.webp',
  //         },
  //         {
  //           name: 'graffiti',
  //           styleImage:
  //             'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Styles/graffiti.webp',
  //         },
  //         {
  //           name: 'heroic fantasy',
  //           styleImage:
  //             'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Styles/heroic_fantasy.webp',
  //         },
  //         {
  //           name: 'japan art',
  //           styleImage:
  //             'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Styles/japan_art.webp',
  //         },
  //         {
  //           name: 'movie',
  //           styleImage:
  //             'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Styles/movie.webp',
  //         },
  //         {
  //           name: 'oil painting',
  //           styleImage:
  //             'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Styles/oil_painting.webp',
  //         },
  //         {
  //           name: 'pastel',
  //           styleImage:
  //             'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Styles/pastel_drawing.webp',
  //         },
  //         {
  //           name: 'polaroid',
  //           styleImage:
  //             'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Styles/polaroid.webp',
  //         },
  //         {
  //           name: 'pop art',
  //           styleImage:
  //             'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Styles/pop_art.webp',
  //         },
  //       ],
  //       format: [],
  //     },
  //   ]).pipe(map((options) => options.find((el) => el.key === option)));
  // }

  // getCameraData() {
  //   const camera = [
  //     {
  //       name: 'eye level',
  //       styleImage:
  //         'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Camera/eye_level.webp',
  //     },
  //     {
  //       name: 'fish eye',
  //       styleImage:
  //         'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Camera/fish_eye.webp',
  //     },
  //     {
  //       name: 'low angle',
  //       styleImage:
  //         'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Camera/low_angle.webp',
  //     },
  //     {
  //       name: 'high angle',
  //       styleImage:
  //         'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Camera/high_angle.webp',
  //     },
  //     {
  //       name: 'side view',
  //       styleImage:
  //         'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Camera/side_view.webp',
  //     },
  //     {
  //       name: 'dutch angle',
  //       styleImage:
  //         'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Camera/dutch_angle.webp',
  //     },
  //     {
  //       name: 'close up',
  //       styleImage:
  //         'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Camera/close_up.webp',
  //     },
  //   ];
  //   return of(camera);
  // }

  // getStylingData(): Observable<any> {
  //   const styling = [
  //     {
  //       name: '3d',
  //       styleImage:
  //         'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Styles/3D.webp',
  //     },
  //     {
  //       name: 'black & white',
  //       styleImage:
  //         'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Styles/black___white.webp',
  //     },
  //     {
  //       name: 'blueprint',
  //       styleImage:
  //         'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Styles/blueprint.webp',
  //     },
  //     {
  //       name: 'charcoal',
  //       styleImage:
  //         'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Styles/charcoal_drawing.webp',
  //     },
  //     {
  //       name: 'comics',
  //       styleImage:
  //         'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Styles/comic.webp',
  //     },
  //     {
  //       name: 'cyberpunk',
  //       styleImage:
  //         'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Styles/cyberpunk.webp',
  //     },
  //     {
  //       name: 'gothic',
  //       styleImage:
  //         'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Styles/gothic.webp',
  //     },
  //     {
  //       name: 'graffiti',
  //       styleImage:
  //         'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Styles/graffiti.webp',
  //     },
  //     {
  //       name: 'heroic fantasy',
  //       styleImage:
  //         'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Styles/heroic_fantasy.webp',
  //     },
  //     {
  //       name: 'japan art',
  //       styleImage:
  //         'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Styles/japan_art.webp',
  //     },
  //     {
  //       name: 'movie',
  //       styleImage:
  //         'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Styles/movie.webp',
  //     },
  //     {
  //       name: 'oil painting',
  //       styleImage:
  //         'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Styles/oil_painting.webp',
  //     },
  //     {
  //       name: 'pastel',
  //       styleImage:
  //         'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Styles/pastel_drawing.webp',
  //     },
  //     {
  //       name: 'polaroid',
  //       styleImage:
  //         'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Styles/polaroid.webp',
  //     },
  //     {
  //       name: 'pop art',
  //       styleImage:
  //         'assets/UI_Images/WebP_Regular_Size/App_Filters_small_size-assets/Styles/pop_art.webp',
  //     },
  //   ];
  //   return of(styling);
  // }

  getPurposeData(): Observable<any> {
    const purposeOptions = [
      { name: 'screen image', value: 'screen image', iconName: 'image' },
      { name: 'printable image', value: 'printable image', iconName: 'print' },
    ];
    return of(purposeOptions);
  }

  getRadioOptions(): Observable<any> {
    const ratioOptions = [
      {
        name: 'portrait',
        value: 'portrait',
        image: '../../../../../assets/icon/Portrait.png',
      },
      {
        name: 'square',
        value: 'square',
        image: '../../../../../assets/icon/Square.png',
      },
      {
        name: 'landscape',
        value: 'landscape',
        image: '../../../../../assets/icon/Landscape.png',
      },
    ];
    return of(ratioOptions);
  }

  // getGlobalFeedData() {
  //   const globalFeedImages = [
  //     { name: 'HYPER REALISTIC', url: 'https://picsum.photos/200' },
  //     { name: 'DYNAMIC COMPOSITION', url: 'https://picsum.photos/300' },
  //     { name: 'RETRO ILLUSTRATION', url: 'https://picsum.photos/100' },
  //     { name: 'VINTAGE LOOK', url: 'https://picsum.photos/400' },
  //     { name: 'CARTOON', url: 'https://picsum.photos/500' },
  //     { name: 'AVANTGARDE FASHION', url: 'https://picsum.photos/600' },
  //     { name: 'ALBUM COVER', url: 'https://picsum.photos/700' },
  //     { name: 'POLITICAL PROPAGANDA', url: 'https://picsum.photos/800' },
  //     { name: 'HORROR', url: 'https://picsum.photos/900' },
  //     { name: 'DYSTOPIAN', url: 'https://picsum.photos/100' },
  //     { name: 'STOCK PHOTO', url: 'https://picsum.photos/400' },
  //     { name: 'ART', url: 'https://picsum.photos/300' },
  //     { name: 'VIDEO GAME', url: 'https://picsum.photos/600' },
  //     { name: 'AIRBRUSH ART', url: 'https://picsum.photos/300' },
  //     { name: 'MOVIE', url: 'https://picsum.photos/800' },
  //     { name: 'HYPER REALISTIC', url: 'https://picsum.photos/200' },
  //     { name: 'DYNAMIC COMPOSITION', url: 'https://picsum.photos/300' },
  //     { name: 'RETRO ILLUSTRATION', url: 'https://picsum.photos/100' },
  //     { name: 'VINTAGE LOOK', url: 'https://picsum.photos/400' },
  //     { name: 'CARTOON', url: 'https://picsum.photos/500' },
  //     { name: 'AVANTGARDE FASHION', url: 'https://picsum.photos/600' },
  //     { name: 'ALBUM COVER', url: 'https://picsum.photos/700' },
  //     { name: 'POLITICAL PROPAGANDA', url: 'https://picsum.photos/800' },
  //     { name: 'HORROR', url: 'https://picsum.photos/900' },
  //     { name: 'DYSTOPIAN', url: 'https://picsum.photos/100' },
  //     { name: 'STOCK PHOTO', url: 'https://picsum.photos/400' },
  //     { name: 'ART', url: 'https://picsum.photos/300' },
  //     { name: 'VIDEO GAME', url: 'https://picsum.photos/600' },
  //     { name: 'AIRBRUSH ART', url: 'https://picsum.photos/300' },
  //     { name: 'MOVIE', url: 'https://picsum.photos/800' },
  //     { name: 'HYPER REALISTIC', url: 'https://picsum.photos/200' },
  //     { name: 'DYNAMIC COMPOSITION', url: 'https://picsum.photos/300' },
  //     { name: 'RETRO ILLUSTRATION', url: 'https://picsum.photos/100' },
  //     { name: 'VINTAGE LOOK', url: 'https://picsum.photos/400' },
  //     { name: 'CARTOON', url: 'https://picsum.photos/500' },
  //     { name: 'AVANTGARDE FASHION', url: 'https://picsum.photos/600' },
  //     { name: 'ALBUM COVER', url: 'https://picsum.photos/700' },
  //     { name: 'POLITICAL PROPAGANDA', url: 'https://picsum.photos/800' },
  //     { name: 'HORROR', url: 'https://picsum.photos/900' },
  //     { name: 'DYSTOPIAN', url: 'https://picsum.photos/100' },
  //     { name: 'STOCK PHOTO', url: 'https://picsum.photos/400' },
  //     { name: 'ART', url: 'https://picsum.photos/300' },
  //     { name: 'VIDEO GAME', url: 'https://picsum.photos/600' },
  //     { name: 'AIRBRUSH ART', url: 'https://picsum.photos/300' },
  //     { name: 'MOVIE', url: 'https://picsum.photos/800' },
  //   ];
  //   return of(globalFeedImages);
  // }

  getCartData() {
    const cartData = [
      {
        name: 'Samurai Rom',
        url: 'https://picsum.photos/200',
        price: 12.99,
        dimentions: 'Screen Landscape',
        upscale: 3,
      },
      {
        name: 'Estelle Quin',
        url: 'https://picsum.photos/200',
        price: 1.99,
        upscale: 3,
        sizeAndQuantity: {
          size: 'M',
          quantity: 3,
        },
      },
      {
        name: 'Samurai Rom',
        url: 'https://picsum.photos/200',
        dimentions: 'Screen Landscape',
        price: 12.99,
        upscale: 3,
      },
      {
        name: 'Samurai Rom',
        url: 'https://picsum.photos/200',
        price: 12.99,
        upscale: 3,
        sizeAndQuantity: {
          size: 'L',
          quantity: 5,
        },
      },
    ];
    return of(cartData);
  }

  getGalleryData() {
    const galleryData = [
      { name: 'HYPER REALISTIC', url: 'https://picsum.photos/200' },
      { name: 'DYNAMIC COMPOSITION', url: 'https://picsum.photos/300' },
      { name: 'RETRO ILLUSTRATION', url: 'https://picsum.photos/100' },
      { name: 'VINTAGE LOOK', url: 'https://picsum.photos/400' },
      { name: 'CARTOON', url: 'https://picsum.photos/500' },
      { name: 'AVANTGARDE FASHION', url: 'https://picsum.photos/600' },
      { name: 'ALBUM COVER', url: 'https://picsum.photos/700' },
      { name: 'POLITICAL PROPAGANDA', url: 'https://picsum.photos/800' },
      { name: 'HORROR', url: 'https://picsum.photos/900' },
      { name: 'DYSTOPIAN', url: 'https://picsum.photos/100' },
      { name: 'STOCK PHOTO', url: 'https://picsum.photos/400' },
      { name: 'ART', url: 'https://picsum.photos/300' },
      { name: 'VIDEO GAME', url: 'https://picsum.photos/600' },
      { name: 'AIRBRUSH ART', url: 'https://picsum.photos/300' },
      { name: 'MOVIE', url: 'https://picsum.photos/800' },
      { name: 'HYPER REALISTIC', url: 'https://picsum.photos/200' },
      { name: 'DYNAMIC COMPOSITION', url: 'https://picsum.photos/300' },
      { name: 'RETRO ILLUSTRATION', url: 'https://picsum.photos/100' },
      { name: 'VINTAGE LOOK', url: 'https://picsum.photos/400' },
      { name: 'CARTOON', url: 'https://picsum.photos/500' },
      { name: 'AVANTGARDE FASHION', url: 'https://picsum.photos/600' },
      { name: 'ALBUM COVER', url: 'https://picsum.photos/700' },
      { name: 'POLITICAL PROPAGANDA', url: 'https://picsum.photos/800' },
      { name: 'HORROR', url: 'https://picsum.photos/900' },
      { name: 'DYSTOPIAN', url: 'https://picsum.photos/100' },
      { name: 'STOCK PHOTO', url: 'https://picsum.photos/400' },
      { name: 'ART', url: 'https://picsum.photos/300' },
      { name: 'VIDEO GAME', url: 'https://picsum.photos/600' },
      { name: 'AIRBRUSH ART', url: 'https://picsum.photos/300' },
      { name: 'MOVIE', url: 'https://picsum.photos/800' },
      { name: 'HYPER REALISTIC', url: 'https://picsum.photos/200' },
      { name: 'DYNAMIC COMPOSITION', url: 'https://picsum.photos/300' },
      { name: 'RETRO ILLUSTRATION', url: 'https://picsum.photos/100' },
      { name: 'VINTAGE LOOK', url: 'https://picsum.photos/400' },
      { name: 'CARTOON', url: 'https://picsum.photos/500' },
      { name: 'AVANTGARDE FASHION', url: 'https://picsum.photos/600' },
      { name: 'ALBUM COVER', url: 'https://picsum.photos/700' },
      { name: 'POLITICAL PROPAGANDA', url: 'https://picsum.photos/800' },
      { name: 'HORROR', url: 'https://picsum.photos/900' },
      { name: 'DYSTOPIAN', url: 'https://picsum.photos/100' },
      { name: 'STOCK PHOTO', url: 'https://picsum.photos/400' },
      { name: 'ART', url: 'https://picsum.photos/300' },
      { name: 'VIDEO GAME', url: 'https://picsum.photos/600' },
      { name: 'AIRBRUSH ART', url: 'https://picsum.photos/300' },
      { name: 'MOVIE', url: 'https://picsum.photos/800' },
    ];
    return of(galleryData);
  }

  private instructions: {
    image: string;
    text1: string;
    text2: string;
    buttonText: string;
  }[] = [
    {
      image: 'https://picsum.photos/300/300?random=1',
      text1: 'Take a photo and add your text customization',
      text2:
        'Take a picture on the spot or use an old one. Or just ask what you need',
      buttonText: 'NEXT',
    },
    {
      image: 'https://picsum.photos/300/300?random=2',
      text1: 'Adjust Filters',
      text2:
        'Realistic or Anime ? In the style of Vincent Van Gogh? Pick your choice, well do the rest !',
      buttonText: 'NEXT',
    },
    {
      image: 'https://picsum.photos/300/300?random=3',
      text1: 'Get fast results !',
      text2:
        'Ready to see yourself or your uncle as a badass biker ? Lets goand click below!',
      buttonText: 'NEXT',
    },
    {
      image: 'https://picsum.photos/300/300?random=4',
      text1: 'Enhancing and printing',
      text2:
        'Like what you see ? Download the result, enhance it and print it as wall art !',
      buttonText: 'GET STARTED',
    },
  ];

  getInstructions() {
    return this.instructions;
  }
}
