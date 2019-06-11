function checkSortCollection()
{
    cpn = document.getElementsByClassName("product-item-link")
    checkForSort(cpn)
}

function checkSortSimple()
{
    pn = document.getElementsByClassName("collection-name")
    checkForSort(pn);
}

function printCollectionPatternName()
{
    cpn = document.getElementsByClassName("product-item-link")
    printTextContent(cpn);
}


function printPatternNames()
{
	pn = document.getElementsByClassName("collection-name")
    printTextContent(pn)
}

let g_arrData = [];
// g_arrData = [];
g_arrData.push(["bAnyProb", "rawData", "sortedData"])

function checkForSort(arrayParam, isDescending)
{
    let rawData = [];
    for (i=0; i<arrayParam.length; i++){
        // console.log(arrayParam[i].textContent.trim())
        rawData.push(arrayParam[i].textContent.trim());
    }

    let sortedData = rawData.toString().toLowerCase().split(",");
    sortedData.sort();

    let nProblemData = 0;

    let bAnyProb = false;
    for (i=0; i<rawData.length; i++)
    {
        if (sortedData[i] === rawData[i].toLowerCase())
        {
            //no problem
            bAnyProb = false;

        }
        else
        {
            nProblemData++;
            bAnyProb = true;
            console.log("PROBLEM!! at i=", i, "sorted data ", sortedData[i], "raw data ", rawData[i], )
        }

        g_arrData.push([bAnyProb, rawData[i], sortedData[i]])
    }

    // if (bAnyProb === false)
    if (nProblemData === 0)
    {
        console.log("NO PROBLEM!")
    }
}

function printTextContent(arrayParam){
    for (i=0; i<arrayParam.length; i++){
	    console.log(arrayParam[i].textContent.trim())
    }
}

function slayIt()
{
    if (document.getElementsByClassName("price-label").length === 0)
    {
        // if no price safely assume, for now, that it is collection listing
        checkSortCollection();
    }
    else
    {
        checkSortSimple();
    }
}
slayIt();