import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndquestHeaderComponent } from './endquest-header.component';

describe('EndquestHeaderComponent', () => {
  let component: EndquestHeaderComponent;
  let fixture: ComponentFixture<EndquestHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndquestHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndquestHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
