module.exports = function (config) {
    config.set({
        browsers: ['PhantomJS'],
        files: [
            'tests.bundle.js'
        ],
        frameworks: ['jasmine'],
        plugins: [
            require('karma-webpack'),
            'karma-spec-reporter',
            'karma-jasmine',
            'karma-phantomjs-launcher'
        ],
        preprocessors: {
            'tests.bundle.js': 'webpack'
        },
        reporters: ['spec'],
        singleRun: true,
        webpack: require('../webpack.config'),
        webpackMiddleware: {noInfo: true}
    });
};
