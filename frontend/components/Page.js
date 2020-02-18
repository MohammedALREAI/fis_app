import React, { Component } from 'react'
import Styled,{ThemeProvider ,createGlobalStyle} from 'styled-components'
import Header from'./Header'
import Meta from './Meta'



const GlobalStyle = createGlobalStyle`
 @font-face {
   font-family:radnika_next ;
   src: url('/static/radnikanext-medium-webfont.woff2');
    format:('woff2');
    font-weight:normal;
    font-style:normal;
 }
  html {
box-sizing:border-box;
font-size:10px;

  }
  *,*:before,*:after{
    box-sizing:inherit
  }
  body{
    margin:0;
    padding:0;
    font-size: 1.5rem;
       font-family:radnika_next ;


  }
  a{
    text-decoration:none;
    color:${props=>props.theme.black}
  }
`

const StyledPage = styled.div`
background:'white';
color:${props=>props.theme.black};
`;
const Inner = Styled.div`
max-width:${props=>props.theme.maxWidth};
padding:2rem;
margin:0 auto;
background:${props=>props.theme.red};

`;

const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

export default class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle>
      <StyledPage>
        <Meta/>
        <Header />
        <Inner>

        {this.props.children}
        </Inner>

      </StyledPage>

        </GlobalStyle>

      </ThemeProvider>
    )
  }
}

