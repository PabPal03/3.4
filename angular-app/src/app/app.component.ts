import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputMessage = '';
  displayedMessage = 'Hello World';

  displayMessage(): void {
    this.displayedMessage = this.inputMessage;
  }
}
