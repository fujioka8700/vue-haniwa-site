'use strict';

// ショッピングカートを表現するクラス
class ShoppingCart {
    constructor() {
        // 商品とその数を持つマップ
        this.items = new Map();
    }
    // カートに商品を追加する
    addItem(item) {
        // `item`がない場合は`undefined`を返すため、Nullish coalescing演算子(`??`)を使いデフォルト値として`0`を設定する
        const count = this.items.get(item) ?? 0;
        this.items.set(item, count + 1);
    }
    // カート内の合計金額を返す
    getTotalPrice() {
        return Array.from(this.items).reduce((total, [item, count]) => {
            return total + item.price * count;
        }, 0);
    }
    // カートの中身を文字列にして返す
    toString() {
        return Array.from(this.items).map(([item, count]) => {
            return `${item.name}:${count}`;
        }).join(",");
    }
}
const shoppingCart = new ShoppingCart();

// 商品一覧
const shopItems = [
    { name: "みかん", price: 100 },
    { name: "リンゴ", price: 200 },
    { name: "梨", price: 500 },
];

// カートに商品を追加する
shoppingCart.addItem(shopItems[0]);
shoppingCart.addItem(shopItems[0]);
shoppingCart.addItem(shopItems[1]);
shoppingCart.addItem(shopItems[1]);
shoppingCart.addItem(shopItems[1]);
shoppingCart.addItem(shopItems[2]);
shoppingCart.addItem(shopItems[2]);
shoppingCart.addItem(shopItems[2]);

// 合計金額を表示する
console.log(shoppingCart.getTotalPrice()); // => 400

// カートの中身を表示する
console.log(shoppingCart.toString()); // => "みかん:2,リンゴ:1"