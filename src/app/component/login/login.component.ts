import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  user: any = {};
  constructor(private router: Router, private toastr: ToastrService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    })
  }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
  signIn() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    else if ((this.registerForm.value.userName == 'amit') &&
      (this.registerForm.value.password == 'amit123')) {
      this.router.navigate(['home']);
    }
    else{
       this.toastr.error('Please enter valid username and password.', 'Oops');
    }
  }
}
