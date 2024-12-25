import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public sequence: string[] = [];
  public colors: string[] = ['red', 'blue', 'green', 'yellow', 'orange', 'violet', 'black', 'white'];
  public currentScore = 0;
  private usedColors: Set<string> = new Set();

  generateSequence(): void {
    this.sequence = [];
    this.currentScore = 0;
    this.usedColors.clear(); // Clear used colors for a new game
    this.addInitialSequence(); // Generate the first sequence
  }

  addInitialSequence(): void {
    // Select two random unique colors
    const initialColor = this.getNextUniqueColor();
    this.sequence = Array(1).fill(initialColor); // Add the same color 5 times
  }

  addColor(): void {
    const nextColor = this.getNextUniqueColor();
    this.sequence.push(nextColor); // Add the new unique color to the sequence
  }

  getSequence(): string[] {
    return [...this.sequence];
  }

  verifyResponse(userResponse: string[]): boolean {
    return JSON.stringify(this.sequence) === JSON.stringify(userResponse);
  }

  resetGame(): void {
    this.sequence = [];
    this.currentScore = 0; // Reset score
  }

  incrementScore(): void {
    this.currentScore++;
  }

  private getNextUniqueColor(): string {
    const availableColors = this.colors.filter(color => !this.usedColors.has(color));
    if (availableColors.length === 0) {
      throw new Error('No more unique colors available');
    }
    const randomColor = availableColors[Math.floor(Math.random() * availableColors.length)];
    this.usedColors.add(randomColor); // Mark the color as used
    return randomColor;
  }

  get score(): number {
    return this.currentScore;
  }
}
