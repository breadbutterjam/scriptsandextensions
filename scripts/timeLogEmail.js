month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
shortMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

function SlayIt()
{
    strEmailBody = 'Hi Neha,';
    strEmailBody += '\n';
    strEmailBody += '\n';
    // strEmailBody += "Here is the summary for last week (Monday, 12-Aug to Sunday, 18-Aug). I've added the same in the Timelogs - Weekly 8/12 to 8/18 sheet"
    
    a = new Date();
    endDate = a.getDate() - a.getDay();
    startDate = endDate - 6;
    
    strMonth = shortMonth[a.getMonth()]


    longStarDateMonth = startDate + "-" + strMonth;
    longEndDateMonth = endDate + "-"+ strMonth;

    shortStartDateMonth = String(a.getMonth() + 1).trim() + "/" + String(startDate).trim();
    shortEndDateMonth = String(a.getMonth() + 1).trim() + "/" + String(endDate).trim();

    // strEmailBody += "Here is the summary for last week (Monday, 12-Aug to Sunday, 18-Aug). I've added the same in the Timelogs - Weekly 8/12 to 8/18 sheet"
    strEmailBody += "Here is the summary for last week (Monday, " + longStarDateMonth + " to Sunday, " + longEndDateMonth +")."; 
    strEmailBody +=  "I've added the same in the Timelogs - Weekly " + shortStartDateMonth +" to " + shortEndDateMonth + " sheet";


    // console.log(strEmailBody)
    copyme(strEmailBody)
}


function copyme(strParams)
{
    let x = document.createElement("TEXTAREA");
    x.value = strParams;
    document.body.append(x);
    x.select()
    document.execCommand("copy");
    x.remove();
    console.log('COPIED');
}