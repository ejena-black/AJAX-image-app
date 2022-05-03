var btn = document.querySelector('#btn');
const img = document.querySelector('#photo')

const XHR = new XMLHttpRequest();

btn.addEventListener('click', () => {
    XHR.onreadystatechange = function() {
        if(XHR.readyState == 4 && XHR.status == 200){
            var url = JSON.parse(XHR.responseText).message;
            img.src = url;
        }
    }


    XHR.open('GET', 'https://dog.ceo/api/breeds/image/random');
    XHR.send();
})



