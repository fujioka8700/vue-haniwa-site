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
        currentProduct(state, getters, rootState) {
            const productId = Number(rootState.route.params.id);
            return state.products.find(product => {
                return product.id === productId;
            });
        }
    }
}