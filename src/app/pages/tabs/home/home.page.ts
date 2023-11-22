import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  globalData:any = []

  constructor(
    private dataService:DataService,
    private navCtrl: NavController
    ) {}

  ngOnInit(){
    this.getGlobalFeedData();
  }

  getGlobalFeedData(){
    this.dataService.getGlobalFeedData().subscribe(data => {
      this.globalData = data;
    })
  }

  toImageDetails(image: any){
    this.navCtrl.navigateForward(['/tabs/home/global-feed-details'], {
      queryParams: image,
    })
    console.log('From home: ',image);
  }

}
