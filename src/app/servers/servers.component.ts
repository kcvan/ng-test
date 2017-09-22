import { Component, OnInit } from '@angular/core';


//in the selector, the default is a html element. if you want to make
//it an attribute ON a element, it woudl be '[app-servers]'
//and you just add it on an element like an attribute.
//you can also so .app-servers and now it acts like a class instead
//of a element or attribute
@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers,
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {
  }

}
