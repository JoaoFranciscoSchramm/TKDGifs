import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnicaCardComponent } from './tecnica-card.component';

describe('TecnicaCardComponent', () => {
  let component: TecnicaCardComponent;
  let fixture: ComponentFixture<TecnicaCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TecnicaCardComponent]
    });
    fixture = TestBed.createComponent(TecnicaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
