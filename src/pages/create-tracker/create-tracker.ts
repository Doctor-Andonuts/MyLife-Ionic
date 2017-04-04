import { Component } from '@angular/core';
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
  createTracker = {}

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController
  ) {}

  dismiss() {
    this.viewCtrl.dismiss();
  }

  submitForm() {
    console.log(this.createTracker)
  }

}
