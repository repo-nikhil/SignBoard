import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isloading = true;
constructor(private route: Router){ }
Year:number = 0;

ngOnInit(){
  let currentYear = new Date().getFullYear();
  this.Year = currentYear;
  setTimeout(() => {
    this.isloading = false;
  }, 2000);
}

onclick(){
  debugger
  this.route.navigateByUrl('/SignBoard')
}
}
