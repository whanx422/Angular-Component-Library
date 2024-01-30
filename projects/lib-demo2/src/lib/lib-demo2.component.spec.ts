import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibDemo2Component } from './lib-demo2.component';

describe('LibDemo2Component', () => {
  let component: LibDemo2Component;
  let fixture: ComponentFixture<LibDemo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibDemo2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibDemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
