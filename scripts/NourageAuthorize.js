function highlightPrice(elem, nPrice)
{
    let a = elem.children;
    let nRecords = a.length;
    let strPrice = 'USD ' + String(nPrice).trim();
    for (i=1; i<nRecords; i++)
    {
        if (a[i].children[7].textContent === strPrice)
        {
            a[i].style.backgroundColor = 'yellow';
        }
        else
        {
            // a[i].classList.add('removeRow');
            // a[i].remove();
        }
    }

    // document.getElementsByClassName('removeRow').remove();
}