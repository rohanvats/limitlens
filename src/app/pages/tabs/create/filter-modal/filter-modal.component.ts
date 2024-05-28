import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import {
  displayImage,
  displayOption,
} from 'src/app/interfaces/displayOptions.interface';
import { DataService } from 'src/app/services/data.service';
import { DisplayOptionsService } from 'src/app/services/displayOptions.service';
import { CreateService } from '../create.service';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss'],
})
export class FilterModalComponent implements OnInit {
  @Input() filterType: string;
  radioOptions: any = [];
  purposeOptions: any = [];
  backgroundImage: string = '';
  dispayData$: Observable<any>;

  constructor(
    private modalCtrl: ModalController,
    private dataService: DataService,
    private createService: CreateService,
    private displayOptionsService: DisplayOptionsService
  ) {}

  ngOnInit() {
    this.fetchDisplayOptionData(this.filterType);
    this.getBackGroundImage(this.filterType);
    this.getFormatRatioData();
  }

  searchArtist(event: any) {}

  fetchDisplayOptionData(displayOption: string) {
    if (this.filterType) {
      this.dispayData$ = this.createService.getDisplayOption(displayOption);
    } else {
      throw new Error('No display option provided');
    }
  }

  getBackGroundImage(displayOption: string) {
    this.backgroundImage =
      displayOption === 'styling'
        ? 'assets/UI_Images/WebP_Regular_Size/App_Filters_Titles_small_size_opaque-assets/styles.webp'
        : `assets/UI_Images/WebP_Regular_Size/App_Filters_Titles_small_size_opaque-assets/${displayOption}.webp`;
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

  onSelectOption(selectedStyle: displayImage) {
    this.modalCtrl.dismiss(
      { key: this.filterType, ...selectedStyle },
      'confirm'
    );
  }
}
