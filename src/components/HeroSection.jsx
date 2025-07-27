import Sidebar from '../components/herosection/Sidebar'
import HeroSection from '../components/herosection/HeroSection'
import Offers from '../components/herosection/offers'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="flex gap-4">
        <Sidebar />
        <div className="flex-1">
          <HeroSection />
          <Offers />
        </div>
      </div>
    </div>
  )
}

export default App;
