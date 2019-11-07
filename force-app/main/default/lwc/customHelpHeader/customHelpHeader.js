import { LightningElement } from 'lwc';

export default class CustomHelpHeader extends LightningElement {

  goHome() {
    window.location = 'https://infiniteworks-developer-edition.na132.force.com/InfSupport';
  }
}