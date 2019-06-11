function getlink(prodDesc)
{
    firstIndex = prodDesc.indexOf('"');
    secondIndex = prodDesc.indexOf('"', firstIndex+1);
    strURL = prodDesc.substring(firstIndex + 1, secondIndex -1);

    return strURL;
}