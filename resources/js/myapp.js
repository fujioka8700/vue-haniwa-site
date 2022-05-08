"use str3ict";

const str = "ここに文字列";
const newStr = str.replace("文字列", "String");
console.log(newStr); // => ここにString

// 検索対象となる文字列
const str2 = "にわにはにわにわとりがいる";
// 文字列を指定した場合は、最初に一致したものだけが置換される
console.log(str2.replace("にわ", "niwa")); // => "niwaにはにわにわとりがいる"
// `g`フラグなし正規表現の場合は、最初に一致したものだけが置換される
console.log(str2.replace(/にわ/, "niwa")); // => "niwaにはにわにわとりがいる"
// `g`フラグあり正規表現の場合は、繰り返し置換を行う
console.log(str2.replace(/にわ/g, "niwa")); // => "niwaにはniwaniwaとりがいる"

// 検索対象となる文字列
const str3 = "???";
// replaceメソッドに文字列を指定した場合は、最初に一致したものだけが置換される
console.log(str3.replace("?", "!")); // => "!??"
// replaceAllメソッドに文字列を指定した場合は、一致したものがすべて置換される
console.log(str3.replaceAll("?", "!")); // => "!!!"
// replaceメソッドの場合は、正規表現の特殊文字はエスケープが必要となる
console.log(str3.replace(/\?/g, "!")); // => "!!!"
// replaceAllメソッドにも正規表現を渡せるが、この場合はエスケープが必要となるためreplaceと同じ
console.log(str3.replaceAll(/\?/g, "!")); // => "!!!"


function toDateJa(dateString) {
    // パターンにマッチしたときのみ、コールバック関数で置換処理が行われる
    return dateString.replace(/(\d{4})-(\d{2})-(\d{2})/g, (all, year, month, day) => {
        // `all`には、マッチした文字列全体が入っているが今回は利用しない
        // `all`が次の返す値で置換されるイメージ
        return `${year}年${month}月${day}日`;
    });
}
// マッチしない文字列の場合は、そのままの文字列が返る
console.log(toDateJa("本日ハ晴天ナリ")); // => "本日ハ晴天ナリ"
// マッチした場合は置換した結果を返す
console.log(toDateJa("今日は2017-03-01です")); // => "今日は2017年03月01日です"