import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-standard-form',
  templateUrl: './standard-form.component.html',
  styleUrls: ['./standard-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StandardFormComponent implements OnInit {

  standardForm: FormGroup;
  formHeader: string;
  submitLabel: string;

  formSubmittedResult: any;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.formHeader = 'Standard Form';
    this.submitLabel = 'SubmitButton';
    this.standardForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required]
    });
  }

  onSubmit() {

    if(this.standardForm.invalid) {
      console.error('not valid');
    } else {
    const myFormValues = this.standardForm.value;
    console.log('result', myFormValues);
    this.formSubmittedResult = myFormValues;
    }
  }

}
