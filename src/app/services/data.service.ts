import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class DataService{

    getLightingData(){
        const lighting = [
            {name: 'artificial', styleImage: 'assets/UI_Images/Regular_Size/App_Filters_small_size-assets/artificial.png'},
            {name: 'background', styleImage: 'assets/UI_Images/Regular_Size/App_Filters_small_size-assets/background.png'},
            {name: 'backlight', styleImage: 'assets/UI_Images/Regular_Size/App_Filters_small_size-assets/backlight.png'},
            {name: 'blur',styleImage: 'assets/UI_Images/Regular_Size/App_Filters_small_size-assets/blur.png'},
            {name: 'bokeh', styleImage: 'assets/UI_Images/Regular_Size/App_Filters_small_size-assets/bokeh.png'},
            {name: 'close up',styleImage: 'assets/UI_Images/Regular_Size/App_Filters_small_size-assets/close_up.png'},
            {name: 'diffused',styleImage: 'assets/UI_Images/Regular_Size/App_Filters_small_size-assets/diffused.png'},
            {name: 'direct',styleImage: 'assets/UI_Images/Regular_Size/App_Filters_small_size-assets/direct.png'},
            {name: 'dawn',styleImage: 'assets/UI_Images/Regular_Size/App_Filters_small_size-assets/dawn.png'},
            {name: 'dusk',styleImage: 'assets/UI_Images/Regular_Size/App_Filters_small_size-assets/dusk.png'},
            {name: 'gelled',styleImage: 'assets/UI_Images/Regular_Size/App_Filters_small_size-assets/gelled.png'},
            {name: 'hard light',styleImage: 'assets/UI_Images/Regular_Size/App_Filters_small_size-assets/hard_light.png'},
            {name: 'heroic fantasy',styleImage: 'assets/UI_Images/Regular_Size/App_Filters_small_size-assets/heroic_fantasy.png'},
            {name: 'high key',styleImage: 'assets/UI_Images/Regular_Size/App_Filters_small_size-assets/high_key.png'},
            {name: 'low key',styleImage: 'assets/UI_Images/Regular_Size/App_Filters_small_size-assets/low_key.png'},
            {name: 'mixed',styleImage: 'assets/UI_Images/Regular_Size/App_Filters_small_size-assets/mixed.png'},
            {name: 'moonlight',styleImage: 'assets/UI_Images/Regular_Size/App_Filters_small_size-assets/moonlight.png'},
            {name: 'neon',styleImage: 'assets/UI_Images/Regular_Size/App_Filters_small_size-assets/neon.png'},
            {name: 'rim_light',styleImage: 'assets/UI_Images/Regular_Size/App_Filters_small_size-assets/rim_light.png'},
            {name: 'side_light',styleImage: 'assets/UI_Images/Regular_Size/App_Filters_small_size-assets/side_light.png'},
            {name: 'soft light',styleImage: 'assets/UI_Images/Regular_Size/App_Filters_small_size-assets/soft_light.png'},
            {name: 'sunlight',styleImage: 'assets/UI_Images/Regular_Size/App_Filters_small_size-assets/sunlight.png'},
            {name: 'top',styleImage: 'assets/UI_Images/Regular_Size/App_Filters_small_size-assets/top.png'},
            {name: 'direct',styleImage: 'assets/UI_Images/Regular_Size/App_Filters_small_size-assets/direct.png'},
            {name: 'window',styleImage: 'assets/UI_Images/Regular_Size/App_Filters_small_size-assets/window.png'},

        ]
        return of(lighting)
    }

    getCameraData(){
        const camera= [
            {name: 'eye level', styleImage: 'assets/UI_Images/Regular_Size/App_Filters_small_size-assets/eye_level.png'},
            {name: 'fish eye', styleImage: 'assets/UI_Images/Regular_Size/App_Filters_small_size-assets/fish_eye.png'},
            {name: 'low angle', styleImage: 'assets/UI_Images/Regular_Size/App_Filters_small_size-assets/low_angle.png'},
            {name: 'high angle', styleImage: 'assets/UI_Images/Regular_Size/App_Filters_small_size-assets/high_angle.png'},
            {name: 'side view', styleImage: 'assets/UI_Images/Regular_Size/App_Filters_small_size-assets/side_view.png'},
            {name: 'dutch angle', styleImage: 'assets/UI_Images/Regular_Size/App_Filters_small_size-assets/dutch_angle.png'},
            {name: 'close up', styleImage: 'assets/UI_Images/Regular_Size/App_Filters_small_size-assets/close_up.png'},
            
        ]
        return of(camera)
    }

    getStylingData(): Observable<any> {
        const styling = [
            {name: '3d', styleImage: 'assets/UI_Images/Regular_Size/App_Filters_small_size-assets/3D.png'},
            {name: 'black & white', styleImage: 'assets/UI_Images/Regular_Size/App_Filters_small_size-assets/black_white.png'},
            {name: 'blueprint', styleImage: 'assets/UI_Images/Regular_Size/App_Filters_small_size-assets/blueprint.png'},
            {name: 'charcoal',styleImage: 'assets/UI_Images/Regular_Size/App_Filters_small_size-assets/charcoal_drawing.png'},
            {name: 'comics', styleImage: 'assets/UI_Images/Regular_Size/App_Filters_small_size-assets/comic.png'},
            {name: 'cyberpunk',styleImage: 'assets/UI_Images/Regular_Size/App_Filters_small_size-assets/cyberpunk.png'},
            {name: 'gothic',styleImage: 'assets/UI_Images/Regular_Size/App_Filters_small_size-assets/gothic.png'},
            {name: 'graffiti',styleImage: 'assets/UI_Images/Regular_Size/App_Filters_small_size-assets/graffiti.png'},
            {name: 'heroic fantasy',styleImage: 'assets/UI_Images/Regular_Size/App_Filters_small_size-assets/heroic_fantasy.png'},
            {name: 'japan art',styleImage: 'assets/UI_Images/Regular_Size/App_Filters_small_size-assets/japan_art.png'},
            {name: 'movie',styleImage: 'assets/UI_Images/Regular_Size/App_Filters_small_size-assets/movie.png'},
            {name: 'oil painting',styleImage: 'assets/UI_Images/Regular_Size/App_Filters_small_size-assets/oil_painting.png'},
            {name: 'pastel',styleImage: 'assets/UI_Images/Regular_Size/App_Filters_small_size-assets/pastel_drawing.png'},
            {name: 'polaroid',styleImage: 'assets/UI_Images/Regular_Size/App_Filters_small_size-assets/polaroid.png'},
            {name: 'pop art',styleImage: 'assets/UI_Images/Regular_Size/App_Filters_small_size-assets/pop_art.png'},
          ]
          return of(styling)
    }


    getPurposeData(): Observable<any>{
        const purposeOptions=[
            {name:'screen image', value: 'screen image', iconName: 'image'},
            {name:'printable image', value: 'printable image', iconName: 'print'}
          ]
        return of(purposeOptions)
    }


    getRadioOptions(): Observable<any>{
        const ratioOptions = [
            {name: 'portrait', value: 'portrait', image: '../../../../../assets/icon/Portrait.png'},
            {name: 'square', value: 'square', image: '../../../../../assets/icon/Square.png'},
            {name: 'landscape', value: 'landscape', image: '../../../../../assets/icon/Landscape.png'}
        ]
        return of(ratioOptions);
    }


    getGlobalFeedData(){
        const globalFeedImages = [
            {name: 'HYPER REALISTIC', url: 'https://picsum.photos/200'},
            {name: 'DYNAMIC COMPOSITION', url: 'https://picsum.photos/300'},
            {name: 'RETRO ILLUSTRATION', url: 'https://picsum.photos/100'},
            {name: 'VINTAGE LOOK', url: 'https://picsum.photos/400'},
            {name: 'CARTOON', url: 'https://picsum.photos/500'},
            {name: 'AVANTGARDE FASHION', url: 'https://picsum.photos/600'},
            {name: 'ALBUM COVER', url: 'https://picsum.photos/700'},
            {name: 'POLITICAL PROPAGANDA',url: 'https://picsum.photos/800'},
            {name: 'HORROR',url: 'https://picsum.photos/900'},
            {name: 'DYSTOPIAN',url: 'https://picsum.photos/100'},
            {name: 'STOCK PHOTO', url: 'https://picsum.photos/400'},
            {name: 'ART',url: 'https://picsum.photos/300'},
            {name: 'VIDEO GAME',url: 'https://picsum.photos/600'},
            {name: 'AIRBRUSH ART',url: 'https://picsum.photos/300'},
            {name: 'MOVIE',url: 'https://picsum.photos/800'},
            {name: 'HYPER REALISTIC', url: 'https://picsum.photos/200'},
            {name: 'DYNAMIC COMPOSITION', url: 'https://picsum.photos/300'},
            {name: 'RETRO ILLUSTRATION', url: 'https://picsum.photos/100'},
            {name: 'VINTAGE LOOK', url: 'https://picsum.photos/400'},
            {name: 'CARTOON', url: 'https://picsum.photos/500'},
            {name: 'AVANTGARDE FASHION', url: 'https://picsum.photos/600'},
            {name: 'ALBUM COVER', url: 'https://picsum.photos/700'},
            {name: 'POLITICAL PROPAGANDA',url: 'https://picsum.photos/800'},
            {name: 'HORROR',url: 'https://picsum.photos/900'},
            {name: 'DYSTOPIAN',url: 'https://picsum.photos/100'},
            {name: 'STOCK PHOTO', url: 'https://picsum.photos/400'},
            {name: 'ART',url: 'https://picsum.photos/300'},
            {name: 'VIDEO GAME',url: 'https://picsum.photos/600'},
            {name: 'AIRBRUSH ART',url: 'https://picsum.photos/300'},
            {name: 'MOVIE',url: 'https://picsum.photos/800'},
            {name: 'HYPER REALISTIC', url: 'https://picsum.photos/200'},
            {name: 'DYNAMIC COMPOSITION', url: 'https://picsum.photos/300'},
            {name: 'RETRO ILLUSTRATION', url: 'https://picsum.photos/100'},
            {name: 'VINTAGE LOOK', url: 'https://picsum.photos/400'},
            {name: 'CARTOON', url: 'https://picsum.photos/500'},
            {name: 'AVANTGARDE FASHION', url: 'https://picsum.photos/600'},
            {name: 'ALBUM COVER', url: 'https://picsum.photos/700'},
            {name: 'POLITICAL PROPAGANDA',url: 'https://picsum.photos/800'},
            {name: 'HORROR',url: 'https://picsum.photos/900'},
            {name: 'DYSTOPIAN',url: 'https://picsum.photos/100'},
            {name: 'STOCK PHOTO', url: 'https://picsum.photos/400'},
            {name: 'ART',url: 'https://picsum.photos/300'},
            {name: 'VIDEO GAME',url: 'https://picsum.photos/600'},
            {name: 'AIRBRUSH ART',url: 'https://picsum.photos/300'},
            {name: 'MOVIE',url: 'https://picsum.photos/800'}
          ]
          return of(globalFeedImages)

    }


    getCartData(){
        const cartData = [

            {
                name: 'Samurai Rom',
                url: 'https://picsum.photos/200',
                price: '12.99',
                upscale: 3,
                size: 'L',
                quantity: 5
            },
            {
                name: 'Estelle Quin',
                url: 'https://picsum.photos/200',
                price: '1.99',
                upscale: 3,
                size: 'M',
                quantity: 3
            },
            {
                name: 'Samurai Rom',
                url: 'https://picsum.photos/200',
                price: '12.99',
                upscale: 3,
                size: 'L',
                quantity: 2
            },
            {
                name: 'Samurai Rom',
                url: 'https://picsum.photos/200',
                price: '12.99',
                upscale: 3,
                size: 'L',
                quantity: 5
            },

        ]
        return of(cartData);
    }

    getGalleryData(){
        const galleryData = [
            {name: 'HYPER REALISTIC', url: 'https://picsum.photos/200'},
            {name: 'DYNAMIC COMPOSITION', url: 'https://picsum.photos/300'},
            {name: 'RETRO ILLUSTRATION', url: 'https://picsum.photos/100'},
            {name: 'VINTAGE LOOK', url: 'https://picsum.photos/400'},
            {name: 'CARTOON', url: 'https://picsum.photos/500'},
            {name: 'AVANTGARDE FASHION', url: 'https://picsum.photos/600'},
            {name: 'ALBUM COVER', url: 'https://picsum.photos/700'},
            {name: 'POLITICAL PROPAGANDA',url: 'https://picsum.photos/800'},
            {name: 'HORROR',url: 'https://picsum.photos/900'},
            {name: 'DYSTOPIAN',url: 'https://picsum.photos/100'},
            {name: 'STOCK PHOTO', url: 'https://picsum.photos/400'},
            {name: 'ART',url: 'https://picsum.photos/300'},
            {name: 'VIDEO GAME',url: 'https://picsum.photos/600'},
            {name: 'AIRBRUSH ART',url: 'https://picsum.photos/300'},
            {name: 'MOVIE',url: 'https://picsum.photos/800'},
            {name: 'HYPER REALISTIC', url: 'https://picsum.photos/200'},
            {name: 'DYNAMIC COMPOSITION', url: 'https://picsum.photos/300'},
            {name: 'RETRO ILLUSTRATION', url: 'https://picsum.photos/100'},
            {name: 'VINTAGE LOOK', url: 'https://picsum.photos/400'},
            {name: 'CARTOON', url: 'https://picsum.photos/500'},
            {name: 'AVANTGARDE FASHION', url: 'https://picsum.photos/600'},
            {name: 'ALBUM COVER', url: 'https://picsum.photos/700'},
            {name: 'POLITICAL PROPAGANDA',url: 'https://picsum.photos/800'},
            {name: 'HORROR',url: 'https://picsum.photos/900'},
            {name: 'DYSTOPIAN',url: 'https://picsum.photos/100'},
            {name: 'STOCK PHOTO', url: 'https://picsum.photos/400'},
            {name: 'ART',url: 'https://picsum.photos/300'},
            {name: 'VIDEO GAME',url: 'https://picsum.photos/600'},
            {name: 'AIRBRUSH ART',url: 'https://picsum.photos/300'},
            {name: 'MOVIE',url: 'https://picsum.photos/800'},
            {name: 'HYPER REALISTIC', url: 'https://picsum.photos/200'},
            {name: 'DYNAMIC COMPOSITION', url: 'https://picsum.photos/300'},
            {name: 'RETRO ILLUSTRATION', url: 'https://picsum.photos/100'},
            {name: 'VINTAGE LOOK', url: 'https://picsum.photos/400'},
            {name: 'CARTOON', url: 'https://picsum.photos/500'},
            {name: 'AVANTGARDE FASHION', url: 'https://picsum.photos/600'},
            {name: 'ALBUM COVER', url: 'https://picsum.photos/700'},
            {name: 'POLITICAL PROPAGANDA',url: 'https://picsum.photos/800'},
            {name: 'HORROR',url: 'https://picsum.photos/900'},
            {name: 'DYSTOPIAN',url: 'https://picsum.photos/100'},
            {name: 'STOCK PHOTO', url: 'https://picsum.photos/400'},
            {name: 'ART',url: 'https://picsum.photos/300'},
            {name: 'VIDEO GAME',url: 'https://picsum.photos/600'},
            {name: 'AIRBRUSH ART',url: 'https://picsum.photos/300'},
            {name: 'MOVIE',url: 'https://picsum.photos/800'}
          ]
          return of(galleryData)

    }


}