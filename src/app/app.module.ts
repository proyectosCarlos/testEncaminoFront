import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RutasComponent } from './rutas/rutas/rutas.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { HttpClientModule }  from '@angular/common/http'
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    RutasComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    LeafletModule.forRoot(),
    HttpClientModule,
    FormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
