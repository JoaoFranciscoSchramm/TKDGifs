import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoTeoricoComponent } from './texto-teorico.component';

describe('TextoTeoricoComponent', () => {
  let component: TextoTeoricoComponent;
  let fixture: ComponentFixture<TextoTeoricoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextoTeoricoComponent]
    });
    fixture = TestBed.createComponent(TextoTeoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
