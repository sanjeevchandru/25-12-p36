document.write("42. to find unique elements in two arrays."+"<br>");
document.write("two array's are [1, 2, 3], [100, 2, 1, 10]"+"<br>");
function test42(arr1,arr2){
    arr1=arr1.toString().split(",");
    arr2=arr2.toString().split(",");
    var x=arr1.concat(arr2);
    var y=[];
    var obj={};
    for(let i=0;i<x.length;i++){
        obj[x[i]]=0;
    }
    for(i in  obj){
        y.push(i);
    }
    return y;
}
document.write(test42([1, 2, 3], [100, 2, 1, 10])+"<br>");