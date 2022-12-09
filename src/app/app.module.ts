import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
<<<<<<< Updated upstream
=======
import { NavigationComponent } from './navigation/navigation.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    EditTaskComponent,
    ViewTaskComponent,
    ArchivedTasksComponent,
    CurrentTasksComponent,
    HeaderComponent,
    SidebarComponent,
    HttpComponent,
    AuthComponent,
<<<<<<< Updated upstream
    VideoComponent
=======
    VideoComponent,
    NavigationComponent,
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< Updated upstream
    BrowserAnimationsModule
=======
    BrowserAnimationsModule,
    MatCardModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatFormFieldModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule
>>>>>>> Stashed changes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
