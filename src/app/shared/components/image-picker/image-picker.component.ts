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
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';
import { ToastService } from 'src/app/helper/toast.service';

@Component({
  selector: 'app-image-picker',
  templateUrl: './image-picker.component.html',
  styleUrls: ['./image-picker.component.scss'],
  providers: [ToastService],
})
export class ImagePickerComponent implements OnInit {
  @Output() imagePick = new EventEmitter<any>();
  selectedImage: any;
  @Input() classFlag: string;
  imgUploadClass: string;
  @Input() imgPickerHeight: any;
  @Output() userImageUUID = new EventEmitter<any>();
  showSpinner$: Observable<boolean>;

  images: any = [];
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    public toastService: ToastService
  ) {}

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
        resultType: CameraResultType.Uri,
      });

      if (image) {
        await this.fileUpload(image, this.authService.uuid);
        console.log(`${image.webPath}.${image.format}`);
      }
    } catch (error) {
      console.log('error occured: ', error);
    }
  }

  async fileUpload(file: any, uuid) {
    const response = await fetch(file.webPath);
    const blob = await response.blob();
    console.log('blob...', blob);
    const formData = new FormData();
    formData.append('image', blob, file.name);
    formData.append('uuid', uuid);
    this.uploadData(formData, file);
  }

  async uploadData(formData: FormData, image) {
    this.toastService.toggleSpinner(true);
    const url = `${environment.URL}/user/image/upload`;

    this.http.post(url, formData).subscribe({
      next: (res: any) => {
        if (res['success']) {
          this.selectedImage = image.webPath;
          this.imagePick.emit(image.webPath);
          this.userImageUUID.emit(res.uuid);
          this.toastService.toggleSpinner(false);
          this.toastService.PresentToast(res['message']);
        } else {
          this.toastService.toggleSpinner(false);
          this.toastService.PresentToast('File upload failed.');
        }
      },
      error: () => {
        this.toastService.toggleSpinner(false);
        this.toastService.PresentToast('Upload image failed');
      },
    });
  }
}
