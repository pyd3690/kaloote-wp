import Navbar from '../navbar/navbar.js';
import Footer from '../footer/footer.js'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
        {children}
      <Footer />
    </>
  )
}