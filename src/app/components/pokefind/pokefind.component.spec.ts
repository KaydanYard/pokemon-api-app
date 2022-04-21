import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokefindComponent } from './pokefind.component';

describe('HomeComponent', () => {
  let component: PokefindComponent;
  let fixture: ComponentFixture<PokefindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokefindComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokefindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
