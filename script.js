const bill = document.getElementById("bill")

const v5 = document.getElementById("5")
const v10 = document.getElementById("10")
const v15 = document.getElementById("v15")
const v25 = document.getElementById("25")
const v50 = document.getElementById("50")
const cus = document.getElementById("custom")


const nop = document.getElementById("peo")

const tap = document.getElementById("tap")
const total = document.getElementById("total")

const reset = document.getElementById("reset")

//tip value
v5.value = 0.05
v10.value = 0.10
v15.value = 0.15
v25.value = 0.25
v50.value = 0.50


//fuction for tip amount pperson

function ytap() {
 
    
   
    let result = (  v15.value * +bill.value) / +nop.value

    tap.innerText = "$" + " " + result.toFixed(2)

     return result 
    
}

//fuction for the total pperson

function ytotal() {

    let result = (+bill.value / +nop.value) + ytap()

    total.innerText = "$" + " " + result.toFixed(2)

    return result

    }



//fuction for the rest btn

function rest(){
     
    bill.value = ""
    nop.value = "1"

    tap.innerText = "$ 0.00"
    total.innerText = "$ 0.00"
}
