import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterListCl3Component } from './character-list-cl3.component';

describe('CharacterListCl3Component', () => {
  let component: CharacterListCl3Component;
  let fixture: ComponentFixture<CharacterListCl3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterListCl3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharacterListCl3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
