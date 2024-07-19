import { DOCUMENT } from '@angular/common';
import { Injectable, Inject } from '@angular/core';
import { webAppInitData } from '../models/webAppInitData.model';
import { userMock } from '../mocks/user.mock';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class TelegramService {
    private window;
    tg;
    dummyResponse = false; 

  constructor(@Inject(DOCUMENT) private _document: any) {
    this.window = this._document.defaultView;
    this.tg = this.window!.Telegram.WebApp;
  }

  initData(): webAppInitData {
    if(this.dummyResponse) {
      return userMock
    } else {
      console.log("---");
      console.log(this.tg.initDataUnsafe.user);
      console.log("---");

      return this.tg.initDataUnsafe;
    }
  }

  ready(): void {
    this.tg.expand();
    
  }
}
