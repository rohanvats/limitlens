import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Plugins, Capacitor } from '@capacitor/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-image-picker',
  templateUrl: './image-picker.component.html',
  styleUrls: ['./image-picker.component.scss'],
})
export class ImagePickerComponent  implements OnInit {

  @Output() imagePick = new EventEmitter<any>();
  selectedImage: any;

  constructor(private platform: Platform) { }

  ngOnInit() {
    console.log('Mobile: ', this.platform.is('mobile'));
    console.log('desktop: ', this.platform.is('desktop'));
    console.log('ios: ', this.platform.is('ios'));
    console.log('android: ', this.platform.is('android'));
    console.log('hybrid: ', this.platform.is('hybrid'));
  }

  onPickImage(){
    if(!Capacitor.isPluginAvailable('Camera')){
      return;
    }
    try{
      this.takePicture();
    }catch(err){
      console.log('error: ', err);
    }  
  }

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
    this.selectedImage = image.webPath;
    this.imagePick.emit(image.base64String)

  }

}
