import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProxcolegasComponent } from './proxcolegas.component';

describe('ProxcolegasComponent', () => {
  let component: ProxcolegasComponent;
  let fixture: ComponentFixture<ProxcolegasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProxcolegasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProxcolegasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
