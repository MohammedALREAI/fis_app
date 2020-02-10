import App, { Container } from 'next/app'
 import Page from'../components/Page'





import React, { Component } from 'react'
import Page from '../components/Page';

export default class __app extends Component {
  render() {
    const { Component } = this.props;
    return (
      <Container>
        <Page>

      <Component/>
        </Page>
      </Container>
    )
  }
}

