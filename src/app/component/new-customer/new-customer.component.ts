import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {
  newCustomerForm: FormGroup;
  submitted = false;
  constructor( private toastr: ToastrService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.newCustomerForm = this.formBuilder.group({
      accountNumber: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      accountName: ['', [Validators.required,  Validators.pattern('^[a-zA-Z ]*$')] ],
      state:['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      pin:['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      sonOrDaughter:['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      address:['', Validators.required],
      adhaarNumber:['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      voterOrPan:['', Validators.required],
      loanAmount:['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      serviceCharge:['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      insurance:['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      email:['', Validators.email],
      phone:['', Validators.required]

    })
  }
  // convenience getter for easy access to form fields
  get f() { return this.newCustomerForm.controls; }
  onSubmit(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.newCustomerForm.invalid) {
        return;
    }
    else{
      this.toastr.success('Record saved successfully', 'Graet');
      this.submitted = false;
      this.newCustomerForm.reset();
    }
  }
}
