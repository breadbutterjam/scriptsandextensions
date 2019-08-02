function copyme(strParams)
{
    let x = document.createElement("TEXTAREA");
    x.value = strParams;
    document.body.append(x);
    x.select()
    document.execCommand("copy");
    x.remove();
    console.log('COPIED');
}