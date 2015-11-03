var webdriverio = require('webdriverio'),
    options = {
        desiredCapabilities: {
            browserName: 'firefox'
    }
}

describe('name adder integration tests', () => {
    beforeEach(() => {
        this.browser = webdriverio.remote(options).init()
    })

    it ('adds a name', done => {
        var date = Date.now(),
            nameCount

        this.browser.url('localhost:9090')
            .elements('li').then(elements => nameCount = elements.value.length)
            .setValue('input', date)
            .getValue('input').then(value => expect(parseInt(value)).toBe(date))
            .click('button')
            .getText(`li=${date}`).then(text => expect(parseInt(text)).toBe(date))
            .elements('li').then(elements => expect(elements.value.length).toBe(nameCount+1))
            .end()
            .call(done)
    })
})
