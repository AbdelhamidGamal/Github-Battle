import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCodeBranch } from '@fortawesome/free-solid-svg-icons';

function ReposGrid({ reposInfo }) {
  return (
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
  );
}

export default ReposGrid;
