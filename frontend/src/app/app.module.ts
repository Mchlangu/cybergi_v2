import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { AdminDashboardComponent } from './components/dashboards/admin-dashboard/admin-dashboard.component';
import { EmployerDashboardComponent } from './components/dashboards/employer-dashboard/employer-dashboard.component';
import { EmployeeDashboardComponent } from './components/dashboards/employee-dashboard/employee-dashboard.component';
import { DefaultDashboardComponent } from './components/dashboards/default-dashboard/default-dashboard.component';
import { HeaderComponent } from './components/template/header/header.component';
import { MainComponent } from './components/template/main/main.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { DashboardLayoutComponent } from './components/dashboards/dashboard-layout/dashboard-layout.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { CreateUsersComponent } from './components/users/create-users/create-users.component';
import { EditUsersComponent } from './components/users/edit-users/edit-users.component';
import { UserDetailComponent } from './components/users/user-detail/user-detail.component';
import { EmployeeListComponent } from './components/users/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './components/users/create-employee/create-employee.component';
import { EditEmployeeComponent } from './components/users/edit-employee/edit-employee.component';
import { EmployeeDetailComponent } from './components/users/employee-detail/employee-detail.component';
import { ModuleListComponent } from './components/modules/module-list/module-list.component';
import { CreateModuleComponent } from './components/modules/create-module/create-module.component';
import { EditModuleComponent } from './components/modules/edit-module/edit-module.component';
import { ModuleDetailComponent } from './components/modules/module-detail/module-detail.component';
import { LessonListComponent } from './components/modules/lesson-list/lesson-list.component';
import { CreateLessonComponent } from './components/modules/create-lesson/create-lesson.component';
import { LessonDetailComponent } from './components/modules/lesson-detail/lesson-detail.component';
import { EditLessonComponent } from './components/modules/edit-lesson/edit-lesson.component';
import { QuizListComponent } from './components/modules/quiz-list/quiz-list.component';
import { CreateQuizComponent } from './components/modules/create-quiz/create-quiz.component';
import { EditQuizComponent } from './components/modules/edit-quiz/edit-quiz.component';
import { QuizDetailComponent } from './components/modules/quiz-detail/quiz-detail.component';
import { QuizSubmitComponent } from './components/modules/quiz-submit/quiz-submit.component';
import { CreateSubscriptionComponent } from './components/subscriptions/create-subscription/create-subscription.component';
import { EditSubscriptionComponent } from './components/subscriptions/edit-subscription/edit-subscription.component';
import { EnrollEmployeesComponent } from './components/enroll-employees/enroll-employees.component';
import { SubscriptionListComponent } from './components/subscriptions/subscription-list/subscription-list.component';
import { EmployeeModulesComponent } from './components/employee-modules/employee-modules.component';

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

