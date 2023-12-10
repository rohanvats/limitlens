import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss'],
})
export class FilterModalComponent implements OnInit {
  @Input() filterType: any;

  selectedValue = '';
  styling: any = [];
  radioOptions: any = [];
  purposeOptions: any = [];
  images: any = [];
  lighting: any = [];
  camera: any = [];
  backgroundImage: string = '';

  styleForm = new FormGroup({
    style: new FormControl(null, [Validators.required]),
  });

  lightingForm = new FormGroup({
    lighting: new FormControl(null, [Validators.required]),
  });

  cameraForm = new FormGroup({
    camera: new FormControl(null, [Validators.required]),
  });

  formatForm = new FormGroup({
    imageType: new FormControl('', [Validators.required]),
    ratio: new FormControl('', [Validators.required]),
  });

  constructor(
    private modalCtrl: ModalController,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.getStyleData();
    this.getFormatRatioData();
    this.getFormatPurposeData();
    this.getImages();
    this.getCameraData();
    this.getLightingData();
    this.selectBackgroundImage();
  }

  selectBackgroundImage() {
    if (this.filterType === 'camera') {
      this.backgroundImage =
        'assets/UI_Images/WebP_Regular_Size/App_Filters_Titles_small_size_opaque-assets/camera.webp';
    } else if (this.filterType === 'lighting') {
      this.backgroundImage =
        'assets/UI_Images/WebP_Regular_Size/App_Filters_Titles_small_size_opaque-assets/lighting.webp';
    } else if (this.filterType === 'styling') {
      this.backgroundImage =
        'assets/UI_Images/WebP_Regular_Size/App_Filters_Titles_small_size_opaque-assets/styles.webp';
    } else if (this.filterType === 'format') {
      this.backgroundImage =
        'assets/UI_Images/WebP_Regular_Size/App_Filters_Titles_small_size_opaque-assets/format.webp';
    }
  }

  getStyleData() {
    this.dataService.getStylingData().subscribe((data) => {
      this.styling = data;
    });
  }

  getLightingData() {
    this.dataService.getLightingData().subscribe((data: any) => {
      this.lighting = data;
    });
  }

  getCameraData() {
    this.dataService.getCameraData().subscribe((data: any) => {
      this.camera = data;
    });
  }

  getFormatRatioData() {
    this.dataService.getRadioOptions().subscribe((data) => {
      this.radioOptions = data;
    });
  }

  getFormatPurposeData() {
    this.dataService.getPurposeData().subscribe((data) => {
      this.purposeOptions = data;
    });
  }

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  onSaveFormat() {
    this.modalCtrl.dismiss(this.formatForm.value, 'confirmFormat');
  }

  getImages() {
    this.dataService.getCartData().subscribe((data: any) => {
      this.images = data;
    });
  }

  onSelectImg(selectedStyle: any) {
    setTimeout(() => {
      if (this.filterType === 'styling') {
        this.styleForm.patchValue({ style: selectedStyle });
        this.onSaveStyling();
      } else if (this.filterType === 'camera') {
        this.cameraForm.patchValue({ camera: selectedStyle });
        this.onSaveCamera();
      } else if (this.filterType === 'lighting') {
        this.lightingForm.patchValue({ lighting: selectedStyle });
        this.onSaveLighting();
      }
    }, 300);
  }

  onSaveStyling() {
    console.log(this.styleForm);
    this.modalCtrl.dismiss(this.styleForm.value, 'confirmStyle');
  }

  onSaveLighting() {
    console.log(this.lightingForm.value);
    this.modalCtrl.dismiss(this.lightingForm.value, 'confirmLighting');
  }

  onSaveCamera() {
    console.log(this.cameraForm.value);
    this.modalCtrl.dismiss(this.cameraForm.value, 'confirmCamera');
  }

  // handleRadioFocus(event: any, index: any) {
  //   console.log('here is the focus ', event, index);
  //   this.isRadioSelected = true;
  // }
}
