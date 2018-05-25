import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import $ from 'jquery'

$(window).scroll(function() {
  console.log($(window).scrollTop());
});

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

  constructor(public navCtrl: NavController) {
   

  }

  myFunction() {
    var header = document.getElementById("myHeader");
    var top_container = document.getElementById("topContainer");
    if ($(top_container).offset().top<= -160) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }

}
