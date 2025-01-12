import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-score',
  standalone: true,
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent {
  @Input() score!: number;
}
