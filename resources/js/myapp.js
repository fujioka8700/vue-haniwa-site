// タイマー
let doSetInterval = function() {
   let dataDiv = document.getElementById("dateDiv");

   // Date オブジェクトは、
   // 単一の瞬間の時刻をプラットフォームに依存しない形式で表します。 
   let d = new Date();
   let dateString = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
   
   dataDiv.innerHTML = dateString;
}

// 一定の遅延間隔を置いて関数やコードスニペットを繰り返し呼び出します。
setInterval(doSetInterval, 1000);