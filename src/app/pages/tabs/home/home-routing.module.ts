import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { FaceswapComponent } from './faceswap/faceswap.component';
import { FaceswapCategoryComponent } from './faceswap-category/faceswap-category.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'faceswap',
    component: FaceswapComponent,
  },
  {
    path: 'faceswapCategory/:id',
    component: FaceswapCategoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
