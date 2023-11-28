import { useState, useEffect } from 'react'; 
import Login from './Login';

const Home = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('loggedIn')) {
      setLoggedIn(true);
    }
  }, []);

  return (
    <div>
      {loggedIn ? <h1>Home</h1> : <Login />}
    </div>
  )
}

export default Home;