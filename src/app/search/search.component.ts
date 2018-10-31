import { Component, OnInit, OnDestroy } from '@angular/core';
import { Student,SearchService } from '../shared';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
  query: number;
  searchResults: Array<any>;
  sub: Subscription;

  constructor(private searchService: SearchService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.searchService.getAll().subscribe(
      (data: any) => { this.searchResults = data; },
      error => console.log(error)
    );
    console.log(this.searchResults);
  }

  search(): void {
    this.searchService.get(this.query).subscribe(
      (data: any) => { this.searchResults = data; },
      error => console.log(error)
    );
    console.log(this.searchResults);

  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
