var n = 9;
var arr = [1,1,2,2,4,4,4,4,5];
// var arr = [2,2,2,2,4,4,4,4,5];
// var arr = [2,2,2,2,4,4,4,4,5];

 var maxx = Math.max(...arr);
 var maxF = Math.max(...arr);
 var minn = Math.max(...arr);
 var minF = Math.max(...arr);

for(var i = 0;    i<n;    i++)
  {
    if(arr[i] > maxF)
    {
      maxF = arr[i];
      maxx = arr[i];
      if(arr[i] == arr[maxx] && arr[i] < maxx)
        maxx = arr[i];
    }
  }
  for(var i = 0;i<n;i++)
  {
    if(arr[i] < minF)
    {
      minF = arr[i];
      minn = arr[i];
      if(arr[i] == arr[maxx] && arr[i] < minn)
        minn = arr[i];
    }
  }
console.log(maxx + "   "+ minn);


