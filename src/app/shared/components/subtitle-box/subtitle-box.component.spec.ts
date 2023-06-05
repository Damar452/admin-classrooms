import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtitleBoxComponent } from './subtitle-box.component';

describe('SubtitleBoxComponent', () => {
  let component: SubtitleBoxComponent;
  let fixture: ComponentFixture<SubtitleBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubtitleBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubtitleBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
