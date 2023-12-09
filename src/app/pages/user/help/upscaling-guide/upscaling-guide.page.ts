import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upscaling-guide',
  templateUrl: './upscaling-guide.page.html',
  styleUrls: ['./upscaling-guide.page.scss'],
})
export class UpscalingGuidePage implements OnInit {
  showPrint: boolean = true;

  values: any = [
    { name: 'screen', icon: 'tv-outline' },
    { name: 'print', icon: 'print-outline' },
  ];

  upscalingScreenData = [
    {
      name: 'xo',
      info: 'Lorem ipsum dolor sit amet. Et quos laboriosam et obcaecati necessitatibus non laboriosam galisum 33 suscipit facere. Ea itaque error et quas expedita non rerum temporibus.',
    },
    {
      name: 'xo',
      info: 'Lorem ipsum dolor sit amet. Et quos laboriosam et obcaecati necessitatibus non laboriosam galisum 33 suscipit facere. Ea itaque error et quas expedita non rerum temporibus.',
    },
    {
      name: 'xo',
      info: 'Lorem ipsum dolor sit amet. Et quos laboriosam et obcaecati necessitatibus non laboriosam galisum 33 suscipit facere. Ea itaque error et quas expedita non rerum temporibus.',
    },
    {
      name: 'xo',
      info: 'Lorem ipsum dolor sit amet. Et quos laboriosam et obcaecati necessitatibus non laboriosam galisum 33 suscipit facere. Ea itaque error et quas expedita non rerum temporibus.',
    },
    {
      name: 'xo',
      info: 'Lorem ipsum dolor sit amet. Et quos laboriosam et obcaecati necessitatibus non laboriosam galisum 33 suscipit facere. Ea itaque error et quas expedita non rerum temporibus.',
    },
  ];

  upscalingPrintData = [
    {
      name: 'xo',
      info: 'a Lorem ipsum dolor sit amet. Et quos laboriosam et obcaecati necessitatibus non laboriosam galisum 33 suscipit facere. Ea itaque error et quas expedita non rerum temporibus.',
    },
    {
      name: 'xo',
      info: 'Lorem ipsum dolor sit amet. Et quos laboriosam et obcaecati necessitatibus non laboriosam galisum 33 suscipit facere. Ea itaque error et quas expedita non rerum temporibus.',
    },
    {
      name: 'xo',
      info: 'Lorem ipsum dolor sit amet. Et quos laboriosam et obcaecati necessitatibus non laboriosam galisum 33 suscipit facere. Ea itaque error et quas expedita non rerum temporibus.',
    },
    {
      name: 'xo',
      info: 'Lorem ipsum dolor sit amet. Et quos laboriosam et obcaecati necessitatibus non laboriosam galisum 33 suscipit facere. Ea itaque error et quas expedita non rerum temporibus.',
    },
    {
      name: 'xo',
      info: 'Lorem ipsum dolor sit amet. Et quos laboriosam et obcaecati necessitatibus non laboriosam galisum 33 suscipit facere. Ea itaque error et quas expedita non rerum temporibus.',
    },
  ];

  constructor() {}

  ngOnInit() {}

  getValue(event: any) {
    console.log('event: ', event);
    return event.detail.value === 'print'
      ? (this.showPrint = true)
      : (this.showPrint = false);
  }
}
