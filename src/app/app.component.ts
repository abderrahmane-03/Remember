// app.component.ts
import { Component } from '@angular/core';
import { GameComponent } from './components/game/game.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GameComponent],
  template: '<app-game/>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Remember';

}
