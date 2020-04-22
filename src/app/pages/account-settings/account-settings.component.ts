import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings/settings.service';


@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css'],
})
export class AccountSettingsComponent implements OnInit {
  selectedTheme: string;

  constructor(
    private settingsService: SettingsService
  ) {
  }

  ngOnInit(): void {
    this.selectedTheme = this.settingsService.themeSettings.themeName;
  }

  changeTheme(themeName: string) {
    this.settingsService.saveThemeSelected(themeName);
    this.settingsService.applyTheme();
    this.selectedTheme = this.settingsService.themeSettings.themeName;
  }

}
