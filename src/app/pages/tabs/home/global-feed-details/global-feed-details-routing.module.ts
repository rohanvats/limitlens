import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GlobalFeedDetailsPage } from './global-feed-details.page';

const routes: Routes = [
  {
    path: '',
    component: GlobalFeedDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GlobalFeedDetailsPageRoutingModule {}
