public with sharing class EnphaseInstallers {
    @AuraEnabled(cacheable=true)
    public static Account[] findInstallers(String zipCode) {
        System.debug('hello');
        System.debug(zipCode);
        return [SELECT Name, BillingStreet, BillingCity, BillingState, BillingPostalCode,
       BillingCountry, BillingLatitude, BillingLongitude
        FROM Account WHERE BillingPostalCode =:zipCode AND Type = 'Enphase'];
    }
}
