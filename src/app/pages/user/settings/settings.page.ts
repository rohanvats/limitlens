import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  // themeToggle = false;
  prefersDark: any;

  constructor() {}

  ngOnInit() {}

  enableDark(event: any) {
    this.toggleDarkTheme(true);
  }

  toggleDarkTheme(shouldAdd: any) {
    document.body.classList.toggle('dark', true);
  }
}
