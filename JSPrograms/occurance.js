
var arr=[2,6.2,2,8,"Samruddhi",0];
function search(arr,ele)
{
    var i=0;
    var occur=0;
    while(i<arr.length)
    {
        if(arr[i]==ele)
            occur++;
            i++;
    }
    console.log("Occcurance of Element " + ele+ " is:"+occur);
}

search(arr,"Samruddhi");




