import { Component } from '@angular/core';

import { FormGroup, FormControl, Validators} from '@angular/forms';



@Component({
  selector: 'app-register-inputs',
  templateUrl: './register-inputs.component.html',
  styleUrls: ['./register-inputs.component.css']
})


export class RegisterInputsComponent  {

  form = new FormGroup({
    role: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required)
  });

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    localStorage.setItem('app-name', `${this.form.value.name}`)
    localStorage.setItem('app-role', `${this.form.value.role}`)

  }

  changeRole(e) {
    console.log(e.target.value);
  }

}
