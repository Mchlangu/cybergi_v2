import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../../app-routing.module';

import { AppComponent } from '../../app.component';
import { SignInComponent } from '../auth/sign-in/sign-in.component';
import { SignUpComponent } from '../auth/sign-up/sign-up.component';
import { AdminDashboardComponent } from '../dashboards/admin-dashboard/admin-dashboard.component';
import { EmployerDashboardComponent } from '../dashboards/employer-dashboard/employer-dashboard.component';
import { EmployeeDashboardComponent } from '../dashboards/employee-dashboard/employee-dashboard.component';
import { DefaultDashboardComponent } from '../dashboards/default-dashboard/default-dashboard.component';
import { HeaderComponent } from '../header/header.component';
import { MainComponent } from '../main/main.component';
import { FooterComponent } from '../footer/footer.component';
import { DashboardLayoutComponent } from '../dashboards/dashboard-layout/dashboard-layout.component';
import { UserListComponent } from '../admin/user-list/user-list.component';
import { CreateUsersComponent } from '../admin/create-users/create-users.component';
import { EditUsersComponent } from '../admin/edit-users/edit-users.component';
import { UserDetailComponent } from '../admin/user-detail/user-detail.component';
import { EmployeeListComponent } from '../employer/employee-list/employee-list.component';
import { CreateEmployeeComponent } from '../employer/create-employee/create-employee.component';
import { EditEmployeeComponent } from '../employer/edit-employee/edit-employee.component';
import { EmployeeDetailComponent } from '../employer/employee-detail/employee-detail.component';
import { ModuleListComponent } from '../module/module-list/module-list.component';
import { CreateModuleComponent } from '../module/create-module/create-module.component';
import { EditModuleComponent } from '../module/edit-module/edit-module.component';
import { ModuleDetailComponent } from '../module/module-detail/module-detail.component';
import { CreateSubscriptionComponent } from '../employer/create-subscription/create-subscription.component';
import { EditSubscriptionComponent } from '../employer/edit-subscription/edit-subscription.component';
import { EnrollEmployeesComponent } from '../employer/enroll-employees/enroll-employees.component';
import { SubscriptionListComponent } from '../employer/subscription-list/subscription-list.component';
import { EmployeeModulesComponent } from '../employee/employee-modules/employee-modules.component';
import { QuizSubmitComponent } from '../quiz/quiz-submit/quiz-submit.component';
import { QuizDetailComponent } from '../quiz/quiz-detail/quiz-detail.component';
import { EditQuizComponent } from '../quiz/edit-quiz/edit-quiz.component';
import { CreateQuizComponent } from '../quiz/create-quiz/create-quiz.component';
import { QuizListComponent } from '../quiz/quiz-list/quiz-list.component';
import { EditLessonComponent } from './edit-lesson/edit-lesson.component';
import { LessonDetailComponent } from './lesson-detail/lesson-detail.component';
import { CreateLessonComponent } from './create-lesson/create-lesson.component';
import { LessonListComponent } from './lesson-list/lesson-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    AdminDashboardComponent,
    EmployerDashboardComponent,
    EmployeeDashboardComponent,
    DefaultDashboardComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    DashboardLayoutComponent,
    UserListComponent,
    CreateUsersComponent,
    EditUsersComponent,
    UserDetailComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    EditEmployeeComponent,
    EmployeeDetailComponent,
    ModuleListComponent,
    CreateModuleComponent,
    EditModuleComponent,
    ModuleDetailComponent,
    LessonListComponent,
    CreateLessonComponent,
    LessonDetailComponent,
    EditLessonComponent,
    QuizListComponent,
    CreateQuizComponent,
    EditQuizComponent,
    QuizDetailComponent,
    QuizSubmitComponent,
    SubscriptionListComponent,
    CreateSubscriptionComponent,
    EditSubscriptionComponent,
    EnrollEmployeesComponent,
    EmployeeModulesComponent,

  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

