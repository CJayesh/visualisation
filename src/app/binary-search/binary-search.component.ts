import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binary-search',
  templateUrl: './binary-search.component.html',
  styleUrls: ['./binary-search.component.scss'],
})
export class BinarySearchComponent implements OnInit {
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 14, 15, 24, 25, 36, 37, 45, 46, 47];
  sorted_num = [];
  to_search: number;
  result: any;
  begin_index: number;
  mid_index: number;
  end_index: number;

  constructor() {}

  ngOnInit() {
    this.sorted_num = this.numbers.sort((a, b) => a - b);
  }

  sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  async doBinarySearch(begin = 0, end = this.sorted_num.length - 1) {
    if (isNaN(this.to_search)) {
      this.result = 'Not found';
      return;
    }
    this.begin_index = begin;
    this.end_index = end;

    if (
      this.sorted_num[begin] > this.to_search ||
      this.sorted_num[end] < this.to_search
    ) {
      this.result = 'Not found';
      return;
    } else if (this.sorted_num[begin] == this.to_search) {
      this.result = 'found at' + begin;
      return;
    } else if (this.sorted_num[end] == this.to_search) {
      this.result = 'found at' + end;
      return;
    }

    let mid = Math.floor((begin + end) / 2);
    this.mid_index = mid;
    await this.sleep(2000);
    console.log(begin, mid, end);
    if (this.sorted_num[mid] == this.to_search) {
      this.result = 'found at ' + mid;
      return;
    } else if (this.sorted_num[mid] > this.to_search) {
      this.doBinarySearch(begin, mid);
    } else {
      this.doBinarySearch(mid, end);
    }
  }
}
