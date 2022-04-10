import {Injectable, NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {ConfigResolver} from './ConfigResolv';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./Shared/loading/loadingPage/loadingPage.module').then(m => m.LoadingPageModule)
  },{
    path: 'tabs',
    loadChildren: () => import('./Shared/tabs/tabs.module').then(m => m.TabsPageModule)
    //resolve: {httpResponse: ConfigResolver}
  }
  //,
  //  { path: 'settings', loadChildren: './menuPage/options/settings/settingsPage.module#SettingsModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

