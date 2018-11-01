import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ListaProvider, Item } from '../../providers/lista/lista';

@IonicPage()
@Component({
  selector: 'page-edit-anime',
  templateUrl: 'edit-anime.html',
})
export class EditAnimePage {

  model: Item;
  key: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private listaProvider: ListaProvider, private toast: ToastController) {

    this.model = new Item;

  }

  save() {
    this.saveItem()
    .then(() => {
      this.toast.create({ message: 'Anime salvo.', duration: 3000, position: 'botton' }).present();
    })
    .catch(() => {
      this.toast.create({ message: 'Erro ao salvar o anime.', duration: 3000, position: 'botton' }).present();
    });
  }

  private saveItem() {

    return this.listaProvider.insert(this.model);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditAnimePage');
  }

}
