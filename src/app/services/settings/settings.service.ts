import { Injectable, Inject } from '@angular/core';
import { SettingTheme } from './setting-theme.model';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  themeSettings: SettingTheme = {
    themeUrl: 'assets/css/colors/default.css',
    themeName: 'default',
  };

  constructor(
    @Inject(DOCUMENT) private document,
  ) {
    this.loadThemeSettings();
  }

  saveThemeSelected(themeName){
    this.themeSettings.themeUrl = `assets/css/colors/${themeName}.css`;
    this.themeSettings.themeName = themeName;
    localStorage.setItem('theme-settings', JSON.stringify(this.themeSettings));
  }

  loadThemeSettings() {
    if (localStorage.getItem('theme-settings')) {
      this.themeSettings = JSON.parse(localStorage.getItem('theme-settings'));
    }
    this.applyTheme();
  }

  applyTheme(){
    this.document.getElementById('theme').setAttribute('href', this.themeSettings.themeUrl);
  }
}
