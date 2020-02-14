public with sharing class EnphaseUserTestController {
    @AuraEnabled
    public static User getEnphaseUser(String userId) {
        User myUser = [SELECT Agreed_Terms_Date__c, Id FROM User WHERE ID =: userId];
        return myUser;
    }
    @AuraEnabled
    public static User updateEnphaseUser(String userId) {
        User myUser = [SELECT Agreed_Terms_Date__c FROM User WHERE ID =: userId];
        myUser.Agreed_Terms_Date__c = Datetime.now();
        update myUser;  
        return myUser;
    }
}
