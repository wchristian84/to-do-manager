import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './list/list.component';
import { AddTaskComponent } from './list/add-task/add-task.component';
import { EditTaskComponent } from './list/edit-task/edit-task.component';
import { ViewTaskComponent } from './list/view-task/view-task.component';
import { ArchivedTasksComponent } from './list/archived-tasks/archived-tasks.component';
import { CurrentTasksComponent } from './list/current-tasks/current-tasks.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidebarComponent } from './navigation/sidebar/sidebar.component';
import { HttpComponent } from './shared/http/http.component';
import { AuthComponent } from './shared/auth/auth.component';
import { VideoComponent } from './video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddTaskComponent,
    EditTaskComponent,
    ViewTaskComponent,
    ArchivedTasksComponent,
    CurrentTasksComponent,
    HeaderComponent,
    SidebarComponent,
    HttpComponent,
    AuthComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
