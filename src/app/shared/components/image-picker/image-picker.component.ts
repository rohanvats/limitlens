import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Plugins, Capacitor } from '@capacitor/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
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

  checkPlatformForWeb(){
    if(Capacitor.getPlatform() === 'web') return true;
    return false;
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
    try{
      const image = await Camera.getPhoto({
        quality: 90,
        source: CameraSource.Prompt,
        // allowEditing: true,
        resultType:CameraResultType.Uri
        // resultType: this.checkPlatformForWeb() ? CameraResultType.DataUrl : CameraResultType.Uri
      });
      this.selectedImage = image.webPath;
      this.imagePick.emit(image.webPath)
    }catch(error){
        console.log('error occured: ', error)
    }

  }

}
