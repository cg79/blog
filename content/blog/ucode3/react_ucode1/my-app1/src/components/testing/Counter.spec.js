import React from "react";
import { shallow, configure } from 'enzyme';
import Counter from './Counter';
import Adapter from 'enzyme-adapter-react-16'

configure({
  adapter: new Adapter()
})

function setup(value = 0) {
  const actions = {
    onIncrement: jest.fn(),
    onDecrement: jest.fn(),
    onWordChange: jest.fn(),
  }
  const component = shallow(
    <Counter value = {value} {...actions}/>
  )

  return {
    component: component,
    actions: actions,
    buttons: component.find('button'),
    p: component.find('p')
  }
}

describe('counter component', () => {
  it('first button should call onIncrement', () => {
    const {
      buttons, actions
    } = setup()
    buttons.at(0).simulate('click')
    expect(actions.onIncrement).toBeCalled()
  })
  it('second button should call onDecrement', () => {
    const {
      buttons, actions
    } = setup()
    buttons.at(1).simulate('click')
    expect(actions.onDecrement).toBeCalled()
  })
  it('third button should not call onIncrement if the counter is even', () => {
    const { buttons, actions } = setup(42)
    buttons.at(2).simulate('click')
    expect(actions.onIncrement).not.toBeCalled()
  })
  it('fourth button should call onIncrement after 1 second', (done) => {
    const { buttons, actions } = setup()
    buttons.at(3).simulate('click')
    setTimeout(() => {
      expect(actions.onIncrement).toBeCalled()
      done()
    }, 1000)
  })
  it('fifth button should call onChange', () => {
    const { buttons, actions } = setup()
    buttons.at(4).simulate('click')
    expect(actions.onWordChange).toBeCalled()
  })
})
