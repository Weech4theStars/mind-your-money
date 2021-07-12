function handleClick(){

    const amount = document.getElementById("amount").value
    const percentage = document.getElementById("percentage").value
    const numberOfPeople = document.getElementById("number").value
    document.getElementById("amount").value = ""
    document.getElementById("percentage").value = ""
    document.getElementById("number").value = ""
    const amountPerPerson = amount*(1+percentage/100) / numberOfPeople

    const ele = document.getElementById("displayAmount")
    const node = document.createElement("p")
    node.style="text-align:center"
    node.innerHTML = "After splitting, everyone should pay " + amountPerPerson+"$!"
    ele.appendChild(node)

}





const amountMap = {};
let numberOfFields = 0;
let tip = 0;
let total = 0;
let tax = 0;
function updateTotalAmount() {
    total = 0
    const amountArea = document.getElementById('amount')
	for (const key in amountMap) {
  	total += amountMap[key];	
  }
  
  total = total + ((tip/100) * total);
  console.log(amountMap, total)

}

function handleInput(e) {
	if (e.target.name.startsWith('name_')) {
 		// Do nothing
  } else if (e.target.name.startsWith('amount_')) {
    amountMap[e.target.name.slice(7)] = Number(e.target.value);
  }
  
  updateTotalAmount();
}

function handleButtonClick() {
  const form = document.getElementById('form');
  const container = document.createElement('div');
  
  const nameInput = document.createElement('input');
  nameInput.setAttribute('name', `name_${numberOfFields}`);
  nameInput.setAttribute('placeholder', 'Enter a name');
  nameInput.addEventListener('input', handleInput);
  const amountInput = document.createElement('input');
  amountInput.setAttribute('name', `amount_${numberOfFields}`);
  amountInput.setAttribute('placeholder', 'Enter an amount');
  amountInput.addEventListener('input', handleInput);
  
  container.appendChild(nameInput);
  container.appendChild(amountInput);
  
  form.appendChild(container);
  numberOfFields++;
}

function updateTip() {
  const ele = document.getElementById("tip")
  tip = ele.value
  updateTotalAmount();
}


function calculateAmount(){
    const amountArea = document.getElementById('amount2')
    amountArea.innerText = `$${total / numberOfFields} per person`
}

