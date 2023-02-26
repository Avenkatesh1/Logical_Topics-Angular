import { AfterViewInit, Component, ElementRef, OnInit ,ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit,AfterViewInit {
  clientId: string = ''; siteId: string = '';  buildingId: string = '';
  floorId: string = '';   clients: any []= [];  sites: any []= [];
  buildings: any []= [];   floors: any []= [];
  @ViewChild('myclient') client!: ElementRef | undefined;
  constructor(private http: HttpClient) { }




  openModel() {
    const modelDiv = document.getElementById('myModal');
    if(modelDiv!= null) {
      modelDiv.style.display = 'block';
    } 
  }

  CloseModel() {
    const modelDiv = document.getElementById('myModal');
    if(modelDiv!= null) {
      modelDiv.style.display = 'none';
    } 
  }








  ngOnInit() {
    this.loadClients();

    // setTimeout(() => {
    //   debugger;
    //   if(this.client != null) {
    //     this.client.nativeElement.style.color = 'red';
    //   }
    // }, 2000);

  }
  ngAfterViewInit() {
    if(this.client != null) {
      this.client.nativeElement.style.color = 'red';
    }
  }

  loadClients() {
    this.http.get('http://onlinetestapi.gerasim.in/api/GetValet/GetAllClients').subscribe((result: any)=> {
      this.clients = result.data;
    })
  }
  getSitesByClinetId() {
    this.http.get('http://onlinetestapi.gerasim.in/api/GetValet/GetAllSites?clientid='+this.clientId).subscribe((result: any)=> {
      this.sites = result.data;
    })
  }
  getBuildingBySiteId() {
    this.http.get('http://onlinetestapi.gerasim.in/api/GetValet/GetBuildingBySiteId?id='+this.siteId).subscribe((result: any)=> {
      this.buildings = result.data;
    })
  }
  getFloorByBuilidngId() {
    this.http.get('http://onlinetestapi.gerasim.in/api/GetValet/GetFloorsByBuildingId?id='+this.buildingId).subscribe((result: any)=> {
      this.floors = result.data;
    })
  }



}
