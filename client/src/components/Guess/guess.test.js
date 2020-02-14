const {shallow, mount} = require('enzyme')
import {Guess} from './index.jsx'
const {render, fireEvent} = require('@testing-library/react')

describe('should test for Guess Component', () => {

  it('should show one header', () => {
    const component = shallow(<Guess/>)
    console.log(component.debug())
    const wrapper = component.find('.guessComponent')
    expect(wrapper.length).toBe(1)
  })
})