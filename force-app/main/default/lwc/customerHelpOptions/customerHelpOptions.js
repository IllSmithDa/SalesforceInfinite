import { LightningElement } from 'lwc';

export default class CustomerHelpOptions extends LightningElement {
  consolePage() {
    window.location = 'game-console-help';
  }
  vrPage() {
    window.location = 'vr-help';
  }
  softwarePage() {
    window.location = 'software-help';
  }
  eventPage() {
    window.location = 'event-help';
  }
  documentPage() {
    window.location = 'document-help';
  }
  otherPage() {
    window.location = 'other-help';
  }
}