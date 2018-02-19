({
    validatedate : function(component,event,valDate) {
        if(valDate == null)return false;
        var valDateArray = valDate.split('-');  
        if(valDateArray.length ==3){
            var month = '';
            if(valDateArray[1] < 10 && !valDateArray[1].startsWith('0')){
               
                month = '0'+valDateArray[1];
            }
            var day = '';
            if(valDateArray[2] < 10 && !valDateArray[2].startsWith('0')){
                day = '0'+valDateArray[2];
                if(month==""){
                    valDate = valDateArray[0]+'-'+valDateArray[1]+'-'+day;
                }
                else{
                    valDate = valDateArray[0]+'-'+month+'-'+day;
                }
                
            }else{
                if(month==""){
                    valDate = valDateArray[0]+'-'+valDateArray[1]+'-'+valDateArray[2];   
                }
                 if(month!=""){
                    valDate = valDateArray[0]+'-'+month+'-'+valDateArray[2];   
                }
			             
            }
            
        }
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