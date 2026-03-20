import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, Sky, Stage } from '@react-three/drei'
import { Suspense } from 'react';
import { Isla } from './pages/Isla';

function App() {
  return (

    <div className='h-dvh'>
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <Suspense fallback={null}> {/* Para manejar la carga del archivo */}

        {/* <Environment 
         files="/grasslands_sunset_1k.exr" 
         background // Esto hace que se vea de fondo, no solo que ilumine
         /> */}

           <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />

          <OrbitControls
           enableZoom={false} // Evita zoom infinito al hacer scroll
           makeDefault
            autoRotate
            autoRotateSpeed={5}
         />

         <Sky
        distance={450000} // Distancia de la esfera del cielo
        sunPosition={[0, 1, 0]} // Posición del sol (puedes animarlo para atardeceres)
        inclination={0}
        azimuth={0.25}
/>

           <Isla/>
        
      </Suspense>
      <OrbitControls makeDefault />
    </Canvas>
    </div>
  )
}
export default App;