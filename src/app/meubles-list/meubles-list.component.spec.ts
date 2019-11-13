import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeublesListComponent } from './meubles-list.component';

describe('MeublesListComponent', () => {
  let component: MeublesListComponent;
  let fixture: ComponentFixture<MeublesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeublesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeublesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
