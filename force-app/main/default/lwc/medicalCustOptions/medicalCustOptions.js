import { LightningElement } from 'lwc';

export default class MedicalCustOptions extends LightningElement {
  planPage() {
    window.location = 'medical-plans';
  }
  carePage() {
    window.location = 'get-care';
  }
  mapPage() {
    window.location = 'map-page';
  }
  billingPage() {
    window.location = 'billing-page';
  }
  formsPage() {
    window.location = 'common-forms';
  }
  wellnessPage() {
    window.location = 'wellness';
  }

}