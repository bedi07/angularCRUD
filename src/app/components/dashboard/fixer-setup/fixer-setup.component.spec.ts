import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixerSetupComponent } from './fixer-setup.component';

describe('FixerSetupComponent', () => {
  let component: FixerSetupComponent;
  let fixture: ComponentFixture<FixerSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixerSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixerSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
