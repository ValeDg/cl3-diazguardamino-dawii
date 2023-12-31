import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cl3Component } from './cl3.component';

describe('Cl3Component', () => {
  let component: Cl3Component;
  let fixture: ComponentFixture<Cl3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Cl3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cl3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
