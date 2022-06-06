import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeprofiletabComponent } from './homeprofiletab.component';

describe('HomeprofiletabComponent', () => {
  let component: HomeprofiletabComponent;
  let fixture: ComponentFixture<HomeprofiletabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeprofiletabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeprofiletabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
