function upadateCaseNumber(product, price, isIncreasing){
    const MaskaraInput = document.getElementById(product + '-number');
    let MaskaraNumber = MaskaraInput.value;
            if(isIncreasing){
                MaskaraNumber = parseInt(MaskaraNumber) + 1;
            }
            
    else if(MaskaraNumber > 0){
           MaskaraNumber = parseInt(MaskaraNumber) - 1;
         }
        
        MaskaraInput.value = MaskaraNumber;
    // update Maskara total 
    const MaskaraTotal = document.getElementById(product + '-total');
    MaskaraTotal.innerText = MaskaraNumber * price;
    calculateTotal();
    }


    function getInputvalue(product){
        const productInput = document.getElementById(product + '-number');
        const productNumber = parseInt(productInput.value);
        return productNumber;
    }
    function calculateTotal(){
        const LipcreamTotal = getInputvalue('Lipcream') *132000;
        const MaskaraTotal = getInputvalue('Maskara') * 103000;
        const subTotal = LipcreamTotal + MaskaraTotal;
        const tax = subTotal / 12;
        const totalPrice = subTotal + tax;

        // update on the html 
        document.getElementById('sub-total').innerText = subTotal;
        document.getElementById('tax-amount').innerText = tax;
        document.getElementById('total-price').innerText = totalPrice;

    }





document.getElementById('Maskara-plus').addEventListener('click',function(){
        // const MaskaraInput = document.getElementById('Maskara-number');
        // const MaskaraNumber = MaskaraInput.value;
        // MaskaraInput.value = parseInt(caseNumber) + 1;
   upadateCaseNumber('Maskara', 103000 ,true);
});

document.getElementById('Maskara-minus').addEventListener('click',function(){
    // const MaskaraInput = document.getElementById('Maskara-number');
//     const MaskaraNumber = MaskaraInput.value;
//    if(MaskaraInput.value > 1){
//         MaskaraInput.value = parseInt(MaskaraNumber) - 1;
//    }
upadateCaseNumber('Maskara', 103000, false);
});

// phone prcie update using add event linstner 
document.getElementById('Lipcream-plus').addEventListener('click',function(){
    upadateCaseNumber('Lipcream',132000, true);
});


document.getElementById('Lipcream-minus').addEventListener('click',function(){
    upadateCaseNumber('Lipcream',132000, false);
});