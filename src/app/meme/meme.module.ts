import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MemeReviewComponent} from './meme-review/meme-review.component';
import {MemeUploadComponent} from './meme-upload/meme-upload.component';
import {MemeViewComponent} from './meme-view/meme-view.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MemeTagCreationComponent} from './meme-tag-creation/meme-tag-creation.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [MemeReviewComponent, MemeUploadComponent, MemeViewComponent, MemeTagCreationComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ]
})
export class MemeModule {
}
