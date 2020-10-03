import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HelloService } from './hello.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TestComponent } from './test.component';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  let helloServiceStub = {
    test: () => of('Test'),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent],
      //providers: [{ provide: HelloService, useValue: helloServiceStub }], // it works when removing the comment for this
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
