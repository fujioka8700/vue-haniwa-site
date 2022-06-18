require('./bootstrap');
import Vue from 'vue';

Vue.component('fruits-list-title', {
  template: '<h1>フルーツ一覧</h1>'
});

Vue.component('fruits-list', {
  template: '<div><fruits-list-title></fruits-list-title></div>'
});

Vue.component('fruits-list-description', {
  template: '<p>季節の代表的なフルーツ一覧です。</p>'
});

Vue.component('fruits-list-table', {
  template: `
  <table>
        <tr>
            <th>季節</th>
            <th>フルーツ</th>
        </tr>
        <tr>
            <td>春</td>
            <td>イチゴ</td>
        </tr>
        <tr>
            <td>夏</td>
            <td>すいか</td>
        </tr>
        <tr>
            <td>秋</td>
            <td>ぶどう</td>
        </tr>
        <tr>
            <td>冬</td>
            <td>みかん</td>
        </tr>
    </table>
  `
});

const FruitsListSupplement = Vue.extend({
  template: '<p>甘さと酸味の融合で美味しいです。</p>'
});

new FruitsListSupplement().$mount('#fruits-list-supplement');

const vm = new Vue().$mount('#app');

window.vm = vm;

console.log(FruitsListSupplement)
console.log(new FruitsListSupplement())
