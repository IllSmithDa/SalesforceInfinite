public with sharing class CreateContract {
    
    public static void CreateNewContract(List <Opportunity> opps) {
        System.debug(opps);
        // create empty list of contracts
        List <Contract> contracts = new List <Contract>();
        // iterate each opp and create a contract for each one
        for (Opportunity eachOpp: opps) {
            System.debug('each opp: '+ eachOpp);
            Contract newContract = new Contract(
                Status='Draft',
                StartDate=system.Today(),
                AccountId=eachOpp.AccountId,
                ContractTerm=12
            );
            contracts.add(newContract);
        }
        System.debug(contracts);
        // insert it into dml statement
        insert contracts;
    }
}
