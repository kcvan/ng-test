import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessAlertComponent } from './successAlert/successAlert.component';
import { WarningAlertComponent } from './warningAlert/warningAlert.component';

//currently our webpack bundles our files automatically so you do not need
//a file extension

//angular uses 'modules' to bundle components and pieces of your app into packages
//notice this is a module, not a component(the @NgModule decorator)
//four attributes:

//declarations: angular needs to know about components, does not happen automatically
//we have to ass ServerComponent to the declarations and also import it liek AppComponent
//imports: allows us to add other modules into this module
//providers:
//bootstrap: tells angular which component to load at the start in the index.html

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccessAlertComponent,
    WarningAlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
