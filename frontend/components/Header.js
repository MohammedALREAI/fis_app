import Nav from './Nav'
import styled from 'styled-components';
import Router from "next/router";
import Link from 'next/link'
import Nprogress from'nprogress'


// style by used styled Component
const Logo = styled.h1`
font-size:4rem;
margin-left:2rem;
position:relative;
z-index:2;
transform:skew(-7deg);
a{
  padding:0.5rem 1rem;
color:white;
  background:${props.theme.red};
  text-transform:uppercase;
  text-decoration:none;
}
@media (max-width:1300px) {
  margin:0;
  text-align:center;


}
`;

const styleHeader = styled.header`
.sub-bar{}
.bar{

  border-bottom:10px solid ${props => props.theme.black};
  display:grid;
grid-template-columns:auto 1fr;
justify-content:space-between;
align-items:stretch;
@media (max-width:13000px) {
  grid-template-columns:1fr;
  justify-content:center

}
}
`;
//this to controll for the Route handalle in next

Router.onRouteChangeStart = () => {
//this to make make progress is start from 0
  Nprogress.start();

}
Router.onRouteChangeComplete = () => {
  Nprogress.done()
}
//handale the router error
Router.onRouteChangeError = () => {
  Nprogress.done();
  console.log("error")

}



const Header = (props) => {


  return (
    <styleHeader>
      <div className="bar">
        <Logo><Link href="/"></Link><a>Sick fits</a></Logo>
          <Nav/>
      </div>
      <div className="sub-bar"></div>
    </styleHeader>
  )
};
export default Header;
