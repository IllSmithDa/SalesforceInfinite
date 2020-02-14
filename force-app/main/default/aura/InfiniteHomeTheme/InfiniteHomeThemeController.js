({
    getUserAgreed : function(component, event, helper) {
        var action = component.get('c.getEnphaseUser');
        var userId = $A.get("$SObjectType.CurrentUser.Id");
        action.setParams({userId});
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                var myUser = response.getReturnValue();
                component.set("v.currentUser", myUser);
                component.set("v.initComplete", true);
            }
            else if(state === "ERROR") {
                component.set("v.errorStatus", true);
            }
        });
        $A.enqueueAction(action);
    },
    updateUserAgree: function(component, event, help) {
        document.getElementById("myModal").style.display = "none";

        var action = component.get('c.updateEnphaseUser');
        var userId = $A.get("$SObjectType.CurrentUser.Id");
        action.setParams({userId});
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                var myUser = response.getReturnValue();
                component.set("v.currentUser", myUser);
            }
            else if(state === "ERROR") {
                component.set("v.errorStatus", true);
            }
        });
        $A.enqueueAction(action);
    },
    closeErrorModal: function() {
        document.getElementById("myErrorModal").style.display = "none";
    },
    logoutUser: function() {
        window.location = 'https://infiniteworks-developer-edition.na132.force.com/enphasedemo/s/';
    }
})
