import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/Home/home/home/home.component';
import { SignatureBoardComponent } from 'src/Padboard/signature/signature-board/signature-board.component';
import { SpinnerComponent } from '../spinner/spinner.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'SignBoard', component:SignatureBoardComponent},
  {path:'spinner', component:SpinnerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
