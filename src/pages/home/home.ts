import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { CreateTrackerPage } from '../create-tracker/create-tracker';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  driver: any;
  storageInfo: any;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    storage: Storage
  ) {
      storage.ready().then(() => {
        this.driver = storage.driver;
        this.storageInfo = storage;

        // set a key/value
        storage.set('name', 'Max');

        // Or to get a key/value pair
        storage.get('name').then((val) => {
          console.log('Your age is', val);
        })

        console.log(storage.driver);
      });
  }

  createTracker() {
    let modal = this.modalCtrl.create(CreateTrackerPage);
    modal.present();
  }

}
