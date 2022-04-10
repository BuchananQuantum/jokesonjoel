import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs';
import {GlobalFields} from '../../GlobalFields';


function getDefaultPath() {
  if (GlobalFields.site_details)
    return 'tabs/' + GlobalFields.site_details.themeEnabled + '/home';
  else
    return 'loading';
}

const routes: Routes = [
  {
    path: 'my-listing',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () => import('../../MyListing/home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'search',
        children: [
          {
            path: '',
            loadChildren: () => import('../../MyListing/searchPage/search.module').then(m => m.SearchPageModule)
          }
        ]
      },
      {
        path: 'categoriesList',
        children: [
          {
            path: '',
            loadChildren: () => import('../../MyListing/categoriesList/categoriesList.module').then(m => m.CategoriesListModule)
          }
        ]
      },
      {
        path: 'messages',
        children: [
          {
            path: '',
            loadChildren: () => import('../../MyListing/messagesPage/messagesPage.module').then(m => m.MessagesPageModule)
          }
        ]
      }, {
        path: 'customPage',
        children: [
          {
            path: '',
            loadChildren: () => import('../customPage/customPage.module').then(m => m.CustomPageModule)
          }
        ]
      },
      {
        path: 'shop',
        children: [
          {
            path: '',
            loadChildren: () => import('../shopPage/shopPage.module').then(m => m.ShopPageModule)
          }
        ]
      },
      {
        path: 'menuPage',
        children: [
          {
            path: '',
            loadChildren: () => import('../../menuPage/menuPage.module').then(m => m.MenuPageModule)
          }
        ]
      }
    ]
  },
  {
    path: 'customPage',
    children: [
      {
        path: '',
        loadChildren: () => import('../customPage/customPage.module').then(m => m.CustomPageModule)
      }
    ]
  },
  {
    path: 'shop',
    children: [
      {
        path: '',
        loadChildren: () => import('../shopPage/shopPage.module').then(m => m.ShopPageModule)
      }
    ]
  },
  {
    path: 'menuPage',
    children: [
      {
        path: '',
        loadChildren: () => import('../../menuPage/menuPage.module').then(m => m.MenuPageModule)
      }
    ]
  },
  {
    path: 'listing-pro',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () => import('../../ListingPro/home/home.module').then(m => m.HomePageModule_LP)
          }
        ]
      },
      {
        path: 'search',
        children: [
          {
            path: '',
            loadChildren: () => import('../../ListingPro/searchPage/search_LP.module').then(m => m.SearchPage_LPModule)
          }
        ]
      },
      {
        path: 'categoriesList',
        children: [
          {
            path: '',
            loadChildren: () => import('../../ListingPro/categoriesList/categoriesList_LP.module').then(m => m.CategoriesList_LPModule)
          }
        ]
      }, {
        path: 'customPage',
        children: [
          {
            path: '',
            loadChildren: () => import('../customPage/customPage.module').then(m => m.CustomPageModule)
          }
        ]
      },
      {
        path: 'shop',
        children: [
          {
            path: '',
            loadChildren: () => import('../shopPage/shopPage.module').then(m => m.ShopPageModule)
          }
        ]
      },
      {
        path: 'menuPage',
        children: [
          {
            path: '',
            loadChildren: () => import('../../menuPage/menuPage.module').then(m => m.MenuPageModule)
          }
        ]
      }
    ]
  }, {
    path: '',
    redirectTo: getDefaultPath(),
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {

}
