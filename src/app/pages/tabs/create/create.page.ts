import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PromptModalComponent } from './prompt-modal/prompt-modal.component';
import { FilterModalComponent } from './filter-modal/filter-modal.component';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

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
  filterOptions:any = [
    {name: 'format', value: 'format'},
    {name: 'styling', value: 'styling'}
  ]

  promptForm = new FormGroup({
    image: new FormControl(''),
    prompt: new FormControl(''),
    filters: new FormControl('')
  })

  constructor(
    private modalCtrl: ModalController,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.userPrompt = 'Example : This photos as Indiana Jones';
  }

  ionViewWillEnter() {
    // Code to run when the page is about to enter

    const currentRoute = this.route.snapshot.routeConfig?.path;
    console.log('current Route: ', currentRoute);

    console.log('ion view will enter');
    this.$querySubscription = this.route.queryParams.subscribe(data => {
      if(data){
        this.usingGlobalFeed = data['globalFeed'] ? data['globalFeed'] : false;
      }
      console.log('query: ', data);
    })
  }

  ionViewWillLeave() {
    // Code to run when the page is about to leave
    console.log('ion view will leave');
    if (this.$querySubscription) {
      this.usingGlobalFeed = false;
      this.$querySubscription.unsubscribe();
    }
  }
  

  openPromptModal(){
    this.modalCtrl.create({
      component: PromptModalComponent,
      componentProps: { createPrompt : this.userPrompt}
      })
    .then(modalEl => {
      modalEl.present();
      return modalEl.onDidDismiss();
    })
    .then(data => {
      console.log(data);
      if(data.role === 'confirm'){
        if(data.data === ''){
          this.userPrompt = 'Example : This photos as Indiana Jones'
          return
        }
        this.userPrompt = data.data;
      }
    })
  }

  onImagePicked(imagedata: any){
    console.log( 'image recieved: ', imagedata)
    if(imagedata){
      this.image = imagedata;
    }
  }

  openFilterModal(filterType: string){
    this.modalCtrl.create({
      component: FilterModalComponent,
      componentProps: {
        filterType
      }
    })
    .then(modalEl => {
      modalEl.present();
      return modalEl.onDidDismiss();
    })
    .then(result =>{
      if(result.role === 'confirmStyle'){
        console.log(result); 
        
        this.filterOptions.map((el:any) => {
          if(el.value === 'styling'){
            el.styleImage = result.data.style.styleImage;
            return el.name = result.data.style.name;
          }
        })
      }

      if(result.role === 'confirmFormat'){
        console.log('res: ',result);
        
        this.filterOptions.map((el:any) => {
          if(el.value === 'format'){
            el.iconName = result.data.imageType.iconName;
            return el.name = result.data.ratio.name; 
          }
        })
      }
    })
  }

  onSavePrompt(){
    console.log({
      image: this.image,
      prompt: this.userPrompt,
      filters: this.filterOptions
    });
  }

}
