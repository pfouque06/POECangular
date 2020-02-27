import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePersonneComponent } from './create-personne.component';

describe('CreatePersonneComponent', () => {
  let component: CreatePersonneComponent;
  let fixture: ComponentFixture<CreatePersonneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePersonneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePersonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
