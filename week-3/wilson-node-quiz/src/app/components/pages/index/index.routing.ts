import { Route } from '@angular/router';
import { LoginGuard } from '../../shared/guards/login.guard';
import { IndexComponent } from './index.component';

export const IndexRoutes: Route[] = [

  { path: 'session', component: IndexComponent, canActivate: [ LoginGuard ], children: [

      { path: 'login', loadChildren: () =>
          import('./login/login.module').then( m => m.LoginModule )
      },
      { path: 'register', loadChildren: () =>
          import('./register/register.module').then( m => m.RegisterModule )
      },
      { path: 'reset', loadChildren: () =>
          import('./reset/reset.module').then( m => m.ResetModule )
      },
      { path: 'refused', loadChildren: () =>
          import('./refused/refused.module').then( m => m.RefusedModule )
      }
    ]
  }
];
