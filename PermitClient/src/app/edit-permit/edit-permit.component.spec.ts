import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPermitComponent } from './edit-permit.component';

describe('EditPermitComponent', () => {
  let component: EditPermitComponent;
  let fixture: ComponentFixture<EditPermitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPermitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
