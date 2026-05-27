let pass = document.querySelector('input');
let display = document.querySelector('p');

pass.addEventListener('input',() => {isStrongOrNot();});

function isStrongOrNot()
{
    let digitc = 0;
    let spec = 0;
    let upperc = 0;

    let password = pass.value;

    for(let i = 0; i < password.length; i++)
    {
        let ch = password[i];
    
        if(ch >= 'A' && ch <= 'Z')
            upperc++;

        else if(ch >= '0' && ch <= '9')
            digitc++
        
        else if(!(ch >= 'a' && ch <= 'z'))
            spec++;
    }

    if(password.length > 7 && upperc >= 1 && digitc >=1 && spec >= 1)
        display.innerHTML = 'Strong';

    else
        display.innerHTML = 'Weak';
}

let generateButton = document.querySelector('button');

generateButton.addEventListener('click',() => {generateStrongPassword();});

function generateStrongPassword()
{
    let result = '';

    const small = 'abcdefghijklmnopqrstuvwxyz';
    const capital = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const special = '!@#$%&?^';

    // add at least one character from each type
    result += small[Math.floor(Math.random() * small.length)];
    result += capital[Math.floor(Math.random() * capital.length)];
    result += numbers[Math.floor(Math.random() * numbers.length)];
    result += special[Math.floor(Math.random() * special.length)];

    // all possible characters
    const all = small + capital + numbers + special;

    // generate remaining characters
    for(let i = 0; i < 4; i++)
    {
        result += all[Math.floor(Math.random() * all.length)];
    }

    pass.value = result;

    isStrongOrNot();
}