'use strict';

class ConflicClass {
  constructor () {
    this.method =()=> {
      console.log("インスタンスオブジェクトのメソッド");
    }  
  }
  method() {
    console.log("プロトタイプメソッド");
  }
}

const conflic = new ConflicClass();
conflic.method();