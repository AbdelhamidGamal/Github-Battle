import React, { useState } from 'react';
import Nav from './Nav';
import SelectUser from './SelectUser';
import UserInfo from './UserInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCodeBranch } from '@fortawesome/free-solid-svg-icons';

function Search() {
  const [userInfo, setUserInfo] = useState({});
  const [reposInfo, setReposInfo] = useState([]);

  const handleUserInfo = async (userInf) => {
    setUserInfo(userInf);
    const res = await fetch(
      `https://api.github.com/users/${userInf.login}/repos?sort=created&direction=desc`
    );
    const data = await res.json();
    setReposInfo(data);
    console.log(data);
  };

  if (userInfo.login) {
    return (
      <>
        <Nav />
        <div className='centerItemsInDiv searchPage'>
          <UserInfo user={userInfo} />
        </div>
        <div className='reposGrid'>
          {reposInfo &&
            reposInfo.map((repo) => (
              <div className='repo' key={repo.id}>
                <h3 style={{ color: 'red' }}>{repo.name}</h3>
                <div>{repo.description}</div>
                <div>
                  <div>
                    <FontAwesomeIcon icon={faStar} /> Stars :{' '}
                    {repo.stargazers_count}
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faCodeBranch} /> Forks :{' '}
                    {repo.forks_count}
                  </div>
                </div>
                <div>Language : {repo.language}</div>
                <button className='btn'>
                  {' '}
                  <a href={repo.html_url}>Repo</a>{' '}
                </button>
              </div>
            ))}
        </div>
      </>
    );
  }

  return (
    <>
      <Nav />
      <SelectUser setPlayer={handleUserInfo} />
    </>
  );
}

export default Search;
