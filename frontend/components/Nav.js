import Link from 'next/link'
import NavStyles from'./styles/NavStyles'


const Nav = (props) => {
  return (
<NavStyles>
<Link href="items"><a>Items</a></Link>
<Link href="/sell"><a>Sell</a></Link>
<Link href="/singup"><a>Singup</a></Link>
<Link href="/orders"><a>Orders</a></Link>
<Link href="me"><a>Account</a></Link>
<Link href=""><a></a></Link>

    </NavStyles>


  );
};

export default Nav;
