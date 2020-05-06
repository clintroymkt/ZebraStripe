function myFunction(){
    var trElements = document.getElementsByTagName('tr');
    
    var btnZebra = document.getElementById('btnZebra');
    var btnZebra2 = document.getElementById('btnZebra2');
    for (var i = 0; i < trElements.length; i++) {
        if (i == 0) {
            
        }
        else if (i % 2 !== 0) {
            
        }
       else {
           
            trElements[i].style.background = 'black';
            trElements[i].style.color = 'white';
            
            
            btnZebra.style.visibility = 'hidden';
            btnZebra2.style.visibility = 'visible';
        }                 
    }          
}

function myFunction2(){
    var trElements = document.getElementsByTagName('tr');
    
    var btnZebra = document.getElementById('btnZebra');
    var btnZebra2 = document.getElementById('btnZebra2');
    for (var i = 0; i < trElements.length; i++) {
        if (i == 0) {
            
        }
        else if (i % 2 !== 0) {
            
        }
       else {
           
            trElements[i].style.background = 'white';
            trElements[i].style.color = 'black';
            //Remove cancel button and Display cancle zebra
            btnZebra.style.visibility = 'visible';
            btnZebra2.style.visibility = 'hidden';
        }                 
    }            
}