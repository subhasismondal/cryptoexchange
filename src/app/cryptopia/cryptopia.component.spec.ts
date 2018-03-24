import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptopiaComponent } from './cryptopia.component';

describe('CryptopiaComponent', () => {
  let component: CryptopiaComponent;
  let fixture: ComponentFixture<CryptopiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptopiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptopiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
