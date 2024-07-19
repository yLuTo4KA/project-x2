import { Component, inject } from '@angular/core';
import { TelegramService } from './core/services/telegram.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  telegram = inject(TelegramService);
  chatId: string | null = null;

  constructor(private route: ActivatedRoute) {
    this.telegram.ready();
    this.route.queryParams.subscribe(params => {
      this.chatId = params['chat_id'];
      console.log('Chat ID:', this.chatId);
      // Теперь вы можете использовать chatId в вашем приложении
    });
  }
}