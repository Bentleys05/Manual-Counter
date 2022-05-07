// counter variable
let count = 0;

// queries
const btns = document.querySelectorAll('.btn');
const value = document.querySelector('#value');

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList;
        
        if (styles.contains('decrease')) {
            count--;
        }
        else if(styles.contains('increase'))
        {
            count++;
        }
        else {
            count = 0;
        }

        // changing value color
        if ( count > 0) {
            value.style.color = 'green';
        }

        else if ( count < 0) {
            value.style.color = 'red';
        }

        else {
            value.style.color = '#333';
        }
        value.textContent = count;
    });
});