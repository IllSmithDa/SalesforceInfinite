import { LightningElement } from 'lwc';

export default class MedicalHelpHeader extends LightningElement {
  goHome() {
    window.location = 'https://infiniteworks-developer-edition.na132.force.com/helpcare';
  }
  /*
  connectedCallback() {
    
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("head-tab").style.display = "none";
      } else {
        document.getElementById("head-tab").style.display = "block";
      }
  }
  */
}