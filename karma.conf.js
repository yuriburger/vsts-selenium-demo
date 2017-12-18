module.exports = function(config) {
    var webdriverConfig = {
        hostname: 'webdriver',
        port: 4444
    }

    config.set({
        hostname: 'agent',
        port: 9876,
        config: webdriverConfig,
        frameworks: ["jasmine", "karma-typescript"],
        files: [
            { pattern: "src/**/*.ts" }
        ],
        preprocessors: {
            "**/*.ts": ["karma-typescript"]
        },
        reporters: ["dots","karma-typescript"],
        browsers: ["ChromeSelenium"],
        customLaunchers: {
            ChromeSelenium: {
                base: 'WebDriver',
                config: webdriverConfig,
                browserName: 'ChromeSelenium',
                flags: []
            }
        },
        singleRun: true
    });
};