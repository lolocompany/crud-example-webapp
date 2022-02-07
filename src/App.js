import React from 'react';
import { LoloAdmin, LoloResource } from '@lolocompany/react-admin-lolo';

function App() {
  return (
    <LoloAdmin
      apiUrl={process.env.REACT_APP_API_URL}
      title='CRUD example'
    >
      <LoloResource name='directors' />
      <LoloResource name='movies' />
    </LoloAdmin>
  );
}

export default App;