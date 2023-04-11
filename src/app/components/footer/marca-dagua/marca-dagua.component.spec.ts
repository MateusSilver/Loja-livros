import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaDaguaComponent } from './marca-dagua.component';

describe('MarcaDaguaComponent', () => {
  let component: MarcaDaguaComponent;
  let fixture: ComponentFixture<MarcaDaguaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarcaDaguaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarcaDaguaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
