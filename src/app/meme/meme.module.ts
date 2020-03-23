import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MemeReviewComponent} from './meme-review/meme-review.component';
import {MemeUploadComponent} from './meme-upload/meme-upload.component';


@NgModule({
  declarations: [MemeReviewComponent, MemeUploadComponent],
  imports: [
    CommonModule
  ]
})
export class MemeModule {
}
