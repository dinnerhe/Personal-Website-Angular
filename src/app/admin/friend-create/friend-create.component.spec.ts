import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendCreateComponent } from './friend-create.component';

describe('FriendCreateComponent', () => {
  let component: FriendCreateComponent;
  let fixture: ComponentFixture<FriendCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FriendCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
