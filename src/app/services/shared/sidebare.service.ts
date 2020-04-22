import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebareService {
  menu: any = [
    {
      titulo: 'Pincipal',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Dashboard', url: '/dashboard' },
        { titulo: 'ProgressBar', url: '/progress' },
        { titulo: 'Gráficas', url: '/charts' },
      ]
    }
  ];
  constructor() { }
}
