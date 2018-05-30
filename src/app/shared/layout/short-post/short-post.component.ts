import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-short-post',
  templateUrl: './short-post.component.html',
  styleUrls: ['./short-post.component.scss']
})
export class ShortPostComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Input() id: number;
  @Input() account: string;

  constructor() { }

  ngOnInit() {
  }

}
