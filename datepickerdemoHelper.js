({
    validatedate : function(component,event,valDate) {
        var regEx = /^\d{4}-\d{2}-\d{2}$/;
        if(!valDate.match(regEx)){
            component.find('oDate').set('v.value', 'Date is invalid');
            return false;
        }
        else{
            var d = new Date(valDate);
            component.find('oDate').set('v.value', 'Date is Valid');
            return d.toISOString().slice(0,10) === valDate;
        }        
    }
})