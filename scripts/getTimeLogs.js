/* 
    Select on user, sort by Date, run getTimeLogs function
    limitation: need to select individual user and run this as many times. 
*/
let finData = [];
let currData = [];
function getTimeLogs()
{
    let whoLoggedTime = document.querySelectorAll('.timeEntryRow')[0].children[1].textContent.trim();

    let totalDetails = document.querySelectorAll('.widget-time-list span.bold');
    // totalDetails[1] = time in readable format (20 minutes)
    // totalDetails[2] = time in decimal (e.g. 20 minutes will be 0.33)
    // simlarly totalDetails[4], totalDetails[5], and so on will contain details for subsequent dates. 

    let dateDetails = document.querySelectorAll('.gridHeading');
    //contains dates in the form Wednesday, 19 June
    
    let arrDateDetails = Array.from(dateDetails);
    // let arrTotalDetails = Array.from

    let nowDateTime = new Date().toLocaleString();

    
    arrDateDetails.forEach(function(ele, ind){
        currData = [];
        currData.push(sanitizeCommas(nowDateTime))
        currData.push(whoLoggedTime);
        currData.push(sanitizeCommas(ele.textContent.trim()));
        currData.push(totalDetails[(ind*3) + 1].textContent.trim())
        currData.push(totalDetails[(ind*3) + 2].textContent.trim())
        finData.push(currData);
    })
}

/* 
 
select multiple people, sort by Who logged time, run getTimeLogs2

*/

function getTimeLogs2()
{
    let whoAllLoggedTime = document.querySelectorAll('.subTitle');
    // let arrWhoLoggedTime = Array.from(whoLoggedTime);
    let timeRows;
    
    let cDate, cHrs, cHrsDecimal;

    let personName = "";

    let nowDateTime = new Date().toLocaleString();

    finData = [];
    finData.push(["time log taken on", "Person", "time log for", "time hrs", "time decimal"])

    for (let i=0; i<whoAllLoggedTime.length; i++)
    {
        
        datesAdded = [];
        dataObj = {};
        timeRows = whoAllLoggedTime[i].parentElement.getElementsByClassName('timeEntryRow');

        personName = whoAllLoggedTime[i].textContent.trim()

        for (k=0; k<timeRows.length; k++)
        {
            cDate = timeRows[k].getElementsByClassName('date-column')[0].textContent.trim();
            cHrs = timeRows[k].getElementsByClassName('hms')[0].textContent.trim();
            cHrsDecimal = timeRows[k].getElementsByClassName('dec')[0].textContent.trim();
            
            if (datesAdded.indexOf(cDate) == -1)
            {
                //if entry is not found. this is the first time data for this date is found 
                
                //add date to datesadded array
                datesAdded.push(cDate);

                //create a new object of that date, and add details in it
                dataObj[cDate] = {};
                dataObj[cDate].hrs = cHrs; 
                dataObj[cDate].dec = Number(cHrsDecimal); 
            }
            else
            {
                // dataObj[cDate].hrs = addHumanReadableTime()
                dataObj[cDate].hrs += " :+: " + cHrs
                dataObj[cDate].dec += Number(cHrsDecimal);
            }

        }

        
        // add data object details into array
        // "current date and time"; "person name"; "date for which time is logged"; "time in human readable format"; "time in dec" 
        for (var elems in dataObj)
        {

            finData.push([sanitizeCommas(nowDateTime), personName, elems, 'human readable', dataObj[elems].dec])
        }        
        
        /* 
        
        currData = [];
        currData.push(sanitizeCommas(nowDateTime))
        currData.push(whoLoggedTime);
        currData.push(sanitizeCommas(ele.textContent.trim()));
        currData.push(totalDetails[(ind*3) + 1].textContent.trim())
        currData.push(totalDetails[(ind*3) + 2].textContent.trim())
        finData.push(currData);
        
        */
    }



    //document.querySelectorAll('.subTitle')[0].parentElement.getElementsByClassName('timeEntryRow')

}



/* 

    house keeping funcitons beyond this point
    consider moving these to a library function. 

*/


function addHumanReadableTime()
{

}

function exportArrayParamData(arrParam)
{
    let csvContent = "data:text/csv;charset=utf-8,";
    arrParam.forEach(function(rowArray) {
        let row = rowArray.join(",");
        csvContent += row + "\r\n";
    });

    let encodedUri = encodeURI(csvContent);
    let link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "my_data.csv");
    document.body.appendChild(link); // Required for FF

    link.click();
}

/* 
    function takes string parameter and replaces all commas with periods. 
*/
function sanitizeCommas(strParam)
{
    return strParam.replace(/,/g, '.')
}


/* 
    function takes string parameter e.g. 3hrs 30mins; 2hrs; 30mins; 
    and returns a time object with t.hrs and t.mins
*/
function getTimeObject(strParam)
{
    strParam = strParam.trim().replace(/(\r\n|\n|\r|' '+\n|' '+\r|\n+' '|\r+' ')/gm,'').replace(/\s/g, "");

    let t = {};
    if (strParam.indexOf("hrs") > -1 && strParam.indexOf("mins") > -1)
    {
        //string parameter contains both hrs and minutes
        arrP = strParam.split("hrs");
        t.hrs = Number(arrP[0])
        t.mins = Number(arrP[1].replace("mins", ""))
    }
    else if (strParam.indexOf("hrs") > -1)
    {
        t.hrs = Number(strParam.replace("hrs", ""));
        t.mins = 0;
    }
    else
    {
        t.hrs = 0;
        t.mins = Number(strParam.replace("mins", ""));
    }

    return t;
}