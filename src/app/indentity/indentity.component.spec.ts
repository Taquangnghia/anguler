import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndentityComponent } from './indentity.component';

describe('IndentityComponent', () => {
  let component: IndentityComponent;
  let fixture: ComponentFixture<IndentityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndentityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
