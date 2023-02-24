import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-button-save-loading',
  templateUrl: './button-save-loading.component.html'
})
export class ButtonSaveLoadingComponent {
  @Input() type: string | undefined;
  @Input() class: string | undefined;
}
