import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent {
  @Input() type: string | undefined;
  @Input() class: string | undefined;
  @Input() icon: string | undefined;
  @Input() label: string | undefined;


}
