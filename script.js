function NotecreationDom(input) {
    const oneNote = document.createElement('div')
    const heading = document.createElement('div')
    const info = document.createElement('div')
    const button = document.createElement('button')

    oneNote.classList.add('oneNote')
    info.classList.add('info')
    button.classList.add('btn2')

    heading.textContent = "Note"
    button.textContent = "view detail"
    info.textContent = input.value.substring(0, 60) + '...';

    oneNote.appendChild(heading)
    oneNote.appendChild(info)
    oneNote.appendChild(button)

    const container = document.getElementById('container')

    container.append(oneNote)

    console.log('inside');


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

const detailsbtn = document.getElementById('btn2')
detailsbtn.addEventListener("click", () => {
    document.body.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';






})