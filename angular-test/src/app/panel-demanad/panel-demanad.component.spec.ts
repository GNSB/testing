import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelDemanadComponent } from './panel-demanad.component';

describe('PanelDemanadComponent', () => {
  let component: PanelDemanadComponent;
  let fixture: ComponentFixture<PanelDemanadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelDemanadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelDemanadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
