import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 import { FormsModule } from '@angular/forms';
 import { HttpClientModule} from '@angular/common/http';
 import { InformationService } from './information.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashSidebarComponent } from './dash-sidebar/dash-sidebar.component';
import { ViewComponent } from './view/view.component';
import { DepositeComponent } from './deposite/deposite.component';
import { SavingAccountComponent } from './saving-account/saving-account.component';
import { LoanComponent } from './loan/loan.component';
import { HeaderComponent } from './header/header.component';

import { MsalGuard, MsalInterceptor, MsalModule, MsalRedirectComponent, MsalService, MSAL_INSTANCE } from '@azure/msal-angular';
import { InteractionType, IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
// Import the Azure AD B2C configuration 
import { msalConfig, protectedResources } from './auth-config';

export function MSALInstanceFactory():IPublicClientApplication{

  return new PublicClientApplication({

    auth:{

      clientId:'d76f4c48-fcf4-4182-ba25-6b92e5ba3e7f',

      authority: "https://login.microsoftonline.com/a7bae7fa-0df1-4562-a554-16a95f54c8ce",

      redirectUri:'http://localhost:4200/'

    }

  })

}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashSidebarComponent,
    ViewComponent,
    DepositeComponent,
    SavingAccountComponent,
    LoanComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [InformationService, {
    provide:MSAL_INSTANCE,
    useFactory:MSALInstanceFactory
  },
MsalService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }