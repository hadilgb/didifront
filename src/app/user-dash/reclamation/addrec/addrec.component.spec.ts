import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrecComponent } from './addrec.component';

describe('AddrecComponent', () => {
  let component: AddrecComponent;
  let fixture: ComponentFixture<AddrecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddrecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddrecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
