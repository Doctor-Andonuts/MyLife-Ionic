import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/*
  Generated class for the EntryCreate page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-entry-create',
  templateUrl: 'entry-create.html'
})
export class EntryCreatePage {
  private entryCreate: FormGroup;
  entry: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private formBuilder: FormBuilder
  ) {
    this.entryCreate = this.formBuilder.group({
      date: ['', Validators.required],
      time: ['', Validators.required],
      value: ['', Validators.required]
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  submitForm() {
    this.entry = {
      "date": this.entryCreate.value.date,
      "time": this.entryCreate.value.time,
      "value": this.entryCreate.value.value
    };

    this.viewCtrl.dismiss(this.entry);
  }

}
