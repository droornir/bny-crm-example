import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PlaygroundModule } from 'angular-playground';

PlaygroundModule
  .configure({
      selector: 'cm-app-component',
      overlay: false,
      modules: []
  });

@Component({
  selector: 'cm-playground-app',
  template: '<cm-playground-root></cm-playground-root>'
})
export class AppComponent {}

@NgModule({
  imports: [
    BrowserModule,
    PlaygroundModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
