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