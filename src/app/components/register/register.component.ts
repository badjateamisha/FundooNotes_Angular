import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm! : FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private user : UserService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    console.log("Submited Successfully", this.registerForm.value);

    // stop here if form is invalid
    if (this.registerForm.valid) {
        // return;
        console.log("Data inserted Successfully");
      let reqData={
        name:this.registerForm.value.firstName,
        email:this.registerForm.value.email,
        password:this.registerForm.value.password,
        // service : this.registerForm.value.service
      }
      this.user.Registration(reqData).subscribe((response:any)=> {
        console.log(response);
      });
    }


    }
}
