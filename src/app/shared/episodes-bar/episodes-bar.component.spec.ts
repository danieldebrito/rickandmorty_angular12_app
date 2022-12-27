import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodesBarComponent } from './episodes-bar.component';

describe('EpisodesBarComponent', () => {
  let component: EpisodesBarComponent;
  let fixture: ComponentFixture<EpisodesBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodesBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodesBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
