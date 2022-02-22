import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.scss'],
  providers:[ClientService]
})
export class ClientPageComponent implements OnInit {
  constructor(private route: ActivatedRoute, private  clientSvc: ClientService) {}

  ngOnInit(): void {
    //let id = this.route.snapshot.paramMap.get('id');

    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    console.log (this.clientSvc.getData())
  }
}
