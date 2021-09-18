import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public menuOpen: boolean = false

  constructor(
  ) { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
    var header = document.getElementById("top-header");
    this.myFunction(header)
  }

  myFunction(header) {
    if (window.pageYOffset > 0) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }

}
