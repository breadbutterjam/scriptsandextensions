let shortMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


let oToday = new Date();

let todayDate = oToday.getDate();
let yesterdayDate = todayDate - 1;

strStart = shortMonth[oToday.getMonth()] + " " + yesterdayDate.toString() + ", 2019 3:31:00 AM" 
strEnd = shortMonth[oToday.getMonth()] + " " + todayDate.toString() + ", 2019 3:30:00 AM" 

dtStart = Date.parse(strStart);
dtEnd = Date.parse(strEnd);

function slayIt()
{
    let orderRecords = document.querySelectorAll('.admin__data-grid-wrap tr');
    let nOrders = orderRecords.length;
    let currOrder;
    let purchaseDateTime;
    let currCheckBox;
    
    for (let i=2; i<nOrders; i++)
    {
        currOrder = orderRecords[i];
        purchaseDateTime = currOrder.children[3].textContent.trim()
        dtPurchase = Date.parse(purchaseDateTime);
        currCheckBox = currOrder.querySelector('.admin__control-checkbox');

        if (dtPurchase > dtStart && dtPurchase < dtEnd)
        {
            currCheckBox.click();
        }
    }   
}