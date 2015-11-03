module.exports = function (config) {
    config.set({
        basePath: '../',
        browsers: ['PhantomJS'],
        files: [
            'node_modules/es5-shim/es5-shim.js', // only used by PhantomJS 1.x
            'app/test/tests.bundle.js'
        ],
        frameworks: ['jasmine'],
        plugins: [
            require('karma-webpack'),
            'karma-spec-reporter',
            'karma-jasmine',
            'karma-phantomjs-launcher'
        ],
        preprocessors: {
            'app/test/tests.bundle.js': 'webpack'
        },
        reporters: ['spec'],
        singleRun: true,
        webpack: require('./webpack.config'),
        webpackMiddleware: {noInfo: true}
    });
};
