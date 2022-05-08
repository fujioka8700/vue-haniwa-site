"use str3ict";

// function tag(str) {
//     // 引数`str`にはただの文字列が渡ってくる
//     console.log(str); // => "template 0 literal 1"
// }
// // ()をつけて関数を呼び出す
// tag(`template ${0} literal ${1}`);

// function tag2(strings, ...values) {
//     // stringsは文字列のパーツが${}で区切られた配列となる
//     console.log(strings); // => ["template "," literal ",""]
//     // valuesには${}の評価値が順番に入る
//     console.log(values); // => [0, 1]
// }
// // ()をつけずにテンプレートを呼び出す
// tag2`template ${0} literal ${1}`;


// テンプレートを順番どおりに結合した文字列を返すタグ関数
function stringRaw(strings, ...values) {
    // resultの初期値はstrings[0]の値となる
    return strings.reduce((result, str, i) => {
        console.log("result:" + result);
        console.log("str:" + str);
        console.log([result, values[i - 1], str]);
        // それぞれループで次のような出力となる
        // 1度目: ["template ", 0, " literal "]
        // 2度目: ["template 0 literal ", 1, ""]
        return result + values[i - 1] + str;
    });
}
// 関数`テンプレートリテラル` という形で呼び出す
console.log(stringRaw`template ${0} literal ${10}`); // => "template 0 literal 1"

console.log(String.raw`template ${0} literal ${1}`); // => "template 0 literal 1"
