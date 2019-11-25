import './style.scss';

function component() {
    const element = document.createElement('div');

    element.innerHTML = ['Hello', 'world'].join(' ');
    element.classList.add('hello');

    return element;
};

window.addEventListener('load', function(){
    document.body.appendChild(component());
});