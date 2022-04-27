import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableIPCComponent } from './table-ipc.component';

describe('TableIPCComponent', () => {
  let component: TableIPCComponent;
  let fixture: ComponentFixture<TableIPCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableIPCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableIPCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
