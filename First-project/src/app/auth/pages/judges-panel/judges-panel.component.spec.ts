import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JudgesPanelComponent } from './judges-panel.component';

describe('JudgesPanelComponent', () => {
  let component: JudgesPanelComponent;
  let fixture: ComponentFixture<JudgesPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JudgesPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JudgesPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
