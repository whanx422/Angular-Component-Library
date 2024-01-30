import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingPageNoRecordComponent } from './listing-page-no-record.component';

describe('ListingPageNoRecordComponent', () => {
  let component: ListingPageNoRecordComponent;
  let fixture: ComponentFixture<ListingPageNoRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListingPageNoRecordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListingPageNoRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
