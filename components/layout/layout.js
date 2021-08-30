import Navbar from '../navbar/navbar.js';
import Footer from '../footer/footer.js'

export default function Layout({ children }) {
  return (
    <div style={{backgroundColor: '#f1f1f6'}}>
      <Navbar />
        {children}
      <Footer />
    </div>
  )
}