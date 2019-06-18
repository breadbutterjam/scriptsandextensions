function slayit()
{
   let strToCopy1 = document.querySelectorAll('.task-name')[0].children[1].textContent.trim();
   let strToCopy2 = window.location.href;
   let strToCopy3 = '=HYPERLINK("' + strToCopy2 + '","' + strToCopy1 +'")';
   let x = document.createElement("TEXTAREA");
   // x.value = strToCopy1 + '\n' + strToCopy2 + '\n' + strToCopy3;
   x.value = strToCopy3;
   document.body.append(x);
   x.select()
   document.execCommand("copy");
   x.remove();
}slayit();