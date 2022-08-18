export const titleShorter = (title,n) => {
    const shortedTitle= []
    const spiltedTitle = title.split("")
    for(let i = 0; i<=n; i++) {
        shortedTitle.push(spiltedTitle[i])
    }
    shortedTitle.push("...")
    return shortedTitle;
    
}
export const changeNumberToPersian = (price) => {
    const changedDidits = []
    const equivalentOfNumbers = {
        "1":"۱",
        "2":"۲",
        "3":"۳",
        "4":"۴",
        "5":"۵",
        "6":"۶",
        "7":"۷",
        "8":"۸",
        "9":"۹",
        "0":"۰",
        ",":","
    }
    const stringedPrice = String(price)
    const spiltedPrice = stringedPrice.split("")

    for(let d = 0; d<=spiltedPrice.length; d++) {
        const digit = spiltedPrice[d];
        const newDigit = equivalentOfNumbers[digit];
        changedDidits.push(newDigit);

    }

    return changedDidits;
}
export const getQuantity = (cart,id) => {
    if(cart.find(item => item.id === id) !== undefined) {
       const focusedItem = cart.find(item => item.id === id)
       const quantity = focusedItem.quantity
       return quantity
    }
}
