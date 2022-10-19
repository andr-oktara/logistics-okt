import React, { useEffect, useState } from 'react';
import './App.css';
import { loadMapApi } from './components/Map/loadMap';
import Map from './components/Map';
import { Container } from '@mui/material';
import AppRoutes from './pages/AppRoutes';
import NavBar from './components/NavBar';

function App() {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
      const googleMapScript = loadMapApi();
      googleMapScript.addEventListener('load', function () {
          setScriptLoaded(true);
      });
  }, []);

  return (
    <Container maxWidth="xl">
      {scriptLoaded && (
        <AppRoutes />
        // <Map
        //   mapType={google.maps.MapTypeId.ROADMAP}
        //   mapTypeControl={true}
        // />
      )}
    </Container>
  );
}

export default App;
