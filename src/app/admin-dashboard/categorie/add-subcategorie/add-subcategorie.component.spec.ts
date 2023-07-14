import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubcategorieComponent } from './add-subcategorie.component';

describe('AddSubcategorieComponent', () => {
  let component: AddSubcategorieComponent;
  let fixture: ComponentFixture<AddSubcategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSubcategorieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSubcategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
