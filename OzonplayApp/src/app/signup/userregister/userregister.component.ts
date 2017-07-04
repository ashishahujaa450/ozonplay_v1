import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

declare let $:any;

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent implements OnInit {
  public pkg:any = {
    "free":"0$ Free",
    "lite":"5$ Lite 1 Month",
    "sliver":"15$ Sliver 3 Months",
    "gold":"25$ Gold 12 Months"
  };

  public type:string = "loading....";

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    $("html, body").animate({
      scrollTop: 0
    },200);
    let val = this.route.snapshot.params["type"];
    this.type = this.pkg[val];
  }

}
