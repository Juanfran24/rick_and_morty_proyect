import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogyComponent } from './catalogy.component';

describe('CatalogyComponent', () => {
  let component: CatalogyComponent;
  let fixture: ComponentFixture<CatalogyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
