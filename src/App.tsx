import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei' 
import { Suspense } from 'react';
import { Isla } from './pages/Isla';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroText from './components/HeroText';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 w-full font-sans">
      
      {}
      <Header />
      
      {}
      <main className="flex-grow w-full flex flex-col md:flex-row items-center justify-between gap-8 p-6 md:p-12">
        
        {}
        <div className="flex-1 w-full max-w-2xl">
          <HeroText />
        </div>

        {}
        <div className="flex-1 w-full h-[600px] border-2 border-slate-200 rounded-3xl bg-white shadow-2xl overflow-hidden">
          
          <Canvas camera={{ position: [0, 5, 30], fov: 45 }}>
            <Suspense fallback={null}>
              
              {}
              {}

              <Environment 
                files="/grasslands_sunset_1k.exr" 
                background 
              />

              {}
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 15, 10]} intensity={1} />

              {}
              <OrbitControls
                enableZoom={true} 
                makeDefault
                autoRotate
                autoRotateSpeed={0.5}
              />

              <Isla />
              
            </Suspense>
          </Canvas>
        </div>
      </main>

      {}
      <Footer />
    </div>
  )
}
export default App;