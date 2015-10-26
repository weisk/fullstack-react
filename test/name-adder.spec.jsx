var React = require('react'),
    ReactDom = require('react-dom'),
    TestUtils = require('react/lib/ReactTestUtils'),
    NameAdder = require('../name-adder.jsx'),
    Falcor = require('falcor')

describe('name-adder tests', () => {
    it('saves new messages', () => {
        var model = jasmine.createSpyObj('model', ['call']),
            onNameAdded = () => {},
            nameAdder = TestUtils.renderIntoDocument(<NameAdder onAdded={onNameAdded}/>),
            button = TestUtils.findRenderedDOMComponentWithTag(nameAdder, 'button'),
            input = nameAdder.refs.input

        NameAdder.__Rewire__('model', model)
        model.call.and.returnValue({then: (success) => success()})

        input.value = 'new name'
        button.click()

        expect(model.call).toHaveBeenCalledWith(['names', 'add'], ['new name'], ['name'])
    })
})
