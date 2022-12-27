import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css']
})
export class TextFieldComponent {
  @Input() label: string;
  @Input() maxlength = 255;
  @Input() form: FormGroup;
  @Input() required: boolean;
  @Input() name: string;
  @Input() type: string;
  @Input() mask: string;
  @Input() placeholder: string = '';
  @Output() modelChange = new EventEmitter();

  modelAtribuido: any;

  constructor() {
  }

  @Input()
  get model() {
    return this.modelAtribuido;
  }

  set model(val) {
    this.modelAtribuido = val;
    this.modelChange.emit(this.modelAtribuido);
  }

}
