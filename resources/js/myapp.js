// テーブルの作成、行と列
let table;

function doCreateTable() {
   table = document.createElement("table");
   table.className = "tableClass";

   document.getElementById("div").appendChild(table);
}

function doCreateRow() {
   let rowNum = parseInt(document.getElementById("row").value);
   let colNum = parseInt(document.getElementById("col").value);

   for (let i = 1; i <= rowNum; i++) {
      // 指定された<table>に新しい行(<tr>)を挿入し、新しい行への参照を返す
      let row = table.insertRow(-1);
      for (let j = 1; j <= colNum; j++) {

         // 指定された<tr>に新しいcol(<td>)を挿入し、
         // 新しいcolへの参照を返す
         let cell = row.insertCell(-1);
         cell.innerHTML = `row: ${i}, col: ${j}`;
      }
   }
}

function doDeleteRow() {
   let rowNum = parseInt(document.getElementById("row").value);

   // 特定の行 (<tr>) をこの <table> から削除します。
   table.deleteRow(rowNum);
}

function doDeleteCol() {
   let colNum = parseInt(document.getElementById("col").value);
   let rows = table.rows;
   
   for (let i = 0; i < rows.length; i++) {
      // tr要素の行のセル(td要素、th要素)を削除します。
      rows[i].deleteCell(colNum);
   }
}

window.doCreateTable = doCreateTable;
window.doCreateRow = doCreateRow;
window.doDeleteRow = doDeleteRow;
window.doDeleteCol = doDeleteCol;