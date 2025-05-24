import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModernSummaryComponent } from './modern-summary.component';

describe('ModernSummaryComponent', () => {
  let component: ModernSummaryComponent;
  let fixture: ComponentFixture<ModernSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModernSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModernSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
