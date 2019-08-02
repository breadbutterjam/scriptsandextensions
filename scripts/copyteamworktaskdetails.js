function slayit(createHyperlink)
{
   /* 
   createHyperlink codes
   0 - name
   1 - name, link
   2 - name, link, and hyperlink 
   3 - only hyperlink
   4 - only link
   5 - custom text, by default '[teamwork task](' + URL + ')'

   TO-DO: change to binary code, each bit for one feature. 
   */ 


   if (createHyperlink === undefined)
      createHyperlink = 3;
   // createHyperlink ? undefined : true


   let strToCopy1 = document.querySelectorAll('.task-name')[0].children[1].textContent.trim();
   let strToCopy2 = window.location.href;
   let strToCopy3 = '=HYPERLINK("' + strToCopy2 + '","' + strToCopy1 +'")';
   let x = document.createElement("TEXTAREA");
   // x.value = strToCopy1 + '\n' + strToCopy2 + '\n' + strToCopy3;
   if (createHyperlink === 3)
   {
      x.value = strToCopy3;
   }
   else if (createHyperlink === 2)
   {
      x.value = strToCopy1 + '\n' + strToCopy2 + '\n' + strToCopy3;
   }
   else if (createHyperlink === 4)
   {
      x.value = strToCopy2;
   }
   else if (createHyperlink === 5)
   {
      x.value = '[teamwork task](' + strToCopy2 + ')'
   }


   document.body.append(x);
   x.select()
   document.execCommand("copy");
   x.remove();
}slayit(0);