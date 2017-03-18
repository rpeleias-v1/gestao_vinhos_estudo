import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesVinhosComponent } from './detalhes-vinhos.component';

describe('DetalhesVinhosComponent', () => {
  let component: DetalhesVinhosComponent;
  let fixture: ComponentFixture<DetalhesVinhosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesVinhosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesVinhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
