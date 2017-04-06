import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NavController, ViewController } from 'ionic-angular';

/*
  Generated class for the CreateTracker page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-create-tracker',
  templateUrl: 'create-tracker.html'
})
export class CreateTrackerPage {
  private createTracker: FormGroup;
  tracker: any;

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    private formBuilder: FormBuilder
  ) {
    this.createTracker = this.formBuilder.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      label: ['', Validators.required]
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  submitForm() {
    this.tracker = {
      "name": this.createTracker.value.name,
      "label": this.createTracker.value.label,
      "type": this.createTracker.value.type };

    this.viewCtrl.dismiss(this.tracker);

  }
}
