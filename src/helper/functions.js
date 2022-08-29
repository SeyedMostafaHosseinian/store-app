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
export const validator = (values,type) => {
    const errors = {}
    if(type === "signup") {
        if(!values.name.trim()) {
            errors.name = "نام کاربری الزامیست"
        }
        else if(values.name.trim().length < 4) {
            errors.name = "نام کاربری باید ۴ حرف یا بیشتر باشد"
        }
        else {
            delete errors.name
            console.log(errors)
        }
        if(!values.email.trim()) {
            errors.email = "لطفا یک ایمیل واردکنید"

        }
        else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)) {
            errors.email = "ایمیل وارد شده صحیح نمیباشد"
        }
        else {
            delete errors.email
        }
        if(!values.password) {
            errors.password = "رمز عبور الزامیست"
        }
        else if(values.password.length < 6) {
            errors.password = "  رمز عبور باید ۶ کاراکتر یا بیشتر باشد"

        }
        else {
            delete errors.password
        }
        if(!values.confirmPassword) {
            errors.confirmPassword = "تایید رمز عبور را وارد کنید"
        }
        else if(values.confirmPassword !== values.password) {
            errors.confirmPassword = "رمز عبور یکسان نیست"
        }
        else {
            delete errors.confirmPassword
        }
    }
    else if(type = "login") {
        if(!values.name.trim()) {
            errors.name = "نام کاربری الزامیست"
        }
        else if(values.name.trim().length < 4) {
            errors.name = "نام کاربری باید ۴ حرف یا بیشتر باشد"
        }
        else {
            delete errors.name
            console.log(errors)
        }
        if(!values.password) {
            errors.password = "رمز عبور الزامیست"
        }
        else if(values.password.length < 6) {
            errors.password = "  رمز عبور باید ۶ کاراکتر یا بیشتر باشد"

        }
        else {
            delete errors.password
        }
    }
    
    return errors
}