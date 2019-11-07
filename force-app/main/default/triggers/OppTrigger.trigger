trigger OppTrigger on Opportunity (after insert, after update) {
  
  // empty opp list
  List <Opportunity> myOpps = new List <Opportunity>();
  
  // evaluate if each opp that is being inserted or updated is closed won
  for(Opportunity opp : Trigger.new) {
    if (opp.StageName == 'Closed Won') {
      // add any opp to list if they are closed won
      myOpps.add(opp);
    }
  }
  System.debug(myOpps);
  // call the apex function with opp list as parameter
  CreateContract.CreateNewContract(myOpps);

}