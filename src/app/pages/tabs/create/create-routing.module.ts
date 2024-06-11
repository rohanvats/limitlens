import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatePage } from './create.page';
import { ImageDetailsPage } from '../../../shared/pages/image-details/image-details.page';

const routes: Routes = [
  {
    path: '',
    component: CreatePage,
  },
  {
    path: 'generatedImage',
    loadChildren: () =>
      import('../../../shared/pages/image-details/image-details.module').then(
        (m) => m.ImageDetailsPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatePageRoutingModule {}
