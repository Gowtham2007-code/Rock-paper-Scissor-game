const a = [];
const b = [];
const c = JSON.parse(localStorage.getItem('todo')) || [];

console.log(c);

rendertodoList1();
rendertodoList2();

function rendertodoList1()
{
    let ToDoListhtml = '';
    for(let i = 0; i < b.length; i++)
    {
        const html = `<p>${b[i]}</p>`;
        ToDoListhtml += html;
    }
    document.querySelector('.js-todo-list1').innerHTML = ToDoListhtml;
}

function rendertodoList2()
{
    let ToDoListHTML = '';
    for(let i = 0; i < c.length; i++)
    {
        // const name = c[i].name;
        const {name, DueDate} = c[i];
        const html = `<div class="name">${name}</div>
                      <div class="DueDate">${DueDate}</div>
                      <button onclick="c.splice(${i}, 1);
                              rendertodoList2();"
                              class="delete-button">
                         Delete
                      </button>`;
        ToDoListHTML += html;

    }
    document.querySelector('.js-todo-list2').innerHTML = ToDoListHTML;

    localStorage.setItem('todo',JSON.stringify(c));
}

function addToDo1()
{
    const inputElement1 = document.querySelector('.js-input1');

    const name1 = inputElement1.value;

    a.push(name1);

    console.log(a);

    inputElement1.value = '';
}

function addToDo2()
{
    const inputElement2 = document.querySelector('.js-input2');

    const name2 = inputElement2.value;

    b.push(name2);

    inputElement2.value = '';

    rendertodoList1();
}

function addToDo3()
{
    const inputElement3 = document.querySelector('.js-input3');

    const name3 = inputElement3.value;

    const inputDateElement = document.querySelector('.js-input-date');

    const DueDate = inputDateElement.value;

    if(name3 === '' || DueDate === '')
    {
        return;
    }

    c.push({
        name : name3,
        //DueDate : Duedate
        DueDate // short hand property.
    });

    inputElement3.value = '';

    rendertodoList2();
}