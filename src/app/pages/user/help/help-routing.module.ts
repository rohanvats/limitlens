import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelpPage } from './help.page';

const routes: Routes = [
  {
    path: '',
    component: HelpPage,
  },
  {
    path: 'upscaling-guide',
    loadChildren: () =>
      import('./upscaling-guide/upscaling-guide.module').then(
        (m) => m.UpscalingGuidePageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelpPageRoutingModule {}
