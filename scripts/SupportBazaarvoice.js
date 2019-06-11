function slayMe()
{
	a = document.getElementsByClassName('comment')
	
    dates = [];
    tempDate = {};
	for (i=0; i<a.length; i++)
	{   
        tempDate = new Date(a[i].children[1].children[0].children[2].textContent.trim())
		dates.push([tempDate, a[i].children[1]])
	} 
	
	
	
	lates = []; lates.push(dates[0][1])
    for (k=1; k<dates.length; k++)
    {
        diff = dates[k-1][0] - dates[k][0];
        if (diff === 0)
        {
            lates.push(dates[k][1]);
        }
        else if (diff < 0)
         {
            lates = []; lates.push(dates[k][1])
         }	
    }
    for (l=0; l<lates.length; l++)
    {
        lates[l].style.backgroundColor = 'lightgoldenrodyellow'
		lates[l].style.fontWeight = 'bold'
    }
}slayMe();