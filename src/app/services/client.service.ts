import { Injectable } from '@angular/core';
import { ClientModule } from '../clients/client.module';

@Injectable()
export class ClientService {

  constructor() { }

  getData() {
    return [
      {
        id: 1,
        name: 'Client 1',
        address: 'Address 1',
        phone: '123456789',
        email: ' '


      },];
  }
}
