
import { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export function SchoolGlobe() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    let cleanup: (() => void) | undefined;
    
    const loadGlobe = async () => {
      try {
        // Create scene, camera and renderer
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xf8f9fa);
        
        const camera = new THREE.PerspectiveCamera(
          60, 
          containerRef.current!.clientWidth / containerRef.current!.clientHeight,
          0.1,
          1000
        );
        camera.position.z = 2;
        
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(containerRef.current!.clientWidth, containerRef.current!.clientHeight);
        containerRef.current!.appendChild(renderer.domElement);
        
        // Add lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);
        
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(1, 1, 1);
        scene.add(directionalLight);
        
        // Create Earth globe
        const earthGeometry = new THREE.SphereGeometry(1, 64, 64);
        const earthMaterial = new THREE.MeshPhongMaterial({
          map: new THREE.TextureLoader().load(
            'https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg'
          ),
          bumpMap: new THREE.TextureLoader().load(
            'https://unpkg.com/three-globe/example/img/earth-topology.png'
          ),
          bumpScale: 0.05,
          specularMap: new THREE.TextureLoader().load(
            'https://unpkg.com/three-globe/example/img/earth-water.png'
          ),
          specular: new THREE.Color('grey'),
          shininess: 10
        });
        
        const earth = new THREE.Mesh(earthGeometry, earthMaterial);
        scene.add(earth);
        
        // Add orbit controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableZoom = false;
        controls.enablePan = false;
        controls.rotateSpeed = 0.5;
        
        // Add marker for OAV location (assuming it's in Odisha, India)
        // Approximate coordinates for Odisha: 20.9517° N, 85.0985° E
        const oavMarker = createLocationMarker();
        positionMarker(oavMarker, 20.9517, 85.0985);
        scene.add(oavMarker);
        
        // Animation loop
        const animate = () => {
          earth.rotation.y += 0.001;
          renderer.render(scene, camera);
          requestAnimationFrame(animate);
        };
        
        animate();
        
        // Handle window resize
        const handleResize = () => {
          if (!containerRef.current) return;
          camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
        };
        
        window.addEventListener('resize', handleResize);
        
        // Create marker for location
        function createLocationMarker() {
          const markerGeometry = new THREE.SphereGeometry(0.02, 16, 16);
          // Fix: Changed from MeshBasicMaterial with emissive to MeshPhongMaterial
          // since emissive is only available in MeshPhongMaterial, MeshStandardMaterial, etc.
          const markerMaterial = new THREE.MeshPhongMaterial({ 
            color: 0xff5500,
            emissive: 0xff0000,
            emissiveIntensity: 0.5
          });
          return new THREE.Mesh(markerGeometry, markerMaterial);
        }
        
        // Position marker on globe by lat/lon
        function positionMarker(marker: THREE.Mesh, lat: number, lon: number) {
          // Convert latitude and longitude to radians
          const phi = (90 - lat) * (Math.PI / 180);
          const theta = (lon + 180) * (Math.PI / 180);
          
          // Calculate position on sphere
          const x = -(Math.sin(phi) * Math.cos(theta)) * 1.01; // Slightly outside globe
          const y = Math.cos(phi) * 1.01;
          const z = Math.sin(phi) * Math.sin(theta) * 1.01;
          
          marker.position.set(x, y, z);
        }
        
        // Cleanup function
        cleanup = () => {
          if (containerRef.current) {
            containerRef.current.removeChild(renderer.domElement);
          }
          window.removeEventListener('resize', handleResize);
          
          // Dispose resources
          earthGeometry.dispose();
          earthMaterial.dispose();
          renderer.dispose();
        };
      } catch (error) {
        console.error("Failed to load 3D globe:", error);
      }
    };
    
    loadGlobe();
    
    return () => {
      if (cleanup) cleanup();
    };
  }, []);
  
  return (
    <Card className="w-full h-[400px] overflow-hidden">
      <div ref={containerRef} className="w-full h-full" />
    </Card>
  );
}
