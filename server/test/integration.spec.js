var webdriverio = require('webdriverio'),
    options = {}

if (process.env.CI) {
    options = {
        desiredCapabilities: {
            browserName: process.env.BROWSER,
            version: process.env.VERSION,
            platform: process.env.PLATFORM
        },
        host: 'ondemand.saucelabs.com',
        port: 80,
        user: process.env.SAUCE_USERNAME,
        key: process.env.SAUCE_ACCESS_KEY
    }
}

describe('name adder integration tests', () => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000

    beforeEach(() => {
        this.browser = webdriverio.remote(options).init()
    })

    it ('adds a name', done => {
        var date = Date.now(),
            nameCount

        this.browser.url('localhost:9090')
            .waitForExist('li', 5000)
            .elements('li').then(elements => nameCount = elements.value.length)
            .setValue('input', date)
            .getValue('input').then(value => expect(parseInt(value)).toBe(date))
            .click('button')
            .waitForExist(`li=${date}`, 5000)
            .elements('li').then(elements => expect(elements.value.length).toBe(nameCount+1))
            .end()
            .call(done)
    })
})
