function SlayIt()
{
strCopy = "";
a = document.getElementsByClassName('todos')[1].children
data = [];
for (i=0; i<a.length; i++)
{
	elem = a[i].children[1].children[0].children[1].children[0];
	todotitle = elem.textContent.trim();
	todolink = elem.href;
	data.push(todotitle)
	data.push(todolink)
	strCopy += todotitle + '\n' + todolink + '\n';
	
}

let x = document.createElement("TEXTAREA");
x.value = strCopy
document.body.append(x);
x.select()
document.execCommand("copy");
x.remove();
}SlayIt();