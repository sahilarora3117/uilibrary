import React from 'react';
import { render } from '@testing-library/react';
import Headings from './Headings';
import renderer from 'react-test-renderer'
import Circles from './Circles';
import Header from './Header';
describe('snapshot testing', () => {
    test('HeadingComponent Test', () => {
        const renderedCompoonent = renderer.create(<Headings />).toJSON()
        expect(renderedCompoonent).toMatchSnapshot()
    })
    test('Graph Circular Test', () => {
        const renderedCompoonent = renderer.create(<Circles />).toJSON()
        expect(renderedCompoonent).toMatchSnapshot()
    })
    test('Header Test', () => {
        const renderedCompoonent = renderer.create(<Header />).toJSON()
        expect(renderedCompoonent).toMatchSnapshot()
    })
})
