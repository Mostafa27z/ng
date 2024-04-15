import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SasaComponent } from './sasa.component';

describe('SasaComponent', () => {
  let component: SasaComponent;
  let fixture: ComponentFixture<SasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SasaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
