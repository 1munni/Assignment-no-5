const cardButton= document.querySelectorAll('.btn-primary')

for(let i=0; i<cardButton.length; i++){
const completedButton= cardButton[i];
completedButton.addEventListener('click',function(event){
    event.preventDefault();
    alert('Board Updated Successfully');
 
    completedButton.classList.remove('btn-primary');
    completedButton.classList.add('btn-disabled');

// assignnumber part
const assignNumber = document.getElementById("assign-number1").innerText;
const convertedAssignNumber=parseInt(assignNumber);
document.getElementById("assign-number1").innerText=
convertedAssignNumber-1;

const assignNumber2 = document.getElementById("assign-number2").innerText;
const convertedAssignNumber2=parseInt(assignNumber2);
document.getElementById("assign-number2").innerText=
convertedAssignNumber2+1;

// transaction-section
const container=document.getElementById('transection-container')
const div =document.createElement('div');

div.innerHTML=`
<p class="bg-slate-100 rounded-xl p-3 m-1" >You have Complete The Task Add Dark Mode at 12:48:15 PM
</p>
`
container.appendChild(div)

})
}
// clear-history
document.getElementById('clear-history')
.addEventListener('click', function(){
    document.getElementById("transection-container").innerText = "";
    
})

// discover-click
document.getElementById('discover')
.addEventListener('click',function(){
    window.location.href="../faq.html"
})

// back-to-desk
document.getElementById('deskBack')
.addEventListener('click',function(){
    window.location.href="../index.html"
   
})


