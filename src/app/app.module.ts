import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TipsTricksPage } from '../pages/tipstricks/tipstricks';
import { VideosPage } from '../pages/videos/videos';
import { PasswordPage } from '../pages/tipstricks/password/password';
import { EmailPage } from '../pages/tipstricks/email/email';
import { CleanWorkspacePage } from '../pages/tipstricks/cleanWorkspace/cleanWorkspace';
import { WebPage } from '../pages/tipstricks/web/web';
import { WasteManagementPage } from '../pages/tipstricks/wasteManagement/wasteManagement';
import { SpamPage } from '../pages/spam/spam';

import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { CallLog } from '@ionic-native/call-log/ngx';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TipsTricksPage,
    VideosPage,
    PasswordPage,
    EmailPage,
    CleanWorkspacePage,
    WebPage,
    WasteManagementPage,
    SpamPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TipsTricksPage,
    VideosPage,
    PasswordPage,
    EmailPage,
    CleanWorkspacePage,
    WebPage,
    WasteManagementPage,
    SpamPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CallLog,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
