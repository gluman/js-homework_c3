const book_controls = document.getElementsByClassName('font-size');
const book_content = document.getElementsByClassName('book__content')[0];

let defaul_fontsize = document.querySelectorAll('p')


console.log(book_controls);
console.log(book_content);
console.log(defaul_fontsize)
Array.from(book_controls).forEach((control, index) => {
    control.addEventListener('clickUp', () => {
        event.preventDefault()
        let size = control.getAttribute('data-size');
        console.log('data-size:', size);
                
        Array.from(book_controls).forEach(item =>{
            item.classList.remove('font-size_active')
        })

        control.classList.add('font-size_active');
        if (size.includes('small')) {
            book_content.classList.remove('font-size_big');
            book_content.classList.add('font-size_small');
        } else if (size.includes('big')) {
            book_content.classList.remove('font-size_small');
            book_content.classList.add('font-size_big');
        } else {
            // book_content.restoreState();
            // book_content.classList.remove('font-size_big');
            // book_content.classList.remove('font-size_small');
            // book_content.preventDefault()
        }
    });
});