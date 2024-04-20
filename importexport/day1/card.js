
// Export modules---


// variable

export let A=100

// arry

export let Names =["vrushali","naresh","sayali","shivani"]

// function 

export let cart =[]

export let addtoCart = function(product,quantity){
    let obj = {}
    obj[product]=quantity
    cart.push(obj)
    console.log(`${quantity}${product}`)
}