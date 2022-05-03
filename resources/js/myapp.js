// 連絡先を追加(ノードをクローン)
function addContact() {
   let contact = document.getElementById("contact");

   // ノードの複製を返す
   // true の場合、ノードとそのサブツリーは、
   // 子ノードの Text にあるテキストも含め複製されます。
   let newNode = contact.cloneNode(true);
   
   let divObj = document.getElementById("div");
   divObj.appendChild(newNode);
}

function deleteNode(obj) {
   if (obj.parentNode.parentNode.childNodes.length > 3) {

      // Element.remove() は所属するツリーから要素を削除します
      obj.parentNode.remove(true);
   }
}

window.addContact = addContact;
window.deleteNode = deleteNode;