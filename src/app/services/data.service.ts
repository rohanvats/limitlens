import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class DataService{

    getStylingData(): Observable<any> {
        const styling = [
            {name: 'HYPER REALISTIC', styleImage: 'https://picsum.photos/200'},
            {name: 'DYNAMIC COMPOSITION', styleImage: 'https://picsum.photos/300'},
            {name: 'RETRO ILLUSTRATION', styleImage: 'https://picsum.photos/100'},
            {name: 'VINTAGE LOOK', styleImage: 'https://picsum.photos/400'},
            {name: 'CARTOON', styleImage: 'https://picsum.photos/500'},
            {name: 'AVANTGARDE FASHION', styleImage: 'https://picsum.photos/600'},
            {name: 'ALBUM COVER', styleImage: 'https://picsum.photos/700'},
            {name: 'POLITICAL PROPAGANDA',styleImage: 'https://picsum.photos/800'},
            {name: 'HORROR',styleImage: 'https://picsum.photos/900'},
            {name: 'DYSTOPIAN',styleImage: 'https://picsum.photos/100'},
            {name: 'STOCK PHOTO', styleImage: 'https://picsum.photos/400'},
            {name: 'ART',styleImage: 'https://picsum.photos/300'},
            {name: 'VIDEO GAME',styleImage: 'https://picsum.photos/600'},
            {name: 'AIRBRUSH ART',styleImage: 'https://picsum.photos/300'},
            {name: 'MOVIE',styleImage: 'https://picsum.photos/800'}
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

}