import { mount } from 'cypress/react18';
import MonumentsList from './MonumentsList'

describe('<MonumentsList />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    mount(<MonumentsList testId='testId' />)
  })
})