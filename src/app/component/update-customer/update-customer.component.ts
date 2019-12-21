import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
declare var $: any;
@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  updateCustomerForm: FormGroup;
  submitted = false;
  constructor(private toastr: ToastrService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    $(document).ready(function () {
      $('#example').DataTable();
    });
    this.updateCustomerForm = this.formBuilder.group({
      accountNumber: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      accountName: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      state: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      pin: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      sonOrDaughter: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      address: ['', Validators.required],
      adhaarNumber: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      voterOrPan: ['', Validators.required],
      loanAmount: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      serviceCharge: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      insurance: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      email: ['', Validators.email],
      phone: ['', Validators.required]

    })
  }
  // convenience getter for easy access to form fields
  get f() { return this.updateCustomerForm.controls; }
  update() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.updateCustomerForm.invalid) {
        return;
    }
    else{
      this.toastr.success('Record update successfully', 'Graet');
      this.submitted = false;
      this.updateCustomerForm.reset();
    }
  }
}
