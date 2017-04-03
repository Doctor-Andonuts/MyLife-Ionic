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

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateTrackerPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}