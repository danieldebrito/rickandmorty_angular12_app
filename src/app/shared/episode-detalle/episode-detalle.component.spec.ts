import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeDetalleComponent } from './episode-detalle.component';

describe('EpisodeDetalleComponent', () => {
  let component: EpisodeDetalleComponent;
  let fixture: ComponentFixture<EpisodeDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodeDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
