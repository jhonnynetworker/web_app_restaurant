function loginData(){
    let fname= document.getElementById('fname');
    let lname= document.getElementById('lname');
    let email= document.getElementById('email');
    let password= document.getElementById('password');
}

const loginTrigger =(loginFunction) => {
    const login = document.querySelector('.login')
    login.classList.contains('hide') == true ? login.classList.remove('hide'): login.classList.add('hide')
} 

/* This is the code that builds dynamically and automatically 
the creation of plates for the HTML*/
  
const loadPlates = (plates, parentDivId) => 
{
    const parentDiv = document.querySelector(parentDivId);
    plates.forEach(plate => 
        {
        const html =`
        <article class="plate">
        <img src="${plate.img}" heigth="600" alt="${plate.name}">
        <h4>${plate.Name}</h4>
        <h4>${plate.Day}</h4>
        <h4>${plate.Type}</h4>
        <h4>${plate.Price} €</h4>
        <button type="button" onclick="modalTrigger()">Adicionar</button>
        </article>
        `
        parentDiv.insertAdjacentHTML('beforeend', html);
        }
    )
}
loadPlates(plates, '#product-div')

/*const modalTrigger =() => {
    const modal = document.querySelector('.modal')
    if (modal.classList.contains('hide')){
        modal.classList.remove('hide')
    }
    else {
        modal.classList.add('hide')
    }
}*/
const modalTrigger =(plateID) => {
    const modal = document.querySelector('.modal')
    modal.classList.contains('hide') == true ? modal.classList.remove('hide'): modal.classList.add('hide')
} 
