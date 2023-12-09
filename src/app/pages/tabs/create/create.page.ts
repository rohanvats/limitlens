import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PromptModalComponent } from './prompt-modal/prompt-modal.component';
import { FilterModalComponent } from './filter-modal/filter-modal.component';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { throwError } from 'rxjs';
@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  image = '';
  userPrompt = '';
  usingGlobalFeed = false;
  private $querySubscription: any;
  filterOptions: any = [
    {
      name: 'format',
      value: 'format',
      url: 'assets/UI_Images/WebP_Regular_Size/App_Filters_Titles_small_size-assets/format.webp',
    },
    {
      name: 'styling',
      value: 'styling',
      url: 'assets/UI_Images/WebP_Regular_Size/App_Filters_Titles_small_size-assets/styles.webp',
    },
    {
      name: 'lighting',
      value: 'lighting',
      url: 'assets/UI_Images/WebP_Regular_Size/App_Filters_Titles_small_size-assets/lighting.webp',
    },
    {
      name: 'camera',
      value: 'camera',
      url: 'assets/UI_Images/WebP_Regular_Size/App_Filters_Titles_small_size-assets/camera.webp',
    },
  ];

  promptForm = new FormGroup({
    image: new FormControl(''),
    prompt: new FormControl(''),
    filters: new FormControl(''),
  });

  constructor(
    private modalCtrl: ModalController,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.userPrompt = 'Example : This photos as Indiana Jones';
  }

  // ionViewWillEnter() {

  //   const currentRoute = this.route.snapshot.routeConfig?.path;
  //   console.log('current Route: ', currentRoute);

  //   console.log('ion view will enter');
  //   this.$querySubscription = this.route.queryParams.subscribe(data => {
  //     if(data){
  //       this.usingGlobalFeed = data['globalFeed'] ? data['globalFeed'] : false;
  //     }
  //     console.log('query: ', data);
  //   })
  // }

  // ionViewWillLeave() {
  //   console.log('ion view will leave');
  //   if (this.$querySubscription) {
  //     this.usingGlobalFeed = false;
  //     this.$querySubscription.unsubscribe();
  //   }
  // }

  openPromptModal() {
    this.modalCtrl
      .create({
        component: PromptModalComponent,
        componentProps: { createPrompt: this.userPrompt },
      })
      .then((modalEl) => {
        modalEl.present();
        return modalEl.onDidDismiss();
      })
      .then((data) => {
        console.log(data);
        if (data.role === 'confirm') {
          if (data.data === '') {
            this.userPrompt = 'Example : This photos as Indiana Jones';
            return;
          }
          this.userPrompt = data.data;
        }
      });
  }

  onImagePicked(imagedata: any) {
    console.log('image recieved: ', imagedata);
    if (imagedata) {
      this.image = imagedata;
    }
  }

  openFilterModal(filterType: string) {
    this.modalCtrl
      .create({
        component: FilterModalComponent,
        componentProps: {
          filterType,
        },
      })
      .then((modalEl) => {
        modalEl.present();
        return modalEl.onDidDismiss();
      })
      .then((result) => {
        if (result.role === 'confirmStyle') {
          console.log('style1: ', result);

          this.filterOptions.map((el: any) => {
            if (el.value === 'styling') {
              el.styleImage = result?.data?.style?.styleImage;
              return (el.name = result?.data?.style?.name);
            }
          });
        }

        if (result.role === 'confirmLighting') {
          console.log(result);

          this.filterOptions.map((el: any) => {
            if (el.value === 'lighting') {
              el.styleImage = result?.data?.lighting?.styleImage;
              return (el.name = result?.data?.lighting?.name);
            }
          });
        }

        if (result.role === 'confirmCamera') {
          console.log(result);

          this.filterOptions.map((el: any) => {
            if (el.value === 'camera') {
              el.styleImage = result?.data?.camera?.styleImage;
              return (el.name = result?.data?.camera?.name);
            }
          });
        }

        if (result.role === 'confirmFormat') {
          console.log('res: ', result);

          this.filterOptions.map((el: any) => {
            if (el.value === 'format') {
              el.iconName = result?.data?.imageType?.iconName;
              return (el.name = result?.data?.ratio?.name);
            }
          });
        }
      });
  }

  onSavePrompt() {
    console.log({
      image: this.image,
      prompt: this.userPrompt,
      filters: this.filterOptions,
    });
  }
}
