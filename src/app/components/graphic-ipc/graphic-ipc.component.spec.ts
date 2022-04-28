import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicIPCComponent } from './graphic-ipc.component';

describe('GraphicIPCComponent', () => {
  let component: GraphicIPCComponent;
  let fixture: ComponentFixture<GraphicIPCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicIPCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicIPCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
