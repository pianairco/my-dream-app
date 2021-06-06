import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  toggled = false;

  _hasBackgroundImage = true;
  menus = [
    /*{
      title: 'general',
      type: 'header'
    },
    {
      title: 'Dashboard',
      icon: 'fa fa-tachometer-alt',
      active: false,
      type: 'dropdown',
      badge: {
        text: 'New ',
        class: 'badge-warning'
      },
      submenus: [
        {
          title: 'Dashboard 1',
          badge: {
            text: 'Pro ',
            class: 'badge-success'
          }
        },
        {
          title: 'Dashboard 2'
        },
        {
          title: 'Dashboard 3'
        }
      ]
    },
    {
      title: 'E-commerce',
      icon: 'fa fa-shopping-cart',
      active: false,
      type: 'dropdown',
      badge: {
        text: '3',
        class: 'badge-danger'
      },
      submenus: [
        {
          title: 'Products',
        },
        {
          title: 'Orders'
        },
        {
          title: 'Credit cart'
        }
      ]
    },
    {
      title: 'Components',
      icon: 'far fa-gem',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          title: 'General',
        },
        {
          title: 'Panels'
        },
        {
          title: 'Tables'
        },
        {
          title: 'Icons'
        },
        {
          title: 'Forms'
        }
      ]
    },
    {
      title: 'Charts',
      icon: 'fa fa-chart-line',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          title: 'Pie chart',
        },
        {
          title: 'Line chart'
        },
        {
          title: 'Bar chart'
        },
        {
          title: 'Histogram'
        }
      ]
    },
    {
      title: 'Maps',
      icon: 'fa fa-globe',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          title: 'Google maps',
        },
        {
          title: 'Open street map'
        }
      ]
    },*/
    {
      title: 'تنظیمات',
      type: 'header'
    },
    {
      title: 'دفتر تلفن',
      icon: 'fa fa-book',
      active: false,
      type: 'simple',
      route: '/home/book'
      // badge: {
      //   text: 'Beta',
      //   class: 'badge-primary'
      // },
    },
    {
      title: 'ارسال گروهی',
      icon: 'fa fa-calender',
      active: false,
      type: 'simple',
      route: '/home/group-sender'
    },
    {
      title: 'ارسال پیامک',
      icon: 'fa fa-globe',
      active: false,
      type: 'simple',
      route: '/home/sms-sender'
    },
    {
      title: 'گزارشگیری',
      icon: 'fa fa-chart-line',
      active: false,
      type: 'simple',
      route: '/home/reporting'
    },{
      title: 'خروج',
      icon: 'fa fa-folder',
      active: false,
      type: 'simple',
      route: ''
    }
  ];
  constructor() { }

  toggle(): void {
    this.toggled = ! this.toggled;
  }

  getSidebarState(): boolean {
    return this.toggled;
  }

  setSidebarState(state: boolean): void {
    this.toggled = state;
  }

  getMenuList(): any {
    return this.menus;
  }

  get hasBackgroundImage(): boolean {
    return this._hasBackgroundImage;
  }

  set hasBackgroundImage(hasBackgroundImage) {
    this._hasBackgroundImage = hasBackgroundImage;
  }
}
