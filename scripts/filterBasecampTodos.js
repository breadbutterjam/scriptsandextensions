// let ptUsers = ['Jayanta', 'Avneet', 'Pravin', 'Jaimeen']
let strUsers = 'jayanta::avneet::pravin::jaimeen';
function slayingIt()
{
    let arrNames = Array.from(document.querySelectorAll('.todos .pill.has_balloon a span span'));
    arrNames.forEach(function (ele){

        shortName = ele.textContent.substring(0, 4).toLocaleLowerCase();
        indOf = strUsers.indexOf(shortName);
        console.log({shortName})
        console.log({indOf})
        if (indOf === -1)
        {
            ele.classList.add('notUS');
        }
        else
        {
            ele.classList.add('US');
        }
    })

    arrNotUS = Array.from(document.querySelectorAll('.notUS'));
    arrNotUS.forEach(function (ele){
        ele.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
    })

}slayingIt();