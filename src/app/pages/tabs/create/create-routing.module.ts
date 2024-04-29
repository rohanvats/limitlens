import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatePage } from './create.page';
import { ImageDetailsPage } from '../gallery/image-details/image-details.page';

const routes: Routes = [
  {
    path: '',
    component: CreatePage,
  },
  {
    path: 'generatedImage',
    component: ImageDetailsPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatePageRoutingModule {}
