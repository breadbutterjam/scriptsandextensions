function slayIt()
{
    a = document.getElementsByTagName('img')
    max = -1; 
    maxInd = [];
    imgsarr = [];
    for (i=0; i<a.length; i++){
        //console.log("max is ", max, " index is ", i, " height is ", a[i].height)
        if (a[i].height > max)
        {
    
            max = a[i].height;
            
        }
    }

    for (i=0; i<a.length; i++)
    {
        if (a[i].height === max)
        {
            maxInd.push(i);
            imgsarr.push(a[i].src)
        }
    }

    imgsarr.forEach(function(elem){

        window.open(elem)
    })
}slayIt();


function twoSlay()
{
    window.open($0.parentElement.children[0].children[0].src)
}