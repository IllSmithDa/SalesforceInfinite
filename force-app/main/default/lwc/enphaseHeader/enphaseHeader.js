import { LightningElement } from 'lwc';

export default class EnphaseHeader extends LightningElement {
  goHome() {
    window.location = 'https://infiniteworks-developer-edition.na132.force.com/enphasedemo';
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