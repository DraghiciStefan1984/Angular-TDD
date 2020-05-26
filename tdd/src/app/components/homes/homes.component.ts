import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.scss']
})
export class HomesComponent implements OnInit {
  homes$;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.homes$=this.dataService.getHomes$();
  }

}
