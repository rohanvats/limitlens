import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpscalingGuidePage } from './upscaling-guide.page';

const routes: Routes = [
  {
    path: '',
    component: UpscalingGuidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpscalingGuidePageRoutingModule {}
