
var removeButton = document.getElementsByClassName('removebtn')
console.log(removeButton);
for(var i = 0; i < removeButton.length; i++){
    var button = removeButton[i]
    button.addEventListener('click',function(){
    console.log('clicked')
    })
};

function totalhasil(){
    var totalharga = document.getElementsByClassName("output");
    totalharga.getElementsByClassName()
}

function updateCartTotal(){
    var carItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRow = carItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRow.length; i++){
        var cartRows = cartRow[i]
        var priceElement = cartRows.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRows.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        console.log(price * quantity)
    }
}