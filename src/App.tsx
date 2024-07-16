import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card } from './components/card';
import { Layout } from './components/layout';

function App() {
  return (
    <>
    <Layout>
      <Card 
        id={1} 
        details='foda' 
        paragraph='legal'
      />
      <Card 
        id={2}
        paragraph='ts para frontend'
        details='legal'
        />
    </Layout>
    </>
  );
}

export default App;
