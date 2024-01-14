import React, { useState } from 'react';
import HomePage from './components/HomePage';
import TryNowPage from './components/TryNowPage';
import Browse from './components/Browse';
import About from './components/About';

function App() {
  const [page, setPage] = useState('home'); 
  const navigateToPage = (pageName) => {
    setPage(pageName);
  };

  let content;

  if (page === 'try-now') {
    content = <TryNowPage />;
  } 
  else if(page ==='browse'){
    content = <Browse/>
  }
  else if(page ==='about'){
    content = <About/>
  }
  else {
    content = <HomePage navigateToPage={navigateToPage} />;
  }

  return (
    <div>
      {content}
    </div>
  );
}

export default App;
