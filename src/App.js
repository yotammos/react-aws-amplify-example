import React from 'react';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      <h1>Hello from v2!</h1>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
