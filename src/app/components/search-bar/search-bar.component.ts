import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  @Output() onsearch: EventEmitter<string> = new EventEmitter<string>();
  searchStr!: string;

  constructor() {}

  ngOnInit() {}

  search(event: any): void {
    this.onsearch.emit(event.target.value);
  }
}
