import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Cl3Component } from './ejercicios/cl3/cl3.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SegundoComponent } from './ejercicios/segundo/segundo.component';
import { TerceroComponent } from './ejercicios/tercero/tercero.component';
import { PagErrorComponent } from './ejercicios/pag-error/pag-error.component';
import { MaterialModule } from './angular-material/material/material.module';
import { FormsModule } from '@angular/forms';
import { AppHttpModule } from './app-http/app-http.module';
import { CharacterListCl3Component } from './character-list-cl3/character-list-cl3.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    Cl3Component,
    SegundoComponent,
    TerceroComponent,
    PagErrorComponent,
    CharacterListCl3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    AppHttpModule
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
