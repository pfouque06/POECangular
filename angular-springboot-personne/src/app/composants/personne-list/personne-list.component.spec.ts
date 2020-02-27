import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonneListComponent } from './personne-list.component';

describe('PersonneListComponent', () => {
  let component: PersonneListComponent;
  let fixture: ComponentFixture<PersonneListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonneListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
