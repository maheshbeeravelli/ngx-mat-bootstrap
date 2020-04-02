import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLoadingBarComponent } from './page-loading-bar.component';

describe('PageLoadingBarComponent', () => {
  let component: PageLoadingBarComponent;
  let fixture: ComponentFixture<PageLoadingBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageLoadingBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLoadingBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
