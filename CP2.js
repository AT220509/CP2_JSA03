//Bài 1:
// let menu = ["rau xào", "thịt luộc", "gà rán"];
// let inputKey = prompt('Nhập Phím C, R, U hoặc D');
// switch (inputKey) {
//     case 'C':
//         food = prompt ("Nhập món ăn mới");
//         console.log(food);
//         localStorage.setItem ('menu', JSON.stringify([...menu, food]));
//         localStorage.setItem ('menu', JSON.stringify(menu));
//         break;

//     case 'R': 
//         console.log(menu);
//         break;

//     case 'U':
//         food = prompt ("Mời nhập tên món muốn Update");
//         console.log(food);
//         localStorage.setItem ('menu', JSON.stringify([...menu, food]));
//         localStorage.setItem ('menu', JSON.stringify(menu))
//         break;

//     case 'D':
//         food = prompt ("Mời nhập tên món muốn Delete");
//         console.log(inputKey);
//         break;
// }

//Bài 2

const DEFAULT_VALUE = '__';
const search = document.getElementById('search');
const Name = document.getElementById('name');
const type = document.getElementById('type');
const height = document.getElementById('height');
const weight = document.getElementById('weight');
const bio = document.getElementById('bio');
const formPokedex = getElementById ('pokedex-form');
formPokedex.addEventListener ('submit', (event) => {
    let name = document.querySelector('input').value;
    event.preventDefault();
    fetch(`https://pokeapi.co/api/v2/pokemon/ditto${name}`)
    .then(response => response.json())
    .then((data) => {
        Name.innerText = data.Name || DEFAULT_VALUE;
        type.innerText = data.type || DEFAULT_VALUE;
        height.innerText = data.height || DEFAULT_VALUE;
        weight.innerText = data.weight || DEFAULT_VALUE;
        bio.innerText = data.bio || DEFAULT_VALUE;
    })
    .catch((error) => {
        console.log(error);a
    })
})
