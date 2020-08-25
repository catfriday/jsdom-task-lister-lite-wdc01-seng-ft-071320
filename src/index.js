

document.addEventListener("DOMContentLoaded", () => {
 let form = document.querySelector('#create-task-form')
 let ul = document.querySelector('#tasks')
 let dropDown = document.createElement('select')
 dropDown.innerHTML = `
 <label class="priority">Priority</label>
  <select name="colors" id="colors">
    <option value="red" style="color:red;">Red:High</option>
    <option value="yellow">Yellow:Med</option>
    <option value="green">Green:Low</option>
    `
    
    form.appendChild(dropDown)
    
 
 form.addEventListener('submit', (e) => {
   e.preventDefault()
   let select= document.querySelector('select')
   let li = document.createElement('li')
   console.log(li)
   li.innerText = e.target[0].value
   let deleteButton = document.createElement('button')
    deleteButton.innerText = 'x'
    deleteButton.id = 'delBut'
   li.appendChild(deleteButton)
   ul.appendChild(li)

  switch(select.value){
    case 'red':
      li.style = "color:red;"
      break
    
    case 'yellow':
      li.style = "color:yellow;"
      break
    
      case 'green':
        li.style = "color:green;"
        break
  }   


   form.reset()
   delButton(deleteButton)
 })

function delButton(deleteButton){
 deleteButton.addEventListener('click', (e) =>{
   let delLi = document.querySelector('li')
   delLi.remove()
   console.log(delLi)
 })
}





});
