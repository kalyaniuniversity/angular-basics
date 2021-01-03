import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BishnuComponent} from './bishnu.component';

describe('BishnuComponent', () => {
  let component: BishnuComponent;
  let fixture: ComponentFixture<BishnuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BishnuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BishnuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
