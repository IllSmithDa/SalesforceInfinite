public with sharing class KnowledgeControllers {
    @AuraEnabled(cacheable=true)
    public static Knowledge__kav[] getConsoleArticles(String type){

        if (type == 'game-console-help') {
            return [SELECT Id, Category__c, Title, Answer__c FROM Knowledge__kav WHERE Category__C = 'Console'];
        } else if (type == 'vr-help') {
            return [SELECT Id, Category__c, Title, Answer__c FROM Knowledge__kav WHERE Category__C = 'Vr'];
        } else if (type == 'software-help') {
            return [SELECT Id, Category__c, Title, Answer__c FROM Knowledge__kav WHERE Category__C = 'Software'];
        } else if (type == 'event-help') {
            return [SELECT Id, Category__c, Title, Answer__c FROM Knowledge__kav WHERE Category__C = 'Event'];
        } else if (type == 'document-help') {
            return [SELECT Id, Category__c, Title, Answer__c FROM Knowledge__kav WHERE Category__C = 'Documentation'];
        } else if (type == 'billing-page') {
            return [SELECT Id, Category__c, Title, Answer__c FROM Knowledge__kav WHERE Category__C = 'MBills'];
        }else {
            return [SELECT Id, Category__c, Title, Answer__c FROM Knowledge__kav WHERE Category__C = 'Other'];
        }
    }
}
