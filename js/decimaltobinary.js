var a = 8;
var sum="";
while(a>0)
{
    var c=a%2;
    sum=sum+c.toString();
    a=Math.floor(a/2);
}
var d=sum.length;
var e="";
for(var i=d-1;i>=0;i--)
{
    e=e+(sum[i])
}
console.log(e