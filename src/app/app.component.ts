import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  dynamicForm: FormGroup;
  fields = [
    {
      type: 'input',
      label: 'Username',
      inputType: 'text',
      name: 'name',
      validations: [
        {
          name: 'required',
          validator: 'required',
          message: 'Name Required',
        },
        {
          name: 'pattern',
          validator: '^[a-zA-Z]+$',
          message: 'Accept only text',
        },
      ],
    },
    {
      type: 'password',
      label: 'Password',
      inputType: 'text',
      name: 'name',
      validations: [
        {
          name: 'required',
          validator: 'required',
          message: 'Password Required',
        },
      ],
    },
    {
      type: 'email',
      label: 'Email',
      inputType: 'text',
      name: 'email',
      validations: [
        {
          name: 'pattern',
          validator: '^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$',
          message: 'Email is not Valid',
        },
      ],
    },
  ];
  constructor() {
    const controls = {};
    this.fields.forEach((res) => {
      const validationsArray = [];
      res.validations.forEach((val) => {
        if (val.name === 'required') {
          validationsArray.push(Validators.required);
        }
        if (val.name === 'pattern') {
          validationsArray.push(Validators.pattern(val.validator));
        }
      });
      controls[res.label] = new FormControl('', validationsArray);
    });
    this.dynamicForm = new FormGroup(controls);
  }

  onSubmit() {
    console.log(this.dynamicForm.value);
  }
}
