import Layouts from '../Components/Layouts/Layouts'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <div data-theme='cupcake'>
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
  </div>
}

export default MyApp
