import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JasperService } from '../../core/services/jasper.services';
import { ToastrService } from 'ngx-toastr';
import {NgxSpinnerService} from 'ngx-spinner';

declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-expedient',
  templateUrl: './expedient.component.html',
  styleUrls: ['./expedient.component.css']
})
export class ExpedientComponent implements OnInit {

  expedientData: any = [];
  showExpedientData: any = [];
  searchExpedient: FormGroup;

  constructor(
    private jasperService: JasperService,
    private spinner: NgxSpinnerService,
    private toastrService: ToastrService,) { }

  ngOnInit(): void {
    this.getExpedients();
    this.searchExpedient =  new FormGroup({
      urlFind: new FormControl({value: null, disabled: false}, [Validators.required])
    });
  }

  getExpedients(){
    this.jasperService.getExpedients().then((response: any) => {
      this.expedientData = response;
    }).catch((error => {
      console.log(error);
    }));
  }

  showExpedient(dataItem){
    this.jasperService.showExpedient(dataItem.id).then((response: any) => {
      this.showExpedientData = response.expedient;
      console.log(this.showExpedientData);
      $('#showExpedient').modal('show');
    }).catch((error => {
      console.log(error);
    }));
  }

  findExpedient(){
    this.spinner.show();
    console.log(this.searchExpedient.value);
    let body = {
      "expedient": {
        "uri": this.searchExpedient.value.urlFind
      }
    }
    this.jasperService.findExpedient(body).then((response: any) => {
      this.showExpedientData = response.expedient;
      this.getExpedients();
      $('#showExpedient').modal('show');
      this.spinner.hide();
    }).catch((error => {
      console.log(error);
      this.toastrService.info(error.error.message);
      this.spinner.hide();
    }));
  }

}
