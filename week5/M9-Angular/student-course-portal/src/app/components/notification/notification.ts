import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../services/notification';

@Component({
  selector: 'app-notification',
  imports: [CommonModule],
  templateUrl: './notification.html',
  styleUrl: './notification.css',
  // providers: [NotificationService] creates a NEW, isolated instance of
  // NotificationService scoped to this component (and its children), separate
  // from any root-level instance elsewhere in the app. Useful when each
  // instance of a component needs its own private state.
  providers: [NotificationService],
})
export class Notification {
  constructor(public notificationService: NotificationService) {}

  add(msg: string) {
    this.notificationService.add(msg);
  }
}
