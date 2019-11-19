import { LightningElement, api} from 'lwc';

export default class HelpDesignComp extends LightningElement {
  @api buttonVal1;
  @api buttonVal2;
  @api buttonVal3; 
  @api buttonVal4;
  @api title;
}