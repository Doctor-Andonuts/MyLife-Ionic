import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the TrackerDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tracker-detail',
  templateUrl: 'tracker-detail.html'
})
export class TrackerDetailPage {
  tracker: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tracker = navParams.get('tracker');
  }

  deleteTracker(uuid) {
    alert('delete tracker: ' + uuid);
  }
}
