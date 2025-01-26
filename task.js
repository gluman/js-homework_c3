// some code
const book_control = document.getElementsByClassName('font-size')
const book_content = document.getElementsByClassName('book__content')
console.log(book_control)
console.log(book_content)

Array.from(book_control).forEach((e) => {
    for(i=0; i < Array.from(book_control).length; i++){
        if(!this.indexOf(e) === i){
            e.classList.remove('font-size_active')
        } 
    }
    this.indexOf        
    e.addEventListener('click', () => {
        // e.forEach(() => {
        //     e.classList.remove('font-size_active')
        //     console.log('удалили font-size_active')
        // })
        
        e.classList.add('font-size_active')
        console.log('добавили font-size_active')
        size = e.getAttribute('data-size')
        console.log('добавили size', size)
        activeIndex = Array.from(book_control).indexOf(e);
        // if (size = 'small') {
        //     classValue = 'font-size_small'
        //     console.log(classValue)
        // }
        // else if (size = 'big') {
        //     classValue = 'font-size_big'
        //     console.log(classValue)
        // }
        // else {
        //     classValue = ''
        //     console.log(classValue)
        // }
        // book_content[0].classList.remove('font-size_big')
        // book_content[0].classList.remove('font-size_small')
        // book_content.classList.remove('font-size_big')
        // book_content.classList.remove('font-size_small')
        // })

        book_content[0].setAttribute('div', classValue)
    })
})


// book_content.classList.add()

