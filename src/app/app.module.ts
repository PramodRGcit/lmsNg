import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AuthorComponent } from './admin/author/author.component';
import { AuthorListComponent } from './admin/author-list/author-list.component';
import { AuthorService } from './admin/author.service';
import { HttpModule } from '@angular/http';
import { FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AuthorComponent,
    AuthorListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
