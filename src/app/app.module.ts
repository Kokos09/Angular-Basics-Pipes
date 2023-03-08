import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Librerias de terceros

//Mi codigo
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//Cambiar de forma global
import  localeEs  from "@angular/common/locales/es-HN";
import  localeFr  from "@angular/common/locales/fr";
import { registerLocaleData } from "@angular/common";
registerLocaleData(localeEs);
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    AppRouterModule,
    VentasModule
  ],
  providers: [
    {
      provide:LOCALE_ID,useValue:'es-HN'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
