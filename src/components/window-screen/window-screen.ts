import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
import {WindowCustom} from '../../Models/WindowCustom';
import { AppserviceProvider } from '../../providers/appservice/appservice';

/**
 * Generated class for the WindowScreenComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'window-screen',
  templateUrl: 'window-screen.html'
})
export class WindowScreenComponent implements OnInit {

  @Input()
  layoutNumInput: number;

  windows: WindowCustom[];

  constructor(private service: AppserviceProvider) {
  

  }

  ngOnInit(){
    console.log('Hello WindowScreenComponent Component');
    console.log("layoutNumInput" + this.layoutNumInput);
      

    this.service.getLayout(this.layoutNumInput).subscribe(data=>{
      debugger;
      this.windows = data.windows;
      console.log(this.windows);
      this.windows.forEach(e => {
        e.width = e.width + "%";
        e.height = e.height + "%";
        e.left =e.left + "%";
        e.top = e.top + "%";
      });
    });
  }

  

}
