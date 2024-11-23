import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatorPKComponent } from './validator-pk.component';

describe('ValidatorPKComponent', () => {
  let component: ValidatorPKComponent;
  let fixture: ComponentFixture<ValidatorPKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidatorPKComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidatorPKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
