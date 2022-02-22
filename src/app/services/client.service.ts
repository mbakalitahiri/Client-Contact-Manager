import { Client } from './../clients/models/client';
import { Injectable } from '@angular/core';
import { ClientModule } from '../clients/client.module';

@Injectable()
export class ClientService {
  constructor() {}

  save(client: Client) {
    console.log('CientService: ', client);
  }
}
