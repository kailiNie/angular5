/**
 * 模块
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { LineComponent } from './load/line/line.component';
import { TableListComponent } from './table/table-list/table-list.component' ;
import { StartComponent } from './control/start/start.component' ;
import { Routes,RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component' ;


const roteConfig :Routes = [
  {path:'home',component:HomeComponent},
  {path :'tableList',component:TableListComponent } 
]

@NgModule({
  declarations: [ //组件.指令。管�, HeaderComponent�
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    LineComponent,
    FooterComponent,
    StartComponent,
    HomeComponent,
    TableListComponent  
  ],
  imports: [
    BrowserModule, //依赖模块
    // FormsModule,
    // HttpModule
    RouterModule.forRoot(roteConfig)
  ],
  providers: [],//服务
  bootstrap: [AppComponent]//模块主组件
})
export class AppModule { }
