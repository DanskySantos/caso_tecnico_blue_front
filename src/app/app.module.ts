import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavComponent} from './_components/nav/nav.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './_components/register/register.component';
import {SharedModule} from "./_modules/shared.module";
import {ErrorInterceptor} from "./_interceptors/error.interceptor";
import {NotFoundComponent} from './errors/not-found/not-found.component';
import {ServerErrorComponent} from './errors/server-error/server-error.component';
import {EnterprisesListComponent} from './_components/enterprises-list/enterprises-list.component';
import { TextFieldComponent } from './_components/text-field/text-field.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    NotFoundComponent,
    ServerErrorComponent,
    EnterprisesListComponent,
    TextFieldComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        FormsModule,
        SharedModule,
        ReactiveFormsModule,
    ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
