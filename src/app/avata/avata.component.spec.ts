import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvataComponent } from './avata.component';

describe('AvataComponent', () => {
  let component: AvataComponent;
  let fixture: ComponentFixture<AvataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
