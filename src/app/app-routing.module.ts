import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { FullCvComponent } from 'src/app/components/full-cv/full-cv.component';
import { ProjectsComponent } from 'src/app/components/projects/projects.component';
import { FormatPipeDemoComponent } from 'src/app/components/projects/demos/format-pipe-demo/format-pipe-demo.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: "/home",
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'cv',
        component: FullCvComponent,
    },
    {
        path: 'projects',
        component: ProjectsComponent,
    },
    {
        path: 'projects/formatpipedemo',
        component: FormatPipeDemoComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }