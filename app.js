var order = prompt("What do you want? coffee or tea?");

while( order != "coffee" && order != "tea" )
{
  order=prompt("What do you want? coffee or tea?");
}

var itemOrder="";

if(order == "coffee")
{
    var itemOrder='<img src="images/Coffee.jpg"/>';
}
else
{
    var itemOrder='<img src="images/Tea.png"/>';
}

var numofcups=prompt("How many cups you want ?");

var result="";

for(var i=0; i < numofcups; i++)
{
    result= result+itemOrder;
}

document.write(result);

document.write(numofcups)