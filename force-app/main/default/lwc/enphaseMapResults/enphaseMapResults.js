import { LightningElement, track } from 'lwc';
import findInstallers from '@salesforce/apex/EnphaseInstallers.findInstallers';
export default class EnphaseMapResults extends LightningElement {
  @track zipCode;
  @track zipCodeString;
  @track error;
  @track mapMarkers = [{
    location: {
      City: 'Fremont',
      Street:'39150 Sundale Dr. Apt 56',
      State:'California',
      Country: 'United States',
      PostalCode : '94538',
    },
    icon: 'custom:custom1',
    title: 'Home'
  }];
  @track markersTitle = 'Installer Locations';

  handleSearchTerm(event) {
    console.log('asdf')
   // console.log(event.target.value);
    this.zipCode = event.target.value;
   // console.log(this.zipCode);
  }

  getInstallers() {
    console.log(this.zipCode);

    this.zipCodeString = this.zipCode.toString();
    findInstallers({zipcode: '$zipCodeString'}) 
      .then(result => {
        console.log(this.zipCode);
        console.log('hello');
        console.log(result);
        this.mapMarkers = result;
      })
      .catch(error => {
        this.error = error;
      });
  }
}