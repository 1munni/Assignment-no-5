const cardButton= document.querySelectorAll('.btn')

for(let i=0; i<cardButton.length; i++){
const completedButton= cardButton[i];
completedButton.addEventListener('click',function(event){
    alert('Board Updated Successfully');
    // completedButton.style.display = 'invisible'; 
    completedButton.classList.remove('btn-primary');
    completedButton.classList.add('text-gray-200');
// assignnumber part
const assignNumber = document.getElementById("assign-number1").innerText;
const convertedAssignNumber=parseInt(assignNumber);
document.getElementById("assign-number1").innerText=
convertedAssignNumber-1;

const assignNumber2 = document.getElementById("assign-number2").innerText;
const convertedAssignNumber2=parseInt(assignNumber2);
document.getElementById("assign-number2").innerText=
convertedAssignNumber2+1;


})
}