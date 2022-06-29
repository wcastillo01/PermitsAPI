import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPermitComponent } from './add-permit.component';

describe('AddPermitComponent', () => {
  let component: AddPermitComponent;
  let fixture: ComponentFixture<AddPermitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPermitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
