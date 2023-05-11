import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathGPTComponent } from './math-gpt.component';

describe('MathGPTComponent', () => {
  let component: MathGPTComponent;
  let fixture: ComponentFixture<MathGPTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MathGPTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MathGPTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
