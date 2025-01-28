let book_controls = document.getElementsByClassName('font-size');
let book_content = document.getElementsByClassName('book__content');

console.log(book_controls);
console.log(book_content);
// console.log(defaul_fontsize)
Array.from(book_controls).forEach(control => {
    control.addEventListener('click', () => {
        event.preventDefault();
        let size = control.getAttribute('data-size');
        console.log('data-size:', size);

        Array.from(book_controls).forEach(item =>{
            item.classList.remove('font-size_active')
        })

        control.classList.add('font-size_active');
        if (size === 'small') {
            book_content[0].classList.remove('font-size_big');
            book_content[0].classList.add('font-size_small');
        } else if (size === 'big') {
            book_content[0].classList.remove('font-size_small');
            book_content[0].classList.add('font-size_big');
        } else {
            // book_content.restoreState();
            book_content[0].classList.remove('font-size_big');
            book_content[0].classList.remove('font-size_small');
            // book_content.preventDefault()
        }
    });
});