import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorietasComponent } from './historietas.component';

describe('HistorietasComponent', () => {
  let component: HistorietasComponent;
  let fixture: ComponentFixture<HistorietasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorietasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorietasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
