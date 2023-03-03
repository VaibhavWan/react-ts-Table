import * as React from 'react';
import { useState } from 'react';
import './style.css';
import DisplayFormDataInTable from './Componant/DisplayFormDataInTable';

export default function App() {
  return (
    <div className="container">
      <h3 className="p-3 text-center">React - Display a list of items</h3>
      <DisplayFormDataInTable />
    </div>
  );
}
