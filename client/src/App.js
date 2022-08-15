import React from 'react';
import FormComponent from './components/FormComponent/FormComponent'
import VisibleTelephoneList from './containers/TableTelephones'

function App() {
  return (
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: '100px' }}>
        <FormComponent />
        <VisibleTelephoneList />
      </div>
  );
}

export default App;
