const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .js('resources/js/myapp.js', 'public/js')
    .vue()
    .sass('resources/sass/app.scss', 'public/css')
    .browserSync({
        proxy: {
            target: 'apache2',
        },
        files: [
            './resources/**/*',
            './public/**/*',
        ],
        notify: false,
        open: false,
        reloadOnRestart: true,
    });

if (mix.inProduction()) {
    mix.version();
}