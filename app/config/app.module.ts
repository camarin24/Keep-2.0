import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { routing } from './app.routes';

/*components*/
import { KeepComponent } from '../components/app.keep.component'
import { LoginComponent } from '../components/app.login.component'
import { AppComponent } from '../components/app.component';

/*Services*/
import { LoggedInGuard } from '../config/app.userAuth';
import { AutService } from '../services/app.auth.service';
import { LocalStorageService } from './../services/implementations/app.baseServiceImplementations'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing
  ],
  declarations: [
    AppComponent,
    KeepComponent,
    LoginComponent
  ],
  providers: [LoggedInGuard,AutService,LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
