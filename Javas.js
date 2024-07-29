let calcbutcm = document.getElementById("calcft")
let calcbutft = document.getElementById("calccm")

calcbutcm.addEventListener(("click"), () => {
  let inpcm = parseFloat(document.getElementById("cm").value | 0)
  let outft = document.getElementById("outft")
  let result1ft = 0
  let result1 = 0
  let result2 = 0
   result1 = inpcm * 0.393700787
   while(result1 / 12 >= 1){
    result1 -= 12
    result2 = result1
    result1ft += 1
   }
   if(result1 <= 11){
    result2 = result1
   }
   
   outft.textContent = "result: " + result1ft + "ft " + Math.ceil(result2) + "in"
   document.getElementById('cm').value = ''
})

calcbutft.addEventListener(("click"), () => {
    let inpft = parseFloat(document.getElementById("feet").value | 0)
    let inpin = parseFloat(document.getElementById("inch").value | 0)
    let outcm = document.getElementById("outcm")
    if(inpft != 0){
    inpin += inpft * 12
    }
    
    outcm.textContent = "result: " + inpin * 2.54 + "cm"
    document.getElementById('feet').value = ''
    document.getElementById('inch').value = ''
})