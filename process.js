//console.log(process.argv);
var ar=process.argv;
var sum=0;
for (var i=2; i<ar.length; i++){
    //console.log(ar[i]);
    sum += Number(ar[i]);
}
console.log(sum);
//return sum;