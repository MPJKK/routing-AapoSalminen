import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RoutesComponent} from './routes/routes.component';
import {SetupComponent} from './setup/setup.component';

const routes: Routes = [
    {
        path: '',
        component: SetupComponent
    },   {

        path: 'routes',
        component: RoutesComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}