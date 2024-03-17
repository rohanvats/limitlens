import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Platform } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image-picker',
  templateUrl: './image-picker.component.html',
  styleUrls: ['./image-picker.component.scss'],
})
export class ImagePickerComponent implements OnInit {
  @Output() imagePick = new EventEmitter<any>();
  selectedImage: any;
  @Input() classFlag: string;
  imgUploadClass: string;
  @Input() imgPickerHeight: any;

  constructor(private platform: Platform, private route: ActivatedRoute) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['classFlag']) {
      this.imgUploadStyle();
    }
  }

  imgUploadStyle() {
    switch (this.classFlag) {
      case 'create':
        this.imgUploadClass = 'optCreateImageUpload';
        break;
      case 'faceswap':
        this.imgUploadClass = 'faceSwapImageUpload';
        break;
      case 'avatar':
        this.imgUploadClass = 'avatarImageUpload';
        break;
    }
    return this.imgUploadClass;
  }

  checkPlatformForWeb() {
    if (Capacitor.getPlatform() === 'web') return true;
    return false;
  }

  onPickImage() {
    if (!Capacitor.isPluginAvailable('Camera')) {
      return;
    }
    try {
      this.takePicture();
    } catch (err) {
      console.log('error: ', err);
    }
  }

  async takePicture() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        source: CameraSource.Prompt,
        // allowEditing: true,
        resultType: CameraResultType.Uri,
        // resultType: this.checkPlatformForWeb() ? CameraResultType.DataUrl : CameraResultType.Uri
      });
      this.selectedImage = image.webPath;
      this.imagePick.emit(image.webPath);
    } catch (error) {
      console.log('error occured: ', error);
    }
  }
}
