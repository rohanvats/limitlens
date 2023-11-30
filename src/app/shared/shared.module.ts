import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { ReactiveFormsModule } from "@angular/forms";

import { MainImageComponent } from "./components/main-image/main-image.component";
import { CustomCardButtonComponent } from "./components/custom-card-button/custom-card-button.component";
import { MainActionButtonComponent } from "./components/main-action-button/main-action-button.component";
import { ImagePickerComponent } from "./components/image-picker/image-picker.component";
import { MasonryGalleryComponent } from "./components/masonry-gallery/masonry-gallery.component";
import { CustomRadioGroupComponent } from "./components/custom-radio-group/custom-radio-group.component";


@NgModule({
    declarations:[
        MainImageComponent,
        CustomCardButtonComponent,
        MainActionButtonComponent,
        ImagePickerComponent,
        MasonryGalleryComponent,
        CustomRadioGroupComponent
    ],
    imports:[
        CommonModule,
        IonicModule,
        ReactiveFormsModule
    ],
    exports:[
        MainImageComponent,
        CustomCardButtonComponent,
        MainActionButtonComponent,
        ImagePickerComponent,
        MasonryGalleryComponent,
        CustomRadioGroupComponent
    ]
})
export class SharedModule {

}