
import { Helmet } from 'react-helmet-async'

function Menu() {
  return (
    <div>
         <Helmet>
        <title>Hello World</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
        <h2>this is menu</h2>
    </div>
  )
}

export default Menu