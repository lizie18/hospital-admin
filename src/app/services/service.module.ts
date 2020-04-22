import { NgModule } from '@angular/core';
import { SettingsService, SharedService, SidebareService } from './service.index';

@NgModule({
  providers: [SettingsService, SharedService, SidebareService ],
})
export class FeatureModule {}
