/**
 * 模块
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { LineComponent } from './load/line/line.component';
import { TableListComponent } from './table/table-list/table-list.component' ;
import { StartComponent } from './control/start/start.component' ;
import { Routes,RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AnimateComponent } from './animate/animate.component'  ;
import { HttpModule } from '@angular/http';
import { HttpServices } from './common-services/http-service/http.service';

const roteConfig :Routes = [
  {path:'home',component:HomeComponent},
  {path:'animate',component:AnimateComponent},
];

@NgModule({
  declarations: [ //组件.指令。管�, HeaderComponent�
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    LineComponent,
    FooterComponent,
    StartComponent,
    HomeComponent,
    TableListComponent,
    AnimateComponent
  ],
  imports: [
    BrowserModule, //依赖模块
    BrowserAnimationsModule,
     HttpModule,
    RouterModule.forRoot(roteConfig)
  ],
  providers: [HttpServices],//服务
  bootstrap: [AppComponent]//模块主组件
})
export class AppModule { }
