document.getElementById('cash-out-button').addEventListener('click', function(event){
    event.preventDefault();
    const cashOutMoney = document.getElementById('amount-id-cashout').value;
    const pinNUmber = document.getElementById('cash-out-pin').value;

    if(pinNUmber==='1234'){
        console.log('Cash Out ');
        const balance = document.getElementById('main-balance').innerText;
        console.log(balance)
        const  cashOut = parseFloat(cashOutMoney);
        const balanceNumber = parseFloat(balance);
        const newBalance =  balanceNumber - cashOut;
        console.log(newBalance);
        document.getElementById('main-balance').innerText =newBalance;
    }
    else{
       alert('Worng Pin');
    }
    
    })