import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-global-feed-details',
  templateUrl: './global-feed-details.page.html',
  styleUrls: ['./global-feed-details.page.scss'],
})
export class GlobalFeedDetailsPage implements OnInit {

  image:any;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private router: Router
    ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(imageDetails =>{
      console.log('query: ',imageDetails);
      this.image = imageDetails;
    })
  }

  onCreate(){
    this.navCtrl.navigateForward(['/tabs','create'],
    {queryParams: {prompt: 'prompt', globalFeed: 'true'}}, 
    );
  }
}
