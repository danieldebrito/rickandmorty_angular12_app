import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersBarComponent } from './characters-bar.component';

describe('CharactersBarComponent', () => {
  let component: CharactersBarComponent;
  let fixture: ComponentFixture<CharactersBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
