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

    this.loadList();
  }

  createTracker() {
    let trackerCreateModal = this.modalCtrl.create(TrackerCreatePage);
    trackerCreateModal.onDidDismiss(trackerCreateData => {
      this.storage.ready().then(() => {
        this.storage.get("trackerMeta").then((trackerMeta) => {
          let uuid = UUID.UUID();
          trackerMeta[uuid] = trackerCreateData
          this.storage.set("trackerMeta", trackerMeta).then(() => {
            this.loadList();
          });
        });
      });
    });
    trackerCreateModal.present();
  }

  loadList() {
    this.trackers = [];
    this.storage.ready().then(() => {
      this.storage.get("trackerMeta").then((trackerMeta) => {
        if( trackerMeta == undefined) {
          this.storage.set("trackerMeta", {});
        } else {
          for(var tracker in trackerMeta) {
            this.trackers.push(trackerMeta[tracker]);
          }
        }
      });
    });
  }

  itemSelected(tracker) {
    this.navCtrl.push(TrackerDetailPage, {tracker: tracker});
  }
}
