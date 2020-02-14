import { LightningElement, track,  } from 'lwc';

export default class MedicalNews extends LightningElement {
  @track mapMarkers = [
    {
        location: {
            City: "Cap-d'Ail",
            Country: 'France',
        },

        icon: 'custom:custom26',
        title: "Cap-d'Ail",
    },
    {
        location: {
            City: 'Beaulieu-sur-Mer',
            Country: 'France',
        },

        icon: 'custom:custom96',
        title: 'Beaulieu-sur-Mer',
    },
    {
        location: {
            City: 'Saint-Jean-Cap-Ferrat',
            Country: 'France',
        },
        icon: 'custom:custom92',
        title: 'Saint-Jean-Cap-Ferrat',
    }
];
@track markersTitle = "Location of Doctors";
  connectedCallback() {

  }
}