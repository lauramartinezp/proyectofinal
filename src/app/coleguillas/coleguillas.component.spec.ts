import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColeguillasComponent } from './coleguillas.component';

describe('ColeguillasComponent', () => {
  let component: ColeguillasComponent;
  let fixture: ComponentFixture<ColeguillasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColeguillasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColeguillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
