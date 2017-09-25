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
  serverCreationStatus = 'No server was created';
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['Testserver1', 'Testserver 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }


  //we get event from the template
  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
