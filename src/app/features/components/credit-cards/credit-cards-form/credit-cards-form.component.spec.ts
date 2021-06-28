import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardsFormComponent } from './credit-cards-form.component';

describe('CreditCardsFormComponent', () => {
  let component: CreditCardsFormComponent;
  let fixture: ComponentFixture<CreditCardsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditCardsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
