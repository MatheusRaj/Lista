import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditAnimePage } from './edit-anime';

@NgModule({
  declarations: [
    EditAnimePage,
  ],
  imports: [
    IonicPageModule.forChild(EditAnimePage),
  ],
})
export class EditAnimePageModule {}
