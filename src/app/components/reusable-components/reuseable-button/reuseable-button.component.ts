import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-reuseable-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './reuseable-button.component.html',
  styleUrl: './reuseable-button.component.css'
})
export class ReuseableButtonComponent {

  @Input() buttonText: string = 'Text Here';
  @Input() buttonColor: string = 'blue';

  @Output() buttonClick = new EventEmitter<void>();

  clickBtn() {
    this.buttonClick.emit();
  }

}
