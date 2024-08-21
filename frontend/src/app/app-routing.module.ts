import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { AdminDashboardComponent } from './components/dashboards/admin-dashboard/admin-dashboard.component';
import { EmployeeDashboardComponent } from './components/dashboards/employee-dashboard/employee-dashboard.component';
import { EmployerDashboardComponent } from './components/dashboards/employer-dashboard/employer-dashboard.component';
import { UserListComponent } from './components/admin/user-list/user-list.component';
import { CreateUsersComponent } from './components/admin/create-users/create-users.component';
import { EditUsersComponent } from './components/admin/edit-users/edit-users.component';
import { UserDetailComponent } from './components/admin/user-detail/user-detail.component';
import { EmployeeListComponent } from './components/employer/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './components/employer/create-employee/create-employee.component';
import { EditEmployeeComponent } from './components/employer/edit-employee/edit-employee.component';
import { EmployeeDetailComponent } from './components/employer/employee-detail/employee-detail.component';
import { ModuleListComponent } from './components/module/module-list/module-list.component';
import { CreateModuleComponent } from './components/module/create-module/create-module.component';
import { EditModuleComponent } from './components/module/edit-module/edit-module.component';
import { ModuleDetailComponent } from './components/module/module-detail/module-detail.component';
import { LessonListComponent } from './components/lesson/lesson-list/lesson-list.component';
import { CreateLessonComponent } from './components/lesson/create-lesson/create-lesson.component';
import { LessonDetailComponent } from './components/lesson/lesson-detail/lesson-detail.component';
import { EditLessonComponent } from './components/lesson/edit-lesson/edit-lesson.component';
import { SubscriptionListComponent } from './components/employer/subscription-list/subscription-list.component';
import { CreateSubscriptionComponent } from './components/employer/create-subscription/create-subscription.component';
import { EditSubscriptionComponent } from './components/employer/edit-subscription/edit-subscription.component';
import { EnrollEmployeesComponent } from './components/employer/enroll-employees/enroll-employees.component';
import { EmployeeModulesComponent } from './components/employee/employee-modules/employee-modules.component';
import { QuizListComponent } from './components/quiz/quiz-list/quiz-list.component';
import { CreateQuizComponent } from './components/quiz/create-quiz/create-quiz.component';
import { EditQuizComponent } from './components/quiz/edit-quiz/edit-quiz.component';
import { QuizDetailComponent } from './components/quiz/quiz-detail/quiz-detail.component';
import { QuizSubmitComponent } from './components/quiz/quiz-submit/quiz-submit.component';

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

