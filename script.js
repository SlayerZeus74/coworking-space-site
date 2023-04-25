const chatBoxClick = document.getElementById("chatbox-click")
const modal = document.getElementById("modal")
const modalCloseBtn = document.getElementById("modal-close-btn")
const consentForm = document.getElementById('consent-form')
const modalText = document.getElementById('modal-text')
const declineBtn = document.getElementById('decline-btn')
const modalChoiceBtns = document.getElementById('modal-choice-btns')

const locations = [
    {
        img: "images/hygge.jpg",
        paragraph: "Skiving in Scandinavia? Relax with a latte at Hygge"
    },
    {
        img: "images/sky-garden.jpg",
        paragraph: "Bored in Barcelona? Take a siesta at the Sky Garden."
    },
        {
            img: "images/generator.jpg",
            paragraph: "Relaxing in Rio? Take some downtime at the Generator Hub."
    }
]


const locationsEl = document.getElementById("location")


for(let i = 0; i<locations.length; i++){
    locationsEl.innerHTML += `
			<section class="item" id="location">
				<img src="${locations[i].img}" alt="location" class="item-img">
				<div class="img-banner">
					Exclusive
				</div>
				<div class="caption">
					<p>${locations[i].paragraph}</p>
					<button>BOOK</button>

				</div>
			</section>`
}


// chatBoxClick.addEventListener('click', ()=>{
//     modal.style.display = 'inline'
// })

setTimeout(function(){
    modal.style.display = 'inline'
}, 1500)




modalCloseBtn.addEventListener("click", ()=>{
    modal.style.display = "none"
})

declineBtn.addEventListener('mouseenter', function(){
    modalChoiceBtns.classList.toggle('modal-choice-btns-reverse')
})


consentForm.addEventListener('submit', function(e){

    e.preventDefault()

      
    const consentFromData = new FormData(consentForm)
    const name = consentFromData.get('Name')


    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/Spinner-1s-70px.svg" class="loading">
        <p id="uploadText">
            Uploading your data to the dark web...
        </p>
    </div>`
    setTimeout(function(){
        document.getElementById('uploadText').innerText = `making the sale`
    }, 1500) 

    setTimeout(function(){
        document.getElementById('modal-inner').innerHTML =`
        <h2>Thanks <span class="modal-display-name">${name} </span> you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="done-png">
        <img src="images/done-2.png">
        </div>
        `
        modalCloseBtn.disabled = false
    }, 3000)
 
})


