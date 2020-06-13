import React from 'react'
import HomePage from './homePage'
import renderer from 'react-test-renderer'

it('homePage renders correctly', () => {
  const component = renderer.create(<HomePage />).toJSON()
  expect(component).toMatchSnapshot()
})