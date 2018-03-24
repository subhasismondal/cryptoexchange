import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HitbtcComponent } from './hitbtc.component';

describe('HitbtcComponent', () => {
  let component: HitbtcComponent;
  let fixture: ComponentFixture<HitbtcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HitbtcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HitbtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
