import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenSvComponent } from './ten-sv.component';

describe('TenSvComponent', () => {
  let component: TenSvComponent;
  let fixture: ComponentFixture<TenSvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenSvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenSvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
