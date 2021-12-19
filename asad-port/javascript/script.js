let btnall = document.querySelector('#btnall')
let btngd = document.querySelector('#btngd')
let btnsp = document.querySelector('#btnsp')
let btnwd = document.querySelector('#btnwd')
let btnld = document.querySelector('#btnld')
let content = document.querySelector('#content')

btnall.addEventListener('click', ()=>{
    Paragraph.innertext = "helloworld" ;
});

btngd.addEventListener('click', ()=>{
    content.innerHTML = '<div>  </div>'
});
