import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SreshthaComponent} from './sreshtha.component';

describe('SreshthaComponent', () => {
  let component: SreshthaComponent;
  let fixture: ComponentFixture<SreshthaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SreshthaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SreshthaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
