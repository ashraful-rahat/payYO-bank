document.getElementById('login-id').addEventListener('click',function(event){
event.preventDefault();
const phoneNumber = document.getElementById('phone-number').value;

const pinNumber =document.getElementById('Pin-number').value;
console.log(phoneNumber, pinNumber);
 
 if( phoneNumber==='5' && pinNumber==='1234'){
    console.log('Login ');
      window.location.href ='/Home.html'
}
 else{
    alert('wrong number');
 }
})