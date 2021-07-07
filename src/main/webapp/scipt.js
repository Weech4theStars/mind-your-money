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

function addNumberOfPeople(){
    const number = document.getElementById("numberOfPeople").value
    document.getElementById("numberOfPeople").value = ""
    console.log(number)
    const ele = document.getElementById("list")
    for(let i = 0; i < number; i++){
        const list = document.createElement("li")
        const div = document.createElement("div")
        const inputEle = document.createElement("input")
        inputEle.setAttribute("type", "text")
        inputEle.setAttribute("id", "amount1")
        const node = document.createTextNode("Enter person " + i + "'s amount: ")
        div.appendChild(node)
        div.appendChild(inputEle)
        list.appendChild(div)
        ele.appendChild(list)

    }
}

function calculateAmount(){
    const amount = document.form
    console.log(amount)
}

function addPerson(){
    const listElement = document.getElementById("people")
    const li = document.createElement("li")
    const form = document.createElement("form")
    const inputEle = document.createElement("input")
    inputEle.setAttribute("type", "text")
    inputEle.setAttribute("id", "name")
    inputEle.setAttribute("placeholder", "Enter your name:")
    const inputEle2 = document.createElement("input")
    inputEle2.setAttribute("type", "text")
    inputEle2.setAttribute("id", "amount")
    inputEle2.setAttribute("placeholder", "Enter the amount you spend:")
    form.appendChild(inputEle)
    form.appendChild(inputEle2)
    li.appendChild(form)
    listElement.appendChild(li)
}