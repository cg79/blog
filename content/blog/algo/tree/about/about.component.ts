import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LocalStorageService} from "angular-2-local-storage";
import {PubSubService} from "../services/pubsub/pubsub";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
  export class AboutComponent implements OnInit {

  constructor(
              // private utilsService: UtilsService,
              private pubSub: PubSubService,
              private router: Router,
              private localStorageService: LocalStorageService,
              // private newsService: NewsService
  ) {
    this.user = localStorageService.get('user');
  }
  user: any = null;

  canEditNews: boolean = false;

  async ngOnInit() {
  }


  externalConfig: any = {
    lineNumbers: false
  };

  // async previewsNews()
  // {
  //   let date: Date = new Date();
  //   if(this.newsObject && this.newsObject.date)
  //   {
  //     date = new Date(this.newsObject.date.jsdate);
  //   }
  //   date.setSeconds(date.getSeconds() -1);
  //   this.getNews(date);
  // }






}
