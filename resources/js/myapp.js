'use strict';

// getTimezoneOffsetはインスタンスメソッドなので、インスタンスが必要
const now = new Date();

// 時間単位にしたタイムゾーンオフセット
const timezoneOffsetInHours = now.getTimezoneOffset() / 60;

// UTCの現在の時間を計算できる
console.log(`Hours in UTC: ${now.getHours() + timezoneOffsetInHours}`);