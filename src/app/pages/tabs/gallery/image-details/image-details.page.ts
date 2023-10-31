import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.page.html',
  styleUrls: ['./image-details.page.scss'],
})
export class ImageDetailsPage implements OnInit {

  imageDetails: any = {}

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(image => {
      console.log(image)
      this.imageDetails = image
    })
  }

}
