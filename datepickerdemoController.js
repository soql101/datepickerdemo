({
    setOutput : function(component, event, helper) {
        var valDate = component.get("v.today");
        helper.validatedate(component,event,valDate);
    }
})