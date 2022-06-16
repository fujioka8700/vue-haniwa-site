// 商品のリストをステートとして保持するモジュール
export default {
    state: {
        // 商品リスト
        products: [
            { id: 1, name: 'Apple' },
            { id: 2, name: 'Orange' },
            { id: 3, name: 'Banana' }
        ]
    },

    getters: {
        // 現在のページに紐付く商品を返したい
        currentProduct(state) {
            // 表示すべき商品のIDはストア内に無いため、
            // 対象の商品を探すことができない
            return state.products.find(product => {
                // return product.id === ???
            });
        }
    }
}