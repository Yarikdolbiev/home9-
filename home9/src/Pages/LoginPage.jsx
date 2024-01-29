

import {  useState } from 'react';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    
    console.log('Logged in as:', username);

    
    history.push('/home');
  };

  return (
    <div>
      <h2>Login Page</h2>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;

