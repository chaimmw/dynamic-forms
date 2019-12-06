import { Component, OnInit, ChangeDetectionStrategy, Input, Output } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomFormComponent implements OnInit {

  @Input() formModel: {};

  @Input() validators = {};

  @Input() formHeader = 'Standard Form';
  @Input() submitLabel = 'SubmitButton';

  customForm: FormGroup;

  @Output() formSubmittedResult = new EventEmitter();
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.customForm = this.formBuilder.group(this.formModel);
    this.setFormValidators(this.customForm, this.validators);
  }

  getFormFields() {
    return Object.keys(this.formModel);
  }

  onSubmit() {

    if (this.customForm.invalid) {
      console.error('this is invalid');
    } else if (this.customForm.valid && this.customForm.touched) {
    const myFormValues = this.customForm.value;
    console.log('result', myFormValues, this.customForm);
    this.formSubmittedResult.emit(myFormValues);
    }
  }

  setFormValidators(formObj: FormGroup, formValidators) {
    Object.keys(formValidators).map((key) => formObj.controls[key].setValidators(formValidators[key]));
  }

  getFormField(field) {
    return this.customForm.controls[field];
  }

  clearFormFields() {
    this.customForm.reset();
  }

}
