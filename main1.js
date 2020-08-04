//Задание 1
function ChessBoard(){
    let chess = document.querySelector('.chess');
    let table = document.createElement('table');//таблица
    chess.appendChild(table);
    let flag = true;

    let trr = document.createElement('tr');
    let arr = ['','A','B','C','D','E','F','G','H',]; //массив букв

    //ячейки
    for(let i = 0; i < 8; i++){
        let tr = document.createElement('tr');

        //цифры
        let tdd = document.createElement('td');
        tdd.style.width='50px';
        tdd.style.height='50px';
        tdd.innerHTML= 8 - i;
        tdd.style.textAlign = 'center';
        tdd.style.background = '#fff';
        tr.appendChild(tdd);

        //малярные работы
        for(let j = 0; j < 8; j++){
            if(j == 0)
                flag=!flag;
            let td = document.createElement('td');
            td.style.width='50px';
            td.style.height='50px';
            if(flag){
                td.style.background='#000';
            }else
                td.style.background='#fff';
            tr.appendChild(td);
            flag=!flag;
        }
        table.appendChild(tr);
    }

    //буквы
    for(let a = 0; a < 9; a++){
        let td = document.createElement('td');
        td.style.width='50px';
        td.style.height='50px';
        td.style.background='white';
        td.style.textAlign = 'center';
        td.innerHTML=arr[a];
        trr.appendChild(td);
    }
    table.appendChild(trr);
}
ChessBoard();

// Задание 2

// объект корзина
let cart = {
    // массив товаров в корзине
    products: [],
    // возвращает текущее представление корзины
    cartText: function(){
        if (this.products.length == 0){
            return "Корзина пуста";
        } else{
            return "В корзине: " + this.countCartCount() +
            " товаров на сумму " + this.countCartPrice() + " cr";
        }
    },
    // возвращает сумму корзины
    countCartPrice: function(){
        let sum = 0;
        for(let i = 0; i < this.products.length; i++){
            sum = sum + this.products[i].price * this.products[i].count;
        }
        return sum;
    },
    // возвращает количество товара в корзине
    countCartCount: function(){
        let sum = 0;
        for(let i = 0; i < this.products.length; i++){
            sum = sum + this.products[i].count;
        }
        return sum;
    }
}
// функция выводит текст в заданный элемент
function displayText($dom,text){
    $dom.textContent = text;
}

let products = [
    {name: 'buzz', price: 1000, count: 5},
    {name: 'tommygun', price: 5000, count: 2},
    {name: 'pipboy', price: 10000, count: 1},
];
cart.products = products;

$cart = document.getElementById("cart");
$cart.classList.add("cart");

displayText($cart,cart.cartText());

//Задание 3


function displayCatalog(products){

    $productBox = document.getElementById("catalog");
    $productBox.classList.add("catalog");

    // заголовки
    let $product = document.createElement("div");
    $product.classList.add("product");

    let $productName = document.createElement("div");
    $productName.classList.add("productName");
    $productName.classList.add("productHeadline");

    let $productCount = document.createElement("div");
    $productCount.classList.add("productCount");
    $productCount.classList.add("productHeadline");

    let $productPrice = document.createElement("div");
    $productPrice.classList.add("productPrice");
    $productPrice.classList.add("productHeadline");

    let $productSum = document.createElement("div");
    $productSum.classList.add("productSum");
    $productSum.classList.add("productHeadline");

    $productName.textContent = "Товар";
    $productCount.textContent = "количество";
    $productPrice.textContent = "цена";
    $productSum.textContent = "сумма";

    $productBox.appendChild($product);
    $product.appendChild($productName);
    $product.appendChild($productCount);
    $product.appendChild($productPrice);
    $product.appendChild($productSum);

    // информация о товарах
    for(let i = 0; i < products.length; i++){

        let $product = document.createElement("div");
        $product.classList.add("product");

        let $productName = document.createElement("div");
        $productName.classList.add("productName");

        let $productCount = document.createElement("div");
        $productCount.classList.add("productCount");

        let $productPrice = document.createElement("div");
        $productPrice.classList.add("productPrice");

        let $productSum = document.createElement("div");
        $productSum.classList.add("productSum");

        $productName.textContent = products[i].name;
        $productCount.textContent = products[i].count;
        $productPrice.textContent = products[i].price;
        $productSum.textContent = products[i].price * products[i].count;

        $productBox.appendChild($product);
        $product.appendChild($productName);
        $product.appendChild($productCount);
        $product.appendChild($productPrice);
        $product.appendChild($productSum);
    }
    displayText($cart,cart.cartText());
}

displayCatalog(products);