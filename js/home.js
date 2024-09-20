document.getElementById('add-money-button').addEventListener('click', function(event){
event.preventDefault();
const addMoney = document.getElementById('amount-id').value;
const pinNUmber = document.getElementById('add-money-pin').value;
// console.log(addMoney , pinNUmber)
if(pinNUmber==='1234'){
    console.log('Add Money ');
    const balance = document.getElementById('main-balance').innerText;
    console.log(balance)
    const addMoneyNumber = parseFloat(addMoney);
    const balanceNumber = parseFloat(balance);
    const newBalance = addMoneyNumber +balanceNumber;
    console.log(newBalance);
    document.getElementById('main-balance').innerText =newBalance;
}
else{
   alert('Worng Pin');
}

})