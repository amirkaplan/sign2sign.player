import { Component ,OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import { WindowCustom } from '../../Models/WindowCustom';
import { AppserviceProvider } from '../../providers/appservice/appservice';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  //  windows: Array<WindowCustom>;
  
  constructor(public navCtrl: NavController,public service: AppserviceProvider) {
    // this.windows = [
    //   new WindowCustom("win1","0", "0","30" ,"20",'') ,
    //   new WindowCustom("win2","500", "0","70" ,"50",'') 
    //  ];

    // this.windows.forEach(e => {
    //   e.style = `width: ${e.width}px; height:100px`;
    //   e.width = e.width + "%";
    //   e.height = e.height + "%";
    //   e.x =e.x + "%";
    //   e.y = e.y + "%";
    
    // });

  }

  ngOnInit(){
    //  this.service.getLayout(2).subscribe(function(data){
    //   debugger;
    //   this.windows = data.windows;

    //   this.windows.forEach(e => {
    //     e.width = e.width + "%";
    //     e.height = e.height + "%";
    //     e.left =e.left + "%";
    //     e.top = e.top + "%";
    //   });
    // });
  }

}
