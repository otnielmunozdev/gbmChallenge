import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  @Input() title: string = '';
  @Input() message: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
