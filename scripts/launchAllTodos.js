function slayIt()
{
    a = document.querySelectorAll('.has_tools .todos li .content a');
    a1 = Array.from(a);
    a1.forEach(function (ele){
        window.open(ele.href)
    })

}slayIt();