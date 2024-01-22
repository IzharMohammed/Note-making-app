function NotecreationDom(input) {
    const oneNote = document.createElement('div')
    const heading = document.createElement('div')
    const info = document.createElement('div')
    const button = document.createElement('button')

    oneNote.classList.add('oneNote')
    info.classList.add('info')
    button.classList.add('btn2')

  const btnId = 'btn2-' + Date.now();
    button.setAttribute('id', btnId);

    heading.textContent = "Note"
    button.textContent = "view detail"
 const fullinfo = input.value
    info.textContent = input.value.substring(0, 35) + '...';

    oneNote.appendChild(heading)
    oneNote.appendChild(info)
    oneNote.appendChild(button)

    const container = document.getElementById('container')

    container.append(oneNote)






    const detailsbtn = document.getElementById(btnId)
detailsbtn.addEventListener("click", (e)=>{
    e.preventDefault()
 showDetails('Note', fullinfo )
}
)
}
// NotecreationDom()

const savebtn = document.getElementById('btn1')
savebtn.addEventListener("click", () => {
    const input = document.getElementById('input')
    if (input.value == 0) {
        return;
    } else {
        NotecreationDom(input)
    }
    input.value = ''
})

function showDetails(heading,information){
    const info = document.getElementById('content').innerText=information;
    const title = document.getElementById('popup-title').innerText=heading;
    const dispay = document.getElementById('popup').style.display='block'
    const closebtn = document.getElementById('closebtn')
    closebtn.addEventListener('click',()=>{
        document.getElementById('popup').style.display='none'
    })
console.log(information)
}