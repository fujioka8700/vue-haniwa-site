'use strict';

// イベントリスナーを管理するマップ
const listenersMap = new WeakMap();

class EventEmitter {
    addListener(listener) {
        // this にひもづいたリスナーの配列を取得する
        const listeners = listenersMap.get(this) ?? [];
        const newListeners = listeners.concat(listener);
        // this をキーに新しい配列をセットする
        listenersMap.set(this, newListeners);
    }
}

// 上記クラスの実行例

let eventEmitter = new EventEmitter();

// イベントリスナーを追加する
eventEmitter.addListener(() => {
    console.log("イベントが発火しました");
});

eventEmitter.addListener(() => {
    console.log("イベントが発火しました");
});

// eventEmitterへの参照がなくなったことで自動的にイベントリスナーが解放される
eventEmitter = null;

console.log(listenersMap);