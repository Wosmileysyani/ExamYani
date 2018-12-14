import { Injectable } from '@angular/core';

declare const $: any;

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  notify(message: string, type: string) {
    $.notify({
      title: '<strong>แจ้งเตือน</strong>',
      message: message,
    }, {
        type: type,
        allow_dismiss: false,
        placement: {
          from: 'top',
          align: 'center'
        }
      });
  }
}
