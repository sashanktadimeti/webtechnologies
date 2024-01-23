const vegetableBiryani = document.getElementById("vegetablebiryani");
const hyderabadiBiryani=document.getElementById("biryani");
const muttonBiryani=document.getElementById("muttondonnebiryani");
const chickenwings=document.getElementById("chickenwings");
const chickenburger=document.getElementById("chickenburger")
const vegetableFriedrice=document.getElementById("vegetablefriedrice")
let vb={name:"vegetableBiryani",count:0,price:199}
let mb={name:"muttonBiryani",count:0,price:220}
let cb={name:"chickenburger",count:0,price:100}
let cw={name:"chickenwings",count:0,price:219}
let hdb={name:"hyderabaddumbiryani",count:0,price:250.00}
let vf={name:"vegetableFriedrice",count:0,price:160.00}
const items=[vb,mb,cb,cw,hdb,vf]
let flag=true;
let flag1=true;
let flag2=true;
let flag3=true;
let flag4=true;
let flag5=true;
let total=0;
var total1=0;
const paraelement=document.getElementById("calculationid");
vegetableBiryani.addEventListener('click', function(e) {
    if (flag) {
        const buttonContainer=document.querySelector('.button-51')
        const existingSpan = document.getElementById('spanvb'); 
        if (existingSpan) {
            buttonContainer.removeChild(existingSpan);
        }
        total1=total1+1
        total=total+vb.price
        paraelement.innerHTML="ordered"+" "+total1+" "+"items"+ " "+"total-price:"+" "+total+"Rs"
        flag = false;
        vb.count = vb.count + 1;
        const spanButton1 = document.createElement("span");
        const spanButton2 = document.createElement("span");
        const spanButton3 = document.createElement("span");
        spanButton1.textContent = "+";
        spanButton2.textContent = vb.count;
        spanButton3.textContent = "-";
        buttonContainer.appendChild(spanButton1);
        buttonContainer.appendChild(spanButton2);
        buttonContainer.appendChild(spanButton3);
        
        spanButton1.addEventListener('click', function(e) {
            vb.count = vb.count + 1;
            spanButton2.textContent = vb.count;
            total=total+vb.price
            console.log(total)
            total1=total1+1
            paraelement.innerHTML="ordered"+" " +total1+" "+"items"+" "+"total-price:"+" "+total+"Rs"
        });
        
        spanButton3.addEventListener('click', function(e) {
            if(vb.count>0){
                vb.count = vb.count - 1;
                spanButton2.textContent = vb.count;
                total=total-vb.price
                total1=total1-1
            }
            while(vb.count==0){
                spanButton3.removeEventListener('click')
            }
            console.log(total)
            paraelement.innerHTML="ordered"+" "+total1+" "+"items"+" "+"total-price:"+" "+total+"Rs"
        });
    }
});
hyderabadiBiryani.addEventListener('click', function(e) {
    if (flag1) {
        const buttonContainer=document.querySelector('.button-11')
        const existingSpan = document.getElementById('hdb'); 
        if (existingSpan) {
            buttonContainer.removeChild(existingSpan);
        }
        total1=total1+1
        total=total+hdb.price
        paraelement.innerHTML="ordered"+" "+total1+" "+"items"+" "+"total-price:"+" "+total+"Rs"
        flag1= false;
        hdb.count = hdb.count + 1;
        const spanButton1 = document.createElement("span");
        const spanButton2 = document.createElement("span");
        const spanButton3 = document.createElement("span");
        spanButton1.textContent = "+";
        spanButton2.textContent = hdb.count;
        spanButton3.textContent = "-";
        buttonContainer.appendChild(spanButton1);
        buttonContainer.appendChild(spanButton2);
        buttonContainer.appendChild(spanButton3);
        
        spanButton1.addEventListener('click', function(e) {
            hdb.count = hdb.count + 1;
            spanButton2.textContent = hdb.count;
            total=total+hdb.price
            console.log(total)
            total1=total1+1
            paraelement.innerHTML="ordered"+" " +total1+" "+"items"+" "+"total-price:"+" "+total+"Rs"
        });
        
        spanButton3.addEventListener('click', function(e) {
            if(hdb.count>0){
                hdb.count = hdb.count - 1;
                spanButton2.textContent = hdb.count;
                total=total-hdb.price
                total1=total1-1
            }
            while(hdb.count==0){
                spanButton3.removeEventListener('click')
            }
            console.log(total)
            paraelement.innerHTML="ordered"+" "+total1+" "+"items"+" "+"total-price:"+" "+total+"Rs"
        });
    }
    
});
muttonBiryani.addEventListener('click', function(e) {
    if (flag2) {
        const buttonContainer=document.querySelector('.button-41')
        const existingSpan = document.getElementById('mdb'); 
        if (existingSpan) {
            buttonContainer.removeChild(existingSpan);
        }
        total=total+mb.price
        total1=total1+1
        paraelement.innerHTML="ordered"+" "+total1+" "+"items"+" "+"total-price:"+" "+total+"Rs"
        flag2= false;
        mb.count = mb.count + 1;
        const spanButton1 = document.createElement("span");
        const spanButton2 = document.createElement("span");
        const spanButton3 = document.createElement("span");
        spanButton1.textContent = "+";
        spanButton2.textContent = mb.count;
        spanButton3.textContent = "-";
        buttonContainer.appendChild(spanButton1);
        buttonContainer.appendChild(spanButton2);
        buttonContainer.appendChild(spanButton3);
        
        spanButton1.addEventListener('click', function(e) {
            mb.count = mb.count + 1;
            spanButton2.textContent = mb.count;
            total=total+mb.price
            console.log(total)
            total1=total1+1
            paraelement.innerHTML="ordered"+" " +total1+" "+"items"+" "+"total-price:"+" "+total+"Rs"
        });
        
        spanButton3.addEventListener('click', function(e) {
            if(mb.count>0){
                mb.count = mb.count - 1;
                spanButton2.textContent = mb.count;
                total=total-mb.price
                total1=total1-1
            }
            while(mb.count==0){
                spanButton3.removeEventListener('click')
            }
            console.log(total)
            paraelement.innerHTML="ordered"+" "+total1+" "+"items"+" "+"total-price:"+" "+total+"Rs"
        });
    }
});
chickenwings.addEventListener('click', function(e) {
    if (flag3) {
        const buttonContainer = document.querySelector('.button-21');
        const existingSpan = document.getElementById('cw');
        if (existingSpan) {
            buttonContainer.removeChild(existingSpan);
        }
        
        flag3 = false;
        cw.count = cw.count + 1;
        total = total + cw.price;
        total1=total1+1
        paraelement.innerHTML="ordered"+" "+total1+" "+"items"+" "+"total-price:"+" "+total+"Rs"
        const spanButton1 = document.createElement("span");
        const spanButton2 = document.createElement("span");
        const spanButton3 = document.createElement("span");
        
        spanButton1.textContent = "+";
        spanButton2.textContent = cw.count;
        spanButton2.setAttribute('id', 'cw'); // Set ID for the count span
        spanButton3.textContent = "-";
        buttonContainer.appendChild(spanButton1);
        buttonContainer.appendChild(spanButton2);
        buttonContainer.appendChild(spanButton3);
        
        spanButton1.addEventListener('click', function(e) {
            cw.count = cw.count + 1;
            spanButton2.textContent = cw.count;
            total = total + cw.price;
            console.log(total);
            total1=total1+1
           paraelement.innerHTML="ordered"+" "+total1+" "+"items"+" "+"total-price:"+" "+total+"Rs"
        });
        
        spanButton3.addEventListener('click', function(e) {
            if (cw.count >0) {
                cw.count = cw.count - 1;
                total1=total1-1
                spanButton2.textContent = cw.count;
                total = total - cw.price;
                console.log(total);
            }
            
            while(cw.count==0){
                spanButton3.removeEventListener('click')
            }
            paraelement.innerHTML="ordered"+" "+total1+" "+"items"+"total-price:"+" "+total+"Rs"
        });
    }
});

chickenburger.addEventListener('click', function(e) {
    if (flag4) {
        const buttonContainer=document.querySelector('.button-31')
        const existingSpan = document.getElementById('cb'); 
        if (existingSpan) {
            buttonContainer.removeChild(existingSpan);
        }
        total1=total1+1
        total=total+cb.price
        paraelement.innerHTML="ordered"+" "+total1+" "+"items"+" "+"total-price:"+" "+total+"Rs"
        flag4 = false;
        cb.count = cb.count + 1;
        const spanButton1 = document.createElement("span");
        const spanButton2 = document.createElement("span");
        const spanButton3 = document.createElement("span");
        
        spanButton1.textContent = "+";
        spanButton2.textContent = cb.count;
        spanButton3.textContent = "-";
        buttonContainer.appendChild(spanButton1);
        buttonContainer.appendChild(spanButton2);
        buttonContainer.appendChild(spanButton3);
        
        spanButton1.addEventListener('click', function(e) {
            cb.count = cb.count + 1;
            spanButton2.textContent = cb.count;
            total=total+cb.price
            console.log(total)
            total1=total1+1
            paraelement.innerHTML="ordered"+" "+total1+" "+"items"+" "+"total-price:"+" "+total+"Rs"
        });
        
        spanButton3.addEventListener('click', function(e) {

            if(cb.count){
                cb.count = cb.count - 1;
                spanButton2.textContent = cb.count;
                total=total-cb.price
                total1=total1-1
            }
            while(cb.count==0){
                spanButton3.removeEventListener('click')
            }
            paraelement.innerHTML="ordered"+" "+total1+" "+"items"+" "+"total-price:"+" "+total+"Rs"
            console.log(total)
        });
    }
});
vegetableFriedrice.addEventListener('click', function(e) {
    if (flag5) {
        const buttonContainer=document.querySelector('.button-61')
        const existingSpan = document.getElementById('spanvf'); 
        if (existingSpan) {
            buttonContainer.removeChild(existingSpan);
        }
        total1=total1+1
        total=total+vf.price
        paraelement.innerHTML="ordered"+" "+total1+" "+"items"+ " "+"total-price:"+" "+total+"Rs"
        flag5 = false;
        vf.count = vf.count + 1;
        const spanButton1 = document.createElement("span");
        const spanButton2 = document.createElement("span");
        const spanButton3 = document.createElement("span");
        spanButton1.textContent = "+";
        spanButton2.textContent = vf.count;
        spanButton3.textContent = "-";
        buttonContainer.appendChild(spanButton1);
        buttonContainer.appendChild(spanButton2);
        buttonContainer.appendChild(spanButton3);
        
        spanButton1.addEventListener('click', function(e) {
            vf.count = vf.count + 1;
            spanButton2.textContent = vf.count;
            total=total+vf.price
            console.log(total)
            total1=total1+1
            paraelement.innerHTML="ordered"+" " +total1+" "+"items"+" "+"total-price:"+" "+total+"Rs"
        });
        
        spanButton3.addEventListener('click', function(e) {
            if(vf.count>0){
                vf.count = vf.count - 1;
                spanButton2.textContent = vf.count;
                total=total-vf.price
                total1=total1-1
            }
            while(vf.count==0){
                spanButton3.removeEventListener('click')
            }
            console.log(total)
            paraelement.innerHTML="ordered"+" "+total1+" "+"items"+" "+"total-price:"+" "+total+"Rs"
        });
    }
});
const placeorder = document.getElementById("placeorder");
const containercart=document.getElementById("printorder")
placeorder.addEventListener('click', function(e) {
containercart.innerHTML = "";
const heading = document.createElement("h2");
heading.textContent = "Invoice";
heading.style.textAlign = "center";
heading.style.fontFamily = "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif";
containercart.appendChild(heading);
const newTable = document.createElement("table");
newTable.style.marginLeft = "30px";
newTable.style.marginRight="30px";
let total = 0;
const newRow = document.createElement("tr");
const newCell = document.createElement("td");
newCell.textContent = "Itemname";
newCell.style.borderBottom = "3px dashed #A8A7A4";
newCell.style.padding = "15px"; 
newCell.style.fontFamily = "cursive";
newCell.style.fontSize = "larger";
newCell.style.fontWeight="bolder";
const newCell1 = document.createElement("td");
newCell1.textContent = "quantity";
newCell1.style.borderBottom = "3px dashed #A8A7A4";
newCell1.style.padding = "15px"; 
newCell1.style.fontFamily = "cursive";
newCell1.style.fontSize = "larger";
newCell1.style.fontWeight="bolder";
const newCell2 = document.createElement("td");
newCell2.textContent = "Price";
newCell2.style.borderBottom = "3px dashed #A8A7A4";
newCell2.style.padding = "15px"; 
newCell2.style.fontFamily = "cursive";
newCell2.style.fontSize = "larger";
newCell2.style.fontWeight="bolder";
newRow.appendChild(newCell);
newRow.appendChild(newCell1);
newRow.appendChild(newCell2);
newTable.appendChild(newRow)
for (let i = 0; i < items.length; i++) {
    if (items[i].count > 0) {
        const newRow = document.createElement("tr");

        const itemTotal = items[i].count * items[i].price;
        total += itemTotal;

        const newCell = document.createElement("td");
        newCell.textContent = `${items[i].name}`;
        newCell.style.borderBottom = "3px dashed #A8A7A4";
        newCell.style.padding = "15px"; 
        newCell.style.fontFamily = "cursive";
        newCell.style.fontSize = "large";

        const newCell1 = document.createElement("td");
        newCell1.textContent = `${items[i].count}`;
        newCell1.style.borderBottom = "3px dashed #A8A7A4";
        newCell1.style.padding = "15px"; 
        newCell1.style.fontFamily = "cursive";
        newCell1.style.fontSize = "large";

        const newCell2 = document.createElement("td");
        newCell2.textContent = `${itemTotal}`;
        newCell2.style.borderBottom = "3px dashed #A8A7A4";
        newCell2.style.padding = "15px"; 
        newCell2.style.fontFamily = "cursive";
        newCell2.style.fontSize = "large";
        newRow.appendChild(newCell);
        newRow.appendChild(newCell1);
        newRow.appendChild(newCell2);
        newTable.appendChild(newRow);
    }
}

containercart.appendChild(newTable);

const totalRow = document.createElement("tr");

const totalCell = document.createElement("td");
totalCell.textContent = "Totalprice";
totalCell.style.fontFamily = "cursive";
totalCell.style.fontSize = "larger";
totalCell.style.fontWeight = "bolder";
totalCell.style.padding = "20px"; 
totalCell.style.borderBottom = "3px dashed #A8A7A4";
totalRow.appendChild(totalCell);

const totalCell1 = document.createElement("td");
totalCell1.textContent = "            ";
totalCell1.style.fontFamily = "cursive";
totalCell1.style.fontSize = "larger";
totalCell1.style.fontWeight = "bolder";
totalCell1.style.padding = "10px"; 
totalCell1.style.borderBottom = "3px dashed #A8A7A4";
totalRow.appendChild(totalCell1);
const totalCell2 = document.createElement("td");
totalCell2.textContent = `${total}RS`;
totalCell2.style.fontFamily = "cursive";
totalCell2.style.fontSize = "larger";
totalCell2.style.fontWeight = "bolder";
totalCell2.style.padding = "10px"; 
totalCell2.style.borderBottom = "3px dashed #A8A7A4";
totalRow.appendChild(totalCell2);
newTable.appendChild(totalRow);
containercart.appendChild(newTable);
const conclusion=document.createElement("p")
conclusion.textContent="Thanks for your order";
conclusion.style.fontWeight="bold";
conclusion.style.fontSize="x-large";
conclusion.style.marginTop="18px";
conclusion.style.marginLeft="80px";
conclusion.style.fontFamily="Georgia";
conclusion.style.color="#212A3E";
conclusion.style.marginRight="30px";
containercart.appendChild(conclusion);
containercart.style.height="fit-content";
document.getElementById("containercartout").style.display="grid";
});
