import { Component, OnInit } from '@angular/core';
import { RouterLink,Router } from '@angular/router';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  Search() {
    this.router.navigateByUrl('search/'+event.target.value);
    console.log(event.target.value);
  }

}
