import { Route } from '@angular/router';

import { AuthGuard } from '../../shared/guards/auth.guard';

import { HomeComponent } from './home.component';

export const HomeRoutes: Route[] = [

  { path: '', component: HomeComponent, canActivate: [ AuthGuard ], children: [

      { path: '', loadChildren: () => 
          import( './quizboard/quizboard.module' ).then( m => m.QuizboardModule )
      },
      { path: 'employee', loadChildren: () =>
          import( '../home/employee/employee.module' ).then( m => m.EmployeeModule )
      },
      { path: 'employee/:fullname', loadChildren: () =>
          import( '../home/employee/employee.module' ).then( m => m.EmployeeModule )
      },
      { path: 'employee/:fullname/:id', loadChildren: () =>
          import( '../home/employee/employee.module' ).then( m => m.EmployeeModule )
      },
      { path: 'presentation', loadChildren: () =>
          import( './presentation/presentation.module' ).then( m => m.PresentationModule )
      },
      { path: 'quiz', loadChildren: () =>
          import( '../home/quiz/quiz.module' ).then( m => m.QuizModule )
      },
      { path: 'summary', loadChildren: () =>
          import( '../home/summary/summary.module' ).then( m => m.SummaryModule )
      },

    ]
  }
];
