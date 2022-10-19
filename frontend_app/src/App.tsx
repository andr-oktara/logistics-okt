import React, { useEffect, useState } from 'react';
import './App.css';
import { loadMapApi } from './components/Map/loadMap';
import { Container } from '@mui/material';
import AppRoutes from './pages/AppRoutes';

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
      )}
    </Container>
  );
}

export default App;
