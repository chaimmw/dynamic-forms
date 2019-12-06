import { Component, OnInit } from '@angular/core';
import {Validators} from '@angular/forms';

@Component({
  selector: 'app-opening-page',
  templateUrl: './opening-page.component.html',
  styleUrls: ['./opening-page.component.scss']
})
export class OpeningPageComponent implements OnInit {

  typeDescriptionFormModel = {};
  typeDescriptionFormValidators = {};
  typeDescriptionFormModelResult = [];

  customFormList = [];
  customFormForm = {};

  newFormKey: string;
  newFormValue: any;

  constructor() { }

  ngOnInit() {

    // this.typeDescriptionFormModel = {
    //   email: 'test',
    //   type: 'non',
    //   description: 'long',
    //   name: 'version'
    // };

    // this.typeDescriptionFormValidators = {
    //   email: [Validators.required, Validators.email],
    //   type: [Validators.required],
    //   name: [Validators.required]
    // };
  }


  onFormSubmission(event) {
    console.log('hi', event);
    this.typeDescriptionFormModelResult.push(event);
  }

  addFormField() {

    this.customFormForm[this.newFormKey] = this.newFormValue;
    this.clearNewFieldKeyValue();
  }

  clearNewFieldKeyValue() {
    this.newFormValue = undefined;
    this.newFormKey = undefined;
  }

  clearFormForm() {
    this.customFormForm = {};
    this.clearNewFieldKeyValue();
  }

  createNewForm() {
    this.customFormList.push(this.customFormForm);
    this.clearFormForm();
  }

  getCustomFormFormKeyValues() {
    return Object.keys(this.customFormForm).map((key) => ({key, value: this.customFormForm[key]}));
  }

  removeField(field) {
    delete this.customFormForm[field];
  }

}
