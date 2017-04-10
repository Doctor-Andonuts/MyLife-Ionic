import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage) {
    this.tracker = navParams.get('tracker');
  }

  deleteTracker(uuid) {
    this.storage.ready().then(() => {
      this.storage.get("trackerMeta").then((trackerMeta) => {
        for (var i = 0; i < trackerMeta.length; i++) {
          if (trackerMeta[i].uuid == uuid) {
            trackerMeta.splice(i, 1);
          }
        }
        this.storage.set("trackerMeta", trackerMeta).then(() => {
          this.navCtrl.pop();
        });
      });
    });
  }s
}
