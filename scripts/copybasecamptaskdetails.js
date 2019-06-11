function slayit()
{
   let strToCopy1 = document.querySelectorAll('.content_for_perma')[0].textContent;
   let strToCopy2 = window.location.href;
   let x = document.createElement("TEXTAREA");
   x.value = strToCopy1 + '\n' + strToCopy2;
   document.body.append(x);
   x.select()
   document.execCommand("copy");
   x.remove();
}slayit();