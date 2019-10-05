
import { Routes } from '@angular/router';
import { IndexRoutes } from './components/pages/index/index.routing';
import { HomeRoutes } from './components/pages/home/home.routing';
import { NotFoundRoutes } from './components/pages/not-found/not-found.routing';


export const routes: Routes = [ ...HomeRoutes, ...IndexRoutes,  ...NotFoundRoutes ];
