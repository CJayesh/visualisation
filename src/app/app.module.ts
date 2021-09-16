import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BinarySearchComponent } from './binary-search/binary-search.component';

import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [BrowserModule, FormsModule, MatInputModule],
  declarations: [AppComponent, HelloComponent, BinarySearchComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
