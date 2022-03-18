const { join } = require('path')

exports.config = {
    hostname:'localhost',
    port: 4723,
   // services: ['appium'],
    path: '/wd/hub',
    specs:[
        './test/specs/**/*.js'
    ],
    framework: 'mocha',
    featureFlags: {
        specFiltering: true
    },
    capabilities: [{
        "platformName": "Android",
        "platformVersion": "12.0",
        "deviceName": "TestesDrive",
        "automationName": "UiAutomator2",
        "app": join(process.cwd(), './app/android/WebDriverIO.apk'),
        "appWaitActivity": "com.wdiodemoapp.MainActivity"
        
    }],

    waitForTimeout: 40000,
    mochaOpts: {
        timeout: 500000
    }
}
