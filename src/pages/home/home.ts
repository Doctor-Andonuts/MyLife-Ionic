import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TrackerCreatePage } from '../tracker-create/tracker-create';
import { TrackerDetailPage } from '../tracker-detail/tracker-detail';
import { UUID } from 'angular2-uuid';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  trackers: any[];

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public storage: Storage
  ) {
    console.log("==========START==============");
  }

  createTracker() {
    let trackerCreateModal = this.modalCtrl.create(TrackerCreatePage);
    trackerCreateModal.onDidDismiss(trackerCreateData => {
      if (trackerCreateData != undefined) {
        this.storage.ready().then(() => {
          this.storage.get("trackerMeta").then((trackerMeta) => {
            let uuid = UUID.UUID();
            trackerCreateData["uuid"] = uuid;
            trackerMeta.push(trackerCreateData);

            this.storage.set("trackerMeta", trackerMeta).then(() => {
              this.loadList();
            });
          });
        });
      }
    });
    trackerCreateModal.present();
  }

  loadList() {
    this.trackers = [];
    this.storage.ready().then(() => {
      this.storage.get("trackerMeta").then((trackerMeta) => {
        if( trackerMeta == undefined) {
          this.storage.set("trackerMeta", []);
        } else {
          this.trackers = trackerMeta;
        }
      });
    });
  }

  itemSelected(tracker) {
    this.navCtrl.push(TrackerDetailPage, {tracker: tracker});
  }

  ionViewDidEnter() {
    this.loadList()
  }
}
