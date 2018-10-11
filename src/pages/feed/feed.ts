import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MoovieProvider
  ]
})
export class FeedPage { 

  public objeto_feed = {
    titulo:"Jon Melo",
    data:"November 5, 1955",
    descricao:"Estou criando um app incrivel...",
    qntd_likes:12,
    qntd_comments:4,
    time_comments:"11h ago"
  }

  public lista_filme = new Array<any>();

  public loader;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private moovieProvider: MoovieProvider,
              public loadingCtrl: LoadingController
              ) {
  }

  presentLoading() {
     this.loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    this.loader.present();
  }


  ionViewDidLoad() {
    this.moovieProvider.getLastestMovies().subscribe(
      data=>{
        const response = (data as any);
        this.lista_filme = response.results;
        console.log(response);
      }, error =>{
        console.log(error);
      }
      
      )  }

}
