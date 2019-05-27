import Enzyme, { shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import 'jest-enzyme'

Enzyme.configure({ adapter: new Adapter() })

const shallowSnapshot = jsx => toJson(shallow(jsx))

window.API_URI = undefined
window.API_URI2 = undefined

global.shallow = shallow
global.render = render
global.mount = mount
global.toJson = toJson
global.shallowSnapshot = shallowSnapshot
