import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeTutorialPage } from './welcome-tutorial.page';

const routes: Routes = [
  {
    path: '',
    component: WelcomeTutorialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WelcomeTutorialPageRoutingModule {}
