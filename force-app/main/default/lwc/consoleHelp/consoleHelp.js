import { LightningElement, track, wire} from 'lwc';
import getConsoleArticles from '@salesforce/apex/KnowledgeControllers.getConsoleArticles';
export default class ConsoleHelp extends LightningElement {
  @track getId = window.location.href.split('/').pop();
  @track articleList = [{
    Id:'',
    Answer__c: '',
    Titie: '',
    Category__c:'',
  }];
  @track articleTitle = "Select a Article";
  @track articleContent =  new DOMParser().parseFromString("<p></p>", "text/html").getElementsByTagName("p");
  @wire(getConsoleArticles, {type: '$getId'})
  wiredListView({data, error}) {
    if (data) {
      this.articleList = data;
      this.articleTitle = this.articleList[0].Title;
      this.articleContent = new DOMParser().parseFromString(this.articleList[0].Answer__c, "text/html").getElementsByTagName("body");
      
    } 
    if (error) {
      this.error = error;
    }
  }

  setArticle(event) {
    const articleId = event.target.value;
    for (let i = 0; i < this.articleList.length; i++) {
      if (articleId === this.articleList[i].Id) {
        this.articleTitle = this.articleList[i].Title;
        this.articleContent = new DOMParser().parseFromString(this.articleList[i].Answer__c, "text/html").getElementsByTagName("body");
      }
    } 
  }
}