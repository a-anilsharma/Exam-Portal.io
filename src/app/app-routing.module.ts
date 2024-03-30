import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { adminGuard } from './services/admin.guard';
import { userGuard } from './services/user.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewCategoryComponent } from './pages/admin/view-category/view-category.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { ViewQuizComponent } from './pages/admin/view-quiz/view-quiz.component';
import { ViewQuizQustionComponent } from './pages/admin/view-quiz-qustion/view-quiz-qustion.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { StartQuizComponent } from './pages/user/start-quiz/start-quiz.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full',
  
  },
{
  path:'signup',
  component:SignupComponent,
  pathMatch:'full',

},
{
  path:'login',
  component:LoginComponent,
  pathMatch:'full',

},
{
  path:'admin-dashboard',
  component:AdminDashboardComponent,
  canActivate:[adminGuard],
  children:[
    {
      path:'',
      component:WelcomeComponent,

    },
    {
      path:'profile',
      component:ProfileComponent,
    }
    ,{
      path:'view-category',
      component:ViewCategoryComponent,

    },{
      path:'add-category',
      component:AddCategoryComponent,
    },{
      path:'add-quiz',
      component:AddQuizComponent,
    },
    {
      path:'quizzes',
      component:ViewQuizComponent,
    },
    {
      path:'update/:qid',
      component:UpdateQuizComponent,
    },
    {
      path:'view-question/:qid/:title',
      component:ViewQuizQustionComponent,
    },
    {
      path:'add-question/:qid/:title',
      component:AddQuestionComponent,
    }
  ],
  
},
{
  path:'user-dashboard',
  component:UserDashboardComponent,
  canActivate:[userGuard],
  children:[
    {
      path:':catId',
      component:LoadQuizComponent,
    },
    {
      path:'instuctions/:qid',
      component:InstructionsComponent,
    },
  
  ]

},
{
  path:'start/:qid',
  component:StartQuizComponent,
  canActivate:[userGuard],  
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
