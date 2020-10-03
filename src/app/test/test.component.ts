import { Component, OnInit } from '@angular/core';
import { AnotherService } from './another.service';
import { HelloService } from './hello.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
})
export class TestComponent implements OnInit {
  constructor(
    private _helloService: HelloService,
    private _anotherService: AnotherService
  ) {}

  hello: string;

  ngOnInit(): void {
    this._helloService.test().subscribe((response) => (this.hello = response));
  }
}
