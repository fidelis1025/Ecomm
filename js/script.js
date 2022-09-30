decrease.addEventListener('click', () => {
    if (inputDetails.value < 1) {
        return
    } else {
        countedNumber--;
        inputDetails.value = countedNumber;
    }
})
increase.addEventListener('click', () => {
    countedNumber++;
    inputDetails.value = countedNumber;
})

nail1.addEventListener('click', () => {
    largeImage.src = nail1.src
})

nail2.addEventListener('click', () => {
    largeImage.src = nail2.src
})

nail3.addEventListener('click', () => {
    largeImage.src = nail3.src
})

nail4.addEventListener('click', () => {
    largeImage.src = nail4.src
})

cartBtn.addEventListener('click', () => {
    if (inputDetails.value <= 0) {
        return
    } else {
        cartDetails.style.display = "none"
        cartInfo.style.display = "block"
        cartOrder.innerText = inputDetails.value;
        priceTag.innerText = itemPrice.innerText
        finalAmount.innerText = itemPrice.innerText * inputDetails.value;
    }
})

deleteBtn.addEventListener('click', () => {
    cartInfo.style.display = "none"
    cartDetails.style.display = "block"
})

cartIcon.addEventListener('click', () => {
    cartBox.style.display = "block"
})

closeCart.addEventListener('click', () => {
    cartBox.style.display = "none"
})
