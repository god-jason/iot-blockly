import { Routes } from '@angular/router';
import { List } from './list/list';
import { Edit } from './edit/edit';
import { About } from './about/about';

export const routes: Routes = [
    {path: '', pathMatch: 'full', component: List},
    {path: 'about', component: About},
    {path: 'edit/:id', component: Edit},
];
