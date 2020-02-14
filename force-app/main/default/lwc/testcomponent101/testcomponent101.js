import { LightningElement, track } from 'lwc';
import template1 from "'c/template1/template1.html';"
import template2 from '../template2/template2.html';
export default class Testcomponent101 extends LightningElement {
  @track array = [
    {
      id: 1,
      type: "green"
    },
    {
      id: 2,
      type: "red"
    },
    {
      id: 3,
      type: "green"
    },
    {
      id: 4,
      type: "red"
    }
  ];
  @track areDetailsVisible = false;
  render() {
    return template1;
  }
  areDetailsVisible() {
    return false;
  }
}