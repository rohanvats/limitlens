import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-welcome-tutorial',
  templateUrl: './welcome-tutorial.page.html',
  styleUrls: ['./welcome-tutorial.page.scss'],
})
export class WelcomeTutorialPage implements OnInit {
  instructions: {
    image: string;
    text1: string;
    text2: string;
    buttonText: string;
  }[] = [];
  currentIndex: number = 0;
  getStarted: boolean = false;

  constructor(
    private dataService: DataService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.instructions = this.dataService.getInstructions();
  }

  nextScreen() {
    console.log('This is the next screen');
    if (this.currentIndex > this.instructions.length - 2) {
      this.navCtrl.navigateForward('/tabs/home');
      return;
    }
    this.currentIndex++;
  }

  prevScreen() {
    console.log('This is the previous screen');
    if (this.currentIndex === 0) {
      return;
    }
    this.currentIndex--;
  }

  onSkipInst() {
    this.navCtrl.navigateForward(['/tabs/home']);
    console.log('Navigate to the main page');
  }
}
