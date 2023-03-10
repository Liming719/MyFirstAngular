import { Component } from '@angular/core';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyFirstAngular - Tour of Heroes';
  constructor(private messageService: MessageService){
    this.messageService.add('Welcom To My First Angular Project')
  }
}
