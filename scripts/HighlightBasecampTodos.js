function goSlay(arrAssignee, strCompareWithDueDate, removeOthers)
{
    todos = document.getElementsByClassName('todos')[1].children
    
    
    if (arrAssignee === undefined)
    {
        /* IF MATCH IS TO BE ON DUE DATE */
        for (i=0; i<todos.length; i++)
        {
            strDueDate = todos[i].children[1].children[0].children[3].children[1].getElementsByTagName('time')[0].textContent.trim()
            
            if (strCompareWithDueDate && strDueDate === 'Wed, May 22')
            {
                
                todos[i].style.backgroundColor = 'yellow'
            }


        }
    }
    else
    {
        for (i=0; i<todos.length; i++)
        {
            /* IF MATCH IS TO BE ON ASSIGNEE NAME */
            strCurrentAssignee = todos[i].querySelectorAll('.has_balloon')[0].children[0].children[0].textContent.trim();
            if (arrAssignee.indexOf(strCurrentAssignee) > -1)
            {
                todos[i].style.backgroundColor = 'yellow'
            }
            else
            {
                todos[i].classList.add('notmycircus')
            }
        }
    }

    (removeOthers ? document.querySelectorAll('.notmycircus').forEach(function(ele){ele.remove()}) : console.log("A"))
}
