import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from "../../services/common.service";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  data : any = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CommonService
  ) { }

  ngOnInit(): void {
    this.getDetails();
  }

  getDetails(){
    this.service.getUserDetail().subscribe(res => {
      this.data = res;
    })
  }

  redirectTo(id:number){
    this.router.navigate([`update/${id}`]);
  }
}
