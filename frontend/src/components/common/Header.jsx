import React from 'react';

export default function Header() {
  return (
    <header style={{padding: '1rem', borderBottom: '1px solid #eee'}}>
      <div style={{maxWidth: 980, margin: '0 auto', display: 'flex', alignItems: 'center', gap: '1rem'}}>
        <h1 style={{margin: 0, fontSize: '1.25rem'}}>Smart Health</h1>
        <nav style={{marginLeft: 'auto'}}>
          <a href="/" style={{marginRight: 12}}>Home</a>
          <a href="/login" style={{marginRight: 12}}>Login</a>
          <a href="/register">Register</a>
        </nav>
      </div>
    </header>
  );
}
