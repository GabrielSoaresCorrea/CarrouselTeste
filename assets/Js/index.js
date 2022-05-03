function createImg(src, alt, position){
    return {
        src,
        alt,
        position
    }
}

function showImg(img){
    const imgHtml = document.querySelector('img')
    imgHtml.src = img.src
    imgHtml.alt = img.alt
}

const img1 = createImg('assets/Img/dariuslindo.jpg', 
                        'Darius segurando uma flor escrito Lindo', 0)
const img2 = createImg('assets/Img/enaconfused.jpg', 
                        'Personagem geométrica metade azul e amarela de Joel g', 1)
const img3 = createImg('assets/Img/pieckfinger.png', 
                        'Mulher branca de cabelo bagunçado Pieck Finger', 2)

const allImages = [img1, img2, img3]

//set initial index to change de img correctly
let ind = 0

//buttons 
const btnPrev = document.querySelector('.btn-prev')
const btnNext = document.querySelector('.btn-next')

btnPrev.addEventListener('click', () => {
    ind--
    if(ind < 0){
        ind = allImages.length - 1
        let actualImg = allImages[ind]
        showImg(actualImg)
    } else {
        let actualImg = allImages[ind]
        showImg(actualImg)
    }
})

btnNext.addEventListener('click', () => {
    ind++
    if(!(ind >= allImages.length)){
        let actualImg = allImages[ind]
        showImg(actualImg)
    } else {
        ind = 0
        let actualImg = allImages[ind]
        showImg(actualImg)
    }
})