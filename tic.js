 function  signX(val){
     
      var ty = "X";
     areaone.value =  ty;
     var ty = "y";
     areatwo.value = ty;
    
 }
function final() {
    var areaAll = areaone.value && areatwo.value && areathree.value || areafour.value && areafive.value && areasix.value 
    || areaseven.value && areaeigth.value && areanine ;
    var areaDraw = areaone.value || areatwo.value || areathree.value || areafour.value || areafive.value || areasix.value 
    || areaseven.value || areaeigth.value || areanine ;
    if (areaone.value && areatwo.value && areathree.value =="X"){
        asignToX.innerText="Player-1: WON..!!!";
        asignToO.innerText="Player-2: LOSS ~~";
        score.innerText= 1;
        areafour.disabled= true;
        areafive.disabled= true;
        areasix.disabled= true;
        areaseven.disabled= true;
        areaeigth.disabled= true;
        areanine.disabled= true;
    
    }else if(areafour.value && areafive.value && areasix.value =="X"){
        asignToX.innerText="Player-1: WON..!!!";
        asignToO.innerText="Player-2: LOSS ~~";
        score.innerText= 2;
        areaone.disabled= true;
        areatwo.disabled= true;
        areathree.disabled=true;
        areaseven.disabled= true;
        areaeigth.disabled= true;
        areanine.disabled= true;
    }else if(areaseven.value && areaeigth.value && areanine.value =="X"){
        asignToX.innerText="Player-1: WON..!!!";
        asignToO.innerText="Player-2: LOSS ~~";
        score.innerText=3;
        areaone.disabled= true;
        areatwo.disabled= true;
        areathree.disabled= true;
        areafour.disabled= true;
        areafive.disabled= true;
        areasix.disabled= true;
       
    } else if (areaone.value && areatwo.value && areathree.value =="O"){
        asignToX.innerText="Player-1: LOSS..~~";
        asignToO.innerText="Player-2: WON !!!";
        score.innerText= 1;
        areafour.disabled= true;
        areafive.disabled= true;
        areasix.disabled= true;
        areaseven.disabled= true;
        areaeigth.disabled= true;
        areanine.disabled= true;
    
    }else if(areafour.value && areafive.value && areasix.value =="O"){
        asignToX.innerText="Player-1: LOSS..~~";
        asignToO.innerText="Player-2: WON !!!";
        score.innerText= 2;
        areaone.disabled= true;
        areatwo.disabled= true;
        areathree.disabled=true;
        areaseven.disabled= true;
        areaeigth.disabled= true;
        areanine.disabled= true;
    }else if(areaseven.value && areaeigth.value && areanine.value =="O"){
        asignToX.innerText="Player-1: LOSS..~~";
        asignToO.innerText="Player-2: WON !!!";
        score.innerText=3;
        areaone.disabled= true;
        areatwo.disabled= true;
        areathree.disabled= true;
        areafour.disabled= true;
        areafive.disabled= true;
        areasix.disabled= true;
       
    } else if (areaone.value && areafour.value && areaseven.value =="X"){
        asignToX.innerText="Player-1: WON..!!!";
        asignToO.innerText="Player-2: LOSS ~~";
        score.innerText= 1;
        areatwo.disabled= true;
        areathree.disabled=true;
        areafive.disabled= true;
        areasix.disabled= true;
        areaeigth.disabled= true;
        areanine.disabled= true;
    
    }else if(areatwo.value && areafive.value && areaeigth.value =="X"){
        asignToX.innerText="Player-1: WON..!!!";
        asignToO.innerText="Player-2: LOSS ~~";
        score.innerText= 2;
        areaone.disabled= true;
        areathree.disabled=true;
        areafour.disabled=true;
        areasix.disabled=true;
        areaseven.disabled= true;
        areanine.disabled= true;
    }else if(areathree.value && areasix.value && areanine.value =="X"){
        asignToX.innerText="Player-1: WON..!!!";
        asignToO.innerText="Player-2: LOSS ~~";
        score.innerText=3;
        areaone.disabled= true;
        areatwo.disabled= true;
        areafour.disabled= true;
        areafive.disabled= true;
        areaseven.disabled=true;
        areaeigth.disabled=true;
        areanine.onkeyenter= "win";
       
    }else if (areaone.value && areafour.value && areaseven.value =="O"){
        asignToX.innerText="Player-1: WON..!!!";
        asignToO.innerText="Player-2: LOSS ~~";
        score.innerText= 1;
        areatwo.disabled= true;
        areathree.disabled=true;
        areafive.disabled= true;
        areasix.disabled= true;
        areaeigth.disabled= true;
        areanine.disabled= true;
    
    }else if(areatwo.value && areafive.value && areaeigth.value =="O"){
        asignToX.innerText="Player-1: WON..!!!";
        asignToO.innerText="Player-2: LOSS ~~";
        score.innerText= 2;
        areaone.disabled= true;
        areathree.disabled=true;
        areafour.disabled=true;
        areasix.disabled=true;
        areaseven.disabled= true;
        areanine.disabled= true;
    }else if(areathree.value && areasix.value && areanine.value =="O"){
        asignToX.innerText="Player-1: WON..!!!";
        asignToO.innerText="Player-2: LOSS ~~";
        score.innerText=3;
        areaone.disabled= true;
        areatwo.disabled= true;
        areafour.disabled= true;
        areafive.disabled= true;
        areaseven.disabled=true;
        areaeigth.disabled=true;
        }else if(areaone.value && areafive.value && areanine.value =="X"){
            asignToX.innerText="Player-1: WON..!!!";
            asignToO.innerText="Player-2: LOSS ~~";
            score.innerText=3;
            areatwo.disabled= true;
            areathree.disabled=true;
            areafour.disabled= true;
            areasix.disabled= true;
            areaseven.disabled=true;
            areaeigth.disabled=true;
            areaeigth.disabled=true;
        }
        else if(areaone.value && areafive.value && areanine.value =="O"){
            asignToX.innerText="Player-1: WON..!!!";
            asignToO.innerText="Player-2: LOSS ~~";
            score.innerText=3;
            areatwo.disabled= true;
            areathree.disabled=true;
            areafour.disabled= true;
            areasix.disabled= true;
            areaseven.disabled=true;
            areaeigth.disabled=true;
            areaeigth.disabled=true;
        }else if(areathree.value && areafive.value && areaseven.value =="X"){
            asignToX.innerText="Player-1: WON..!!!";
            asignToO.innerText="Player-2: LOSS ~~";
            score.innerText=3;
            areaone.disabled=true;
            areatwo.disabled= true;
            areafour.disabled= true;
            areasix.disabled= true;
            areaeigth.disabled=true;
            areaeigth.disabled=true;
            areanine.disabled= true;
        }else if(areathree.value && areafive.value && areaseven.value =="O"){
            asignToX.innerText="Player-1: WON..!!!";
            asignToO.innerText="Player-2: LOSS ~~";
            score.innerText=3;
            areaone.disabled=true;
            areatwo.disabled= true;
            areafour.disabled= true;
            areasix.disabled= true;
            areaeigth.disabled=true;
            areaeigth.disabled=true;
            areanine.disabled= true;
        }
    
   
    
    
}


function  nameofplayer() {
    nameOne.innerText= nameA.value;  
}
function nameofplayers() {
    nameTwo.innerText= nameB.value;   
}



function start() {
    var areaAll = areaone.value && areatwo.value && areathree.value && areafour.value && areafive.value && areasix.value 
    && areaseven.value && areaeigth.value && areanine ;
    if (clickStart.innerText== "START"){
        clickStart.innerText= "END";
        areaone.disabled= false;
        areatwo.disabled= false;
        areathree.disabled= false;
        areafour.disabled= false;
        areafive.disabled= false;
        areasix.disabled= false;
        areaseven.disabled= false;
        areaeigth.disabled= false;
        areanine.disabled= false;
       
    }else{
        clickStart.innerText= "START";
        areaone.disabled= true;
        areatwo.disabled= true;
        areathree.disabled= true;
        areafour.disabled= true;
        areafive.disabled= true;
        areasix.disabled= true;
        areaseven.disabled= true;
        areaeigth.disabled= true;
        areanine.disabled= true;

    }



    if (nameA.value =="" || nameB.value==""){
        asignToX.innerText="Player-1: kindly enter your name!!!";
    asignToO.innerText="Player-2: kindly enter your name!!!";
    }else{
        asignToX.innerText='Player-1: will be using "X"';
        asignToO.innerText='Player-2: will be using "O"';;

        
   
    
    }
   
    
    
}
function rePlay() {
    areaone.value= "";
    areatwo.value= "";
    areathree.value= "";
    areafour.value= "";
    areafive.value= "";
    areasix.value="";
    areaseven.value="";
    areaeigth.value= "";
    areanine.value= "";

    areaone.disabled= false;
    areatwo.disabled= false;
    areathree.disabled= false;
    areafour.disabled= false;
    areafive.disabled= false;
    areasix.disabled= false;
    areaseven.disabled= false;
    areaeigth.disabled= false;
    areanine.disabled= false;
    
    
    
}
 function showSign(e){
     if(e.target.value== "X" ){
        
        
     } else{
      e.target.value="O"

     }
     

 }

alert("ADEDOKUN dhdhd");