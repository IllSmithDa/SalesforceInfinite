import { LightningElement, track } from 'lwc';

export default class EnphaseSearch extends LightningElement {
  @track searchTerm = '';
  handleSearchTerm(event) {
      this.searchTerm = event.target.value;
  }
  handleKeyUp(event) {
    const isEnterKey = event.keyCode === 13;
    if (this.searchTerm.length > 0 && isEnterKey) {
      window.location = 'https://infiniteworks-developer-edition.na132.force.com/enphasedemo/s/global-search/' + this.searchTerm;
    }
  }
}