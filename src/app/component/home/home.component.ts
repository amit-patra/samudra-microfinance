import { Component, OnInit} from '@angular/core';
import {PdfViewerService} from '../../service/pdf-viewer.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  invoiceDetails:any;
  constructor(private printService: PdfViewerService) {
   }

  ngOnInit() {

  }
  printFile(){
  //  let  w = window.open('new_customer_form.pdf'); 
  //  w.print(); 
  //  w.close();
  window.open('https://www.dropbox.com/s/necdporflizi0vi/new_customer_form.pdf?dl=0', '_blank');
  // window.open('./new_customer_form.pdf','_blank' )
 
  }

  
}
