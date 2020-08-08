import { shallow } from 'enzyme'
import React from 'react'
import Loader from './'

describe('Components', () => {
  describe('Loader', () => {
    it('renders <Loader> as a snapshot', () => {
      const shallowLoader = shallow(
        <Loader />
      )
      expect(shallowLoader).toMatchSnapshot()
    })

    it('renders the loader gif', () => {
      const shallowLoader = shallow(
        <Loader />
      )
      expect(shallowLoader.find('img'))
        .toBeDefined()
    })
  })
})
