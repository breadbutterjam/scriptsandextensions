let fonts = [];
let fontDetails = [];
let fontAllDetails = [];
function getFonts()
{
    let allElems = document.body.getElementsByTagName("*");
    let elemCount = allElems.length;
    let fontFamilyApplied, fontName; 
    for (let i=0; i<elemCount; i++)
    {
        fontFamilyApplied = getAppliedFont(allElems[i]);
        fontName = fontFamilyApplied.split(",")[0];
        if (fonts.indexOf(fontName) === -1)
        {
            fonts.push(fontName);
            fontDetails.push([allElems[i], fontName]);
        }

        fontAllDetails.push([allElems[i], fontName]);
    }
}

function getAppliedFont( element, property ) {
    if (property === undefined)
    property = "font-family";
    
    return window.getComputedStyle( element, null ).getPropertyValue( property );
}