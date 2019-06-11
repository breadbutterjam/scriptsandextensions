function slayit()
{
   let x = document.createElement("TEXTAREA");x.value = document.querySelectorAll('.content_for_perma')[0].textContent + '\n' + window.location.href;document.body.append(x);x.select();document.execCommand("copy");x.remove();
}slayit();