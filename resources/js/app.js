import { takeWhile } from 'lodash';
import Vue from 'vue';
import VueRouter from 'vue-router';

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

Vue.use(VueRouter);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
// add this line

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Vueの確認
console.assert(typeof Vue !== "undefined");

// サンプルデータ
const userData = [
    {
        id: 1,
        name: 'Takuya Tejima',
        description: '東南アジアで働くエンジニアです。'
    },
    {
        id: 2,
        name: 'Yohei Noda',
        description: 'アウトドア・フットサルが趣味のエンジニアです。'
    }
];

// 表示する時間を調整
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// ユーザー一覧の取得
const getUsers = function(callback) {
    setTimeout(() => {
        callback(null, userData)
    }, getRandomInt(3) * 1000);   
}

// ユーザー詳細の取得
const getUser = function(userId, callback) {
    setTimeout(function() {
        const filterdUsers = userData.filter(function(user) {
            return user.id === parseInt(userId, 10);
        });
        callback(null, filterdUsers && filterdUsers[0]);
    }, getRandomInt(3) * 1000);
};

// 新規ユーザー登録
const postUser = function(params, callback) {
    setTimeout(function() {
        params.id = userData.length + 1;
        userData.push(params);
        callback();
    }, getRandomInt(3) * 1000);
};

// ユーザー一覧のコンポーネント
const UserList = {
    template: '#user-list',
    data: function() {
        return {
            loading: false,
            users: function() { return [] }, // 初期値の空配列
            error: null
        }
    },
    // 初期時にデータを取得する
    created: function() {
        this.fetchData();
    },
    // $routeの変更をwatchすることでルーティングが変更されたときに再度データを取得
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        fetchData: function() {
            this.loading = true;
            getUsers(function(err, users) {
                this.loading = false;
                if (err) {
                    this.error = err.toString();
                } else {
                    this.users = users;
                }
            }.bind(this));
        }   
    }
};

// 詳細ページのコンポーネント
const UserDetail = {
    template: '#user-detail',
    data: function() {
        return {
            loading: false,
            user: null,
            error: null
        }
    },
    created: function() {
        this.fetchData();
    },
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        fetchData: function() {
            this.loading = true;
            getUser(this.$route.params.userId, function(err, user) {
                this.loading = false;
                if (err) {
                    this.error = err.toString();
                } else {
                    this.user = user;
                }
            }.bind(this));
        }
    }
};

// 新規ユーザー作成コンポーネント
const UserCreate = {
    template: '#user-create',
    data: function() {
        return {
            error: null,
            user: this.defaultUser(),
            sending: false
        }
    },
    created: function() {

    },
    methods: {
        defaultUser: function() {
            return {
                name: '',
                description: ''
            }  
        },
        createUser: function() {
            if (this.user.name.trim() === '') {
                this.error = '名前は必須です。';
                return;
            }
            if (this.user.description.trim() === '') {
                this.error = '説明文は必須です。';
                return;
            }
            this.sending = true;
            postUser(this.user, function(err) {
                this.sending = false;
                if (err) {
                    this.error = err.toString();
                    return;
                } else {
                    this.error = null;
                    this.user = this.defaultUser();
                    alert('新規ユーザーが登録されました。');
                    this.$router.push('/users');
                }
            }.bind(this));
        }
    }
};

// 認証用モジュール Auth
const Auth = {
    login: function(email, pass, cb) {
        if (email === 'vue@example.com' && pass === 'vue') {
            localStorage.token = Math.random().toString(36).substring(7);
            cb(true);
        } else {
            cb(false);
        }
    },
    loggedIn: function() {
        return localStorage.token;
    },
    logout: function() {
        delete localStorage.token;
    }
};

// ログインコンポーネント
const Login = {
    template: '#login',
    data: function() {
        return {
            email: 'vue@example.com',
            pass: 'vue',
            error: false
        }
    },
    methods: {
        login: function() {
            Auth.login(this.email, this.pass, function(loggedIn) {
                if (!loggedIn) {
                    this.error = true;
                } else {
                    this.$router.replace(this.$route.query.redirect || '/top');
                }
            }.bind(this));
        }
    }
};

// ユーザー詳細ページのコンポーネント
const User = {
    template:
    '<div>'+
        '<h2>ユーザーIDは {{ $route.params.userId }} です。</h2>'+
        '<div>'+
            '<router-link v-bind:to="\'/user/\' + $route.params.userId + \'/profile\'">ユーザーのプロフィールページを見る</router-link>'+
        '</div>'+
        '<div>'+
            '<router-link v-bind:to="\'/user/\' + $route.params.userId + \'/posts\'">ユーザーの投稿ページを見る</router-link>'+
        '</div>'+
        '<router-view></router-view>'+
    '</div>'
};

// ユーザー詳細ページ内で部分的に表示されるプロフィールページ
const UserProfile = {
    template:
    '<div>'+
        '<h3>こちらはユーザー {{ $route.params.userId }} のプロフィールページです。</h3>'+
    '</div>'
}

// ユーザー詳細ページ内で部分的に表示される投稿ページ
const UserPosts = {
    template:
    '<div>'+
        '<h3>こちらはユーザー {{ $route.params.userId }} の投稿ページです。</h3>'+
    '</div>'
}

const router = new VueRouter({
    routes: [
        {
            path: '/top',
            component: {
                template: '<div>トップページです。</div>'
            }
        },
        {
            path: '/user/:userId',
            component: User,
            children: [
                {
                    // /user/userId/profileがマッチした時に
                    // UserProfileコンポーネントはUserコンポーネントの<router-view>内部でレンダリングされる。
                    path: 'profile',
                    component: UserProfile
                },
                {
                    // /user/userId/postsがマッチした時に
                    // UserPostsコンポーネントはUserコンポーネントの<router-view>内部でレンダリングされる。
                    path: 'posts',
                    component: UserPosts
                }
            ]
        },
        {
            path: '/users',
            component: UserList
        },
        {
            path: '/users/new',
            component: UserCreate,
            beforeEnter: function(to, from, next) {
                // 認証されていない状態でアクセスした時はloginページに遷移する
                if (!Auth.loggedIn()) {
                    next({
                        path: '/login',
                        query: { redirect: to.fullPath }
                    });
                } else {
                    // 認証済みであればそのまま新規ユーザー作成ページへ進む
                    next();
                }
            }
        },
        {
            path: '/users/:userId',
            component: UserDetail
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/logout',
            beforeEnter: function(to, from, next) {
                Auth.logout();
                next('/top');
            }
        }
    ]
});

const app = new Vue({
    data: {
        message: 'メッセージ'
    },
    router: router
}).$mount('#app');
