const cardButton= document.querySelectorAll('.btn-primary')

let clickCount = 0;
for(let i=0; i<cardButton.length; i++){
const completedButton= cardButton[i];
completedButton.addEventListener('click',function(event){
    event.preventDefault();
    alert('Board Updated Successfully');

    clickCount++;
  if(clickCount===cardButton.length){
    alert('congratulation you have completed all the task')
  }
  
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
    window.location.href="/Assignment-no-5/faq.html"
})
 
// date function
document.getElementById('date')
.addEventListener('click',function() {
    const now = new Date();
    const formattedDate = now.toLocaleDateString();
    document.getElementById("date").textContent = "Current Date: " + formattedDate;
})


// color-function
document.getElementById('changeColor')
.addEventListener('click',function(){
    let colors = ["red","gray", "blue", "green","teal", "purple", "yellow","tomato", "orange", "pink"];
    let randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
})


