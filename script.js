

main('fMinusBtn','firstValue', -1 , 'firstAmount', -1219);
main('fPlusBtn','firstValue', 1 , 'firstAmount', 1219);
main('sMinusBtn','secondValue', -1 , 'secondAmount', -59);
main('sPlusBtn','secondValue', 1 , 'secondAmount', 59);


function main (btnId,valueId , valuePlusOrMinus, amountId, amount){
    const sMinusBtn= document.getElementById(btnId);
     sMinusBtn.addEventListener('click', function(){
    value(valueId, valuePlusOrMinus);    
    plusAmount(amountId, amount);
    plusAmount('subtotal', amount);
    tax ('tax');
     var subTotal= innerToFloat ('subtotal');   
     var sumTax= innerToFloat('tax');
    document.getElementById('total').innerText= subTotal+sumTax; 
})}

function value(id, plusOrMinus){
    const value= document.getElementById(id).value;
    const valueFloat= parseFloat(value);
    const newValue= valueFloat+plusOrMinus;
     document.getElementById(id).value=newValue;
}

function plusAmount(id,passAmount,){
    var amountFloat= innerToFloat(id);
    const newAmount= amountFloat+ passAmount;
    document.getElementById(id).innerText=newAmount;
}

function tax (id){
    const subT=document.getElementById('subtotal').innerText;
   const subTFloat =parseFloat(subT);
    const mainTax= (subTFloat*12)/100;
    const finalTax= Math.round(mainTax)
    document.getElementById(id).innerText=finalTax;
}

function innerToFloat(id){
        const firstAmount= document.getElementById(id).innerText;
        const firstAmountFloat=parseFloat(firstAmount);
        return firstAmountFloat;
}