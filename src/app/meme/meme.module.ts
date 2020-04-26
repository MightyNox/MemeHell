import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MemeReviewComponent} from './meme-review/meme-review.component';
import {MemeUploadComponent} from './meme-upload/meme-upload.component';
import {MemeViewComponent} from './meme-view/meme-view.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [MemeReviewComponent, MemeUploadComponent, MemeViewComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class MemeModule {
}
