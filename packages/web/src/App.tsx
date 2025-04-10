import React from 'react';
import { sum, formatDate } from '@monorepo/common';

function App() {
  const result = sum(5, 3);
  const today = formatDate(new Date());

  return (
    <div>
      <h1>Web App</h1>
      <p>Sum result: {result}</p>
      <p>Today's date: {today}</p>
    </div>
  );
}

export default App;