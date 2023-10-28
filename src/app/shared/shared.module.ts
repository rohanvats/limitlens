import { NgModule } from "@angular/core";
import { MainImageComponent } from "./components/main-image/main-image.component";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { CustomCardButtonComponent } from "./components/custom-card-button/custom-card-button.component";


@NgModule({
    declarations:[
        MainImageComponent,
        CustomCardButtonComponent
    ],
    imports:[
        CommonModule,
        IonicModule
    ],
    exports:[
        MainImageComponent,
        CustomCardButtonComponent
    ]
})
export class SharedModule {

}