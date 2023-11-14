import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-masonry-gallery',
  templateUrl: './masonry-gallery.component.html',
  styleUrls: ['./masonry-gallery.component.scss'],
})
export class MasonryGalleryComponent  implements OnInit {

  @Input() data: any;
  @Output() item = new EventEmitter<any>;

  constructor() { }

  ngOnInit() {}

  sendItem(item: any){
    this.item.emit(item)
  }

}
