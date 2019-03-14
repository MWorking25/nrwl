import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbsService {

  constructor() { }

  getMenu(): Array<any> {
    const menu = [
      { name: '', path: './', children: [{ 
        name: 'Dashbord',
        path: './Dashbord'
      },] },
      { name: 'Dashboard', path: './Dashbord', children: [] },
      { name: 'Keep Notes', path: './keepNotes', children: [] },
      
    ];

    return menu;
  }



}
