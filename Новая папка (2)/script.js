const searchInput = document.getElementById('searchInput');
const list = document.querySelector('#list');

// метод indexOf - ищет подстроку в строке
// Возвращает позицию первого совпадения, а если оно не найдено то вернет -1
// синтаксис: строка.indexOf(что_ищем, [и откуда начать поиск]);

function isMarching(full, chunk) {
    let pos = full.toLocaleLowerCase().indexOf(chunk.toLocaleLowerCase());
    return pos !=-1;
}

searchInput.addEventListener('keyup', ()=> {
    let items = document.querySelectorAll('.item');
    let value = searchInput.value;
    for (let item of items) {
        if(isMarching(item.textContent,value)){
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    }
})