import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { CreateTrackerPage } from '../create-tracker/create-tracker';
import { UUID } from 'angular2-uuid';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  trackers: any[];
  myStorage: any;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    storage: Storage
  ) {
    this.myStorage = storage;
    
    console.log("==========START==============");

    this.loadList();
  }

  createTracker() {
    let createTrackerModal = this.modalCtrl.create(CreateTrackerPage);
    createTrackerModal.onDidDismiss(createTrackerData => {
      this.myStorage.ready().then(() => {
        this.myStorage.get("trackerMeta").then((trackerMeta) => {
          let uuid = UUID.UUID();
          trackerMeta[uuid] = createTrackerData
          this.myStorage.set("trackerMeta", trackerMeta).then(() => {
            this.loadList();
          });
        });
      });
    });
    createTrackerModal.present();
  }

  loadList() {
    this.trackers = [];
    this.myStorage.ready().then(() => {
      this.myStorage.get("trackerMeta").then((trackerMeta) => {
        if( trackerMeta == undefined) {
          this.myStorage.set("trackerMeta", {});
        } else {
          for(var tracker in trackerMeta) {
            this.trackers.push(trackerMeta[tracker]);
          }
        }
      });
    });
  }
}
