import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { ContactoComponent } from '../components/contacto/contacto.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';

const routes: Routes =[
{
  path: 'home',
  component:HomeComponent
},
{
  path: 'contacto',
  component:ContactoComponent
},
{
  path: 'header',
  component:HeaderComponent
},

{
  path: 'content',
  component:ContactoComponent
},
{
  path: 'fooder',
  component:FooterComponent
}
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
