import { LightningElement, track } from 'lwc';

export default class CustomerHelpInf extends LightningElement {
  @track searchTerm = '';
  handleSearchTerm(event) {
      this.searchTerm = event.target.value;
  }
  handleKeyUp(event) {
    const isEnterKey = event.keyCode === 13;
    if (this.searchTerm.length > 0 && isEnterKey) {
      window.location = 'https://infiniteworks-developer-edition.na132.force.com/InfSupport/s/global-search/' + this.searchTerm;
    }
  }
}