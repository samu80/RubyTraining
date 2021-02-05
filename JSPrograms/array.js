
function displayArray(arr1,arr2)
{
    var i=0,j=0,k=0;
    arr3=[];
    while(i<(arr1.length))
    {
    	var flg=0;
        j=0;
        while(j<(arr2.length))
        {
            if(arr1[i]==arr2[j]){
                flg=1;
                break;}
            j++;
        }
        if(flg!=1){
            arr3[k]=arr1[i];
            k++;}
        i++;

    }
    console.log(arr3);
}

displayArray([1,4,6],[5,1,4]);


//Another method:
var arr3=[1,2,3];
var arr4=[2];
console.log(arr3.filter(i => !arr4.includes(i)));
