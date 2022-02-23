import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.scss'],
  providers: [ClientService],
})
export class ClientPageComponent implements OnInit, AfterViewInit {
  datos: object[] = [];
  id: string = '';
  constructor(
    private route: ActivatedRoute,
    private clientSvc: ClientService
  ) {}

  ngOnInit(): void {
    this.clientSvc.getData().subscribe((dat: any) => {
      this.datos = dat;
    });
  }

  ngAfterViewInit() {
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);
  }
}
