import { LightningElement, track } from 'lwc';

export default class HistoryTracking extends LightningElement {
  moveRight() {
    this.template.querySelector('.scrolling-wrapper').scrollLeft  += 200;
  }
  moveLeft() {
    this.template.querySelector(".scrolling-wrapper").scrollLeft -= 200;
  }
}