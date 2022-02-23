import { Observable, of } from 'rxjs';
import { Client } from './../clients/models/client';
import { Injectable } from '@angular/core';

@Injectable()
export class ClientService {
  datos: object[] = [{ nombre: 'mohtadi', apellidos: 'bakali tahiri' }];
  constructor() {}

  save(client: Client) {
    console.log('CientService: ', client);
  }

  getData(): Observable<object> {
    return of(this.datos);
  }
}
