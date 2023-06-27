var a="0101";
var sum = 0;
var j=0;
for(var i =a.length-1;i>=0;i--)
{
    var b=parseInt(a[i]); 
    sum =sum+b*(2**j);
    j++;
}
console.log(sum);