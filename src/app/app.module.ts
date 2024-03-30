import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './pages/home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { authInterceptorProviders } from './services/auth.insterceptor';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import {MatListModule} from '@angular/material/list';
import { ProfileComponent } from './pages/profile/profile.component';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import {MatTableModule} from '@angular/material/table';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ViewCategoryComponent } from './pages/admin/view-category/view-category.component';
import {MatDividerModule} from '@angular/material/divider';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { ViewQuizComponent } from './pages/admin/view-quiz/view-quiz.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import { ViewQuizQustionComponent } from './pages/admin/view-quiz-qustion/view-quiz-qustion.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { SidebarUserComponent } from './pages/user/sidebar-user/sidebar-user.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { StartQuizComponent } from './pages/user/start-quiz/start-quiz.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule, NgxUiLoaderRouterModule } from 'ngx-ui-loader';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    AddCategoryComponent,
    ViewCategoryComponent,
    AddQuizComponent,
    ViewQuizComponent,
    ViewQuizQustionComponent,
    AddQuestionComponent,
    SidebarUserComponent,
    LoadQuizComponent,
    UpdateQuizComponent,
    InstructionsComponent,
    StartQuizComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatSelectModule,
    CKEditorModule,
    MatProgressSpinnerModule,
     NgxUiLoaderModule,
     NgxUiLoaderHttpModule.forRoot({showForeground:true,}),
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
