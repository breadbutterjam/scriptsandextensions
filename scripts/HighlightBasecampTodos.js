function goSlay(strAssignee, strCompareWithDueDate)
{
    todos = document.getElementsByClassName('todos')[1].children
    for (i=0; i<todos.length; i++)
    {
        strDueDate = todos[i].children[1].children[0].children[3].children[1].getElementsByTagName('time')[0].textContent.trim()
        
        if (strCompareWithDueDate && strDueDate === 'Wed, May 22')
        {
            
            todos[i].style.backgroundColor = 'yellow'
        }


    }
}
