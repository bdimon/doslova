import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { InfiniteScroll } from 'ionic-angular/components/infinite-scroll/infinite-scroll';


/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  public items: any =[];
  public post: any = [];
  public commentsCount: number;
  public isLoading: boolean=false;
  public comments: any=[];
  public page:number = 1;
  public infiniteScroll: any = InfiniteScroll;
  // private sort:string='1';
  public showMore: boolean = false;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiProvider) {
    this.post = navParams.get('post');
    }
    
  ionViewDidLoad() {
    
    this.getComments();
    }


   getComments(infiniteScroll=null) {
    this.showMore = true;
    if(!this.isLoading){
      this.isLoading = true;
      let url:string='comments?_embed&page='+this.page + '&post=' + this.post.id;
      this.api.get(url).
    subscribe((resp:any) => {
      this.isLoading = false;
      this.comments = this.comments.concat(resp);
      this.page++;
          if (infiniteScroll!=null){
            infiniteScroll.complete();
             this.isLoading = true;
          }
      
    }, (error) => {
      this.isLoading = false;
      console.log('error');
    });
  }
  this.isLoading = true;
  }
}
