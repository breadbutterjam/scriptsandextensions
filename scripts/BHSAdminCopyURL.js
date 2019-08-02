function slayIt()
{
    
    document.querySelectorAll('.admin__old .admin__collapsible-block-wrapper .fieldset-wrapper-title')[2].click()
    delayInMilliseconds = 2000;
    console.log("EXPANDED")
    setTimeout(copyURL, delayInMilliseconds);
}

function copyURL()
{
    console.log("COPYING CODE NOW")
    let x = document.createElement("TEXTAREA");
    let valToCopy = document.querySelectorAll('.admin__old .admin__control-text')[6].value;
    
    
    // BEGIN CODE to get ID 
    arrID = document.title.split('/')[0].trim().split('(ID:')
    strID = arrID[0].trim() + " [" + arrID[arrID.length-1].replace(')', '').trim() + ']'
    // END CODE

    
    // strprefix = 'herbs-homeopathy/';
    strprefix = 'shop-by-health-concern/';
    x.value = strID + '\n' +  strprefix + valToCopy;

    document.body.append(x);
    x.select()
    document.execCommand("copy");
    x.remove();
}
slayIt();