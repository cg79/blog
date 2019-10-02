import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MobxAngularModule } from 'mobx-angular';
import {CommonModule} from "@angular/common";
import {AboutComponent} from "./about.component";
import {aboutRouter} from "./about.router";
import {WysIsWhatYouGetModule} from "../wys-editor/wys-module";
import {AppFileModule} from "../components/file-component/appfile.module";
import {QuestionModule} from "../question/question-module";

@NgModule({
  imports: [CommonModule,FormsModule, HttpClientModule, NgbModule, MobxAngularModule, WysIsWhatYouGetModule,AppFileModule, QuestionModule,aboutRouter,
  ],
  declarations: [
    AboutComponent
  ],
  exports: [],
})
export class AboutModule {}
