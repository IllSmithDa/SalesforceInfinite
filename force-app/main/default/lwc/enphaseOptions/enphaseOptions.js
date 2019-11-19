import { LightningElement } from 'lwc';

export default class EnphaseOptions extends LightningElement {
  overviewPage() {
    window.location = 'overview-page';
  }
  systemPage() {
    window.location = 'system-page';
  }
  enlightenPage() {
    window.location = 'enlighten-page';
  }
  troublePage() {
    window.location = 'trouble-page';
  }
  productsPage() {
    window.location = 'products-page';
  }
  mapPage() {
    window.location = 'map-page';
  }

}