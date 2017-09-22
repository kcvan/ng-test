//decorators let you enhance your classes. its not typescript native
//so you have to import it
import { Component } from '@angular/core';


//this is basically like the ng1 configuration where you add the
//html template and things like reloadonsearch attributes

//the selector becomes the html tag you can use in other components

//paths are relative to this TS file
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})

export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';

  getServerStatus() {
    return this.serverStatus;
  }
}
