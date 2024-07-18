import { Component, inject } from '@angular/core';
import { TelegramService } from './core/services/telegram.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  telegram = inject(TelegramService);
  constructor() {
    this.telegram.ready();
  }
}