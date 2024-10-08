import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { AdminDashboardComponent } from './components/dashboards/admin-dashboard/admin-dashboard.component';
import { EmployeeDashboardComponent } from './components/dashboards/employee-dashboard/employee-dashboard.component';
import { EmployerDashboardComponent } from './components/dashboards/employer-dashboard/employer-dashboard.component';
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
import { SubscriptionListComponent } from './components/subscriptions/subscription-list/subscription-list.component';
import { CreateSubscriptionComponent } from './components/subscriptions/create-subscription/create-subscription.component';
import { EditSubscriptionComponent } from './components/subscriptions/edit-subscription/edit-subscription.component';
import { EnrollEmployeesComponent } from './components/enroll-employees/enroll-employees.component';
import { EmployeeModulesComponent } from './components/employee-modules/employee-modules.component';

const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },

  { path: 'subscription-list', component: SubscriptionListComponent },
  { path: 'subscription-create', component: CreateSubscriptionComponent },
  { path: 'subscription-edit/:id', component: EditSubscriptionComponent },
  { path: 'enroll-employees', component: EnrollEmployeesComponent },

  { path: 'employee-modules', component: EmployeeModulesComponent },

  { path: 'quiz-list', component: QuizListComponent },
  { path: 'quiz-create', component: CreateQuizComponent },
  { path: 'quiz-edit/:id', component: EditQuizComponent },
  { path: 'quiz-detail/:id', component: QuizDetailComponent },
  { path: 'quiz-submit/:id', component: QuizSubmitComponent },

  { path: 'module-list', component: ModuleListComponent },
  { path: 'create-module', component: CreateModuleComponent },
  { path: 'edit-module/:id', component: EditModuleComponent },
  { path: 'module-detail/:id', component: ModuleDetailComponent },

  { path: 'employee-list', component: EmployeeListComponent },
  { path: 'create-employee', component: CreateEmployeeComponent },
  { path: 'edit-employee/:employeeId', component: EditEmployeeComponent },
  { path: 'employee-detail/:employeeId', component: EmployeeDetailComponent },

  { path: 'lesson-list', component: LessonListComponent },
  { path: 'create-lesson', component: CreateLessonComponent },
  { path: 'lesson-edit/:id', component:EditLessonComponent},
  { path: 'lesson-detail/:id', component: LessonDetailComponent },

  { path: 'user-list', component: UserListComponent },
  { path: 'create-user', component: CreateUsersComponent},
  { path: 'edit-user/:id', component: EditUsersComponent },
  { path: 'user-detail/:id', component: UserDetailComponent },

  { path: 'admin-dashboard', component: AdminDashboardComponent},
  { path: 'employee-dashboard', component: EmployeeDashboardComponent},
  { path: 'employer-dashboard', component: EmployerDashboardComponent},

  { path: 'signin', component: SignInComponent },
  { path: 'signup', component:SignUpComponent},
  { path: '**', redirectTo: '/signin'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

