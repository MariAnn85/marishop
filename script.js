//Պիտի javascript-ով ստանանք open card button-ի //ֆունկցիոնալը
//Ստեղծում ենք փոփոխական
let openBtn = document.querySelector('.open');
//Ստեղծում ենք ֆունկցիա, որը կստեղծի cart (корзина) 
function createCart() {
//Ստեղծում ենք էլեմենտներ
    let cart = document.createElement('div');
    let heading = document.createElement('h2');
    let field = document.createElement('div');
//Վերջում ստեղծում ենք փակել button-ը
    let closeBtn = document.createElement('button');
  //Քանի որ էլեմենտները դատարկ են, մոդուլների //օգնությամբ ավելացնում ենք արժեքներ, //textContent մոդուլի օգնությամբ ավելացնում ենք //արժեքներ

    heading.textContent = 'In our cart';
    closeBtn.textContent = 'Close';
//appendchild մեթոդի օգնությամբ էկրանին տպենք //էլեմենտները cardի
    document.body.appendChild(cart);
    cart.appendChild(heading);
    cart.appendChild(field);
    cart.appendChild(closeBtn);

//Էլեմենտներին style տալու համար  տանք կլասսներ
    cart.classList.add('cart');
    field.classList.add('cart-field');
    closeBtn.classList.add('close-btn');

}
//Կանչենք ֆունկցիան 
createCart();

//ստանանք բոլոր ստեղծած էլեմենտները   ֆունկցիաից //դուրս նշելով կլասները

let cart = document.querySelector('.cart');
let field = document.querySelector('.cart-field');
let closeBtn = document.querySelector('.close-btn');
// ստեղծում ենք 2 ֆունկցիա buttonների համար
function openCart(){
    cart.style.display = 'block';
}

function closeCart(){
    cart.style.display = 'none';
}

openBtn.addEventListener('click' , openCart);
closeBtn.addEventListener('click', closeCart);
//Պիտի ստանանք  բոլոր buttonերը և բոլոր էլեմենտները //որոնց տեգը button է և բոլոր cardերը որոնց դիվը //product է և չկրկնենք կոդը մի քանի անգամ  


let buttons = document.querySelectorAll('button');
let products = document.querySelectorAll('.product');
//ստեղծում ենք ցիկլ
// for(let i=0; i<8; i++){
//     buttons[i].addEventListener('click' , function(){
//         let item = products[i].cloneNode(true);
//         let btn = item.querySelector('button');
        
//         btn.remove();

//         field.appendChild(item);

//         products[i].remove();
//     })
// }
//forEach մեթոդով նկաևրագրե նք ֆունկցիա  իր //պարամետրերով  
// item պարամետրը նշանակում է   յուրաքանչյուր  //button, i պարամետրը   նշանակում է    //էլեմենտների համարը

buttons.forEach(function(item,i){
  item.addEventListener('click' , function(){
        let item = products[i].cloneNode(true);
        let btn = item.querySelector('button');
        
        btn.remove();

        field.appendChild(item);

        products[i].remove();
    })
})