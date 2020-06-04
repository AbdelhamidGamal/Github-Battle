import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import ReposGrid from './ReposGrid';

const styles = {
  list: {
    textAlign: 'center',
  },
  button: {
    border: 'none',
    background: 'none',
    fontSize: '1rem',
    color: 'red',
    fontWeight: 'bold',
    padding: '1rem',
  },
};

function Popular() {
  const [state, setstate] = useState([]);

  const getRepos = async (query) => {
    const res = await fetch(
      `https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc`
    );
    const data = await res.json();
    console.log(data);
    setstate(data.items);
  };

  useEffect(() => {
    getRepos('all');
  }, []);

  console.log(state);

  return (
    <>
      <Nav />
      <div style={styles.list}>
        <button style={styles.button} onClick={() => getRepos('all')}>
          All
        </button>
        <button style={styles.button} onClick={() => getRepos('javascript')}>
          JavaScript
        </button>
        <button style={styles.button} onClick={() => getRepos('ruby')}>
          Ruby
        </button>
        <button style={styles.button} onClick={() => getRepos('java')}>
          Java
        </button>
        <button style={styles.button} onClick={() => getRepos('css')}>
          CSS
        </button>
        <button style={styles.button} onClick={() => getRepos('python')}>
          Python
        </button>
        <button style={styles.button} onClick={() => getRepos('php')}>
          PHP
        </button>
        <button style={styles.button} onClick={() => getRepos('shell')}>
          Shell
        </button>
      </div>
      {state && <ReposGrid reposInfo={state} />}
    </>
  );
}

export default Popular;
