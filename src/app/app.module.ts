// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
// import { AppComponent } from './app.component';
// import { CryptoService } from './crypto.service';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule,
//     FormsModule
//   ],
//   providers: [CryptoService],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }


import{BrowserModule}from'@angular/platform-browser';
import{NgModule}from'@angular/core';
import{UserService}from'./user.service';
import{AppComponent}from'./app.component';
import{HttpClientModule}from'@angular/common/http';
@NgModule({
declarations:[
AppComponent,
],
imports:[
BrowserModule,
HttpClientModule
],
providers:[],
bootstrap:[AppComponent]
})
export class AppModule {}



