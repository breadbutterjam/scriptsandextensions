bb = [];
strToCopy = ''
function slayIt()
{
    bb = [];
    aa = Array.from(document.querySelectorAll('.task-name a'));
    aa.forEach(function(ele){
        // console.log(ele.textContent.trim())
        bb.push(ele.textContent.trim());
        bb.push(ele.href);
    })

    strToCopy = '';
    bb.forEach(function(ele){
        strToCopy += ele + '\n';
    })

    CopyMe(strToCopy);

}

function CopyMe(strParam)
{
    let x = document.createElement("TEXTAREA");
    x.value = strParam;
    document.body.append(x);
    x.select()
    document.execCommand("copy");
    x.remove();
}