// RepositoryList.js
import './RepositoryList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRefresh, faPlus, faDatabase } from '@fortawesome/free-solid-svg-icons';

const repositories = [
  { name: 'design-system', type: 'Public', lang: 'React', size: '7320 KB', updated: '1 day ago' },
  { name: 'codeant-ci-app', type: 'Private', lang: 'JavaScript', size: '5871 KB', updated: '2 days ago' },
  { name: 'analytics-dashboard', type: 'Private', lang: 'Python', size: '4521 KB', updated: '5 days ago' },
  { name: 'mobile-app', type: 'Public', lang: 'Swift', size: '5021 KB', updated: '3 days ago' },
  { name: 'e-commerce-platform', type: 'Private', lang: 'Java', size: '6201 KB', updated: '4 days ago' },
  { name: 'blog-website', type: 'Public', lang: 'HTML/CSS', size: '1876 KB', updated: '2 days ago' },
  { name: 'portfolio-web', type: 'Private', lang: 'ReactJs', size: '2350 KB', updated: '10 days ago' },
  { name: 'social-network', type: 'Private', lang: 'PHP', size: '5432 KB', updated: '7 days ago' },
];

function RepositoryList() {
  return (
    <div className="repository-list-container">
      <div className="repository-header">
        <h2>Repositories</h2>
        <div className="header-actions">
          <button className="refresh-btn">
            <FontAwesomeIcon icon={faRefresh} className="btn-icon" />
            Refresh
          </button>
          <button className="add-repo-btn">
            <FontAwesomeIcon icon={faPlus} className="btn-icon" />
            Add Repository
          </button>
        </div>
      </div>
      <p className="total-repositories">Total Repositories: {repositories.length}</p>
      <div className="search-area">
        <FontAwesomeIcon icon="search" className="search-icon" />
        <input
          type="text"
          placeholder="Search repositories..."
          className="search-input"
        />
      </div>
      <div className="repository-list">
        {repositories.map((repo, index) => (
          <div key={index} className="repository-item">
            <div className="repo-header">
              <h3 className="repo-name">{repo.name}</h3>
              <span className={`repo-type ${repo.type.toLowerCase()}`}>{repo.type}</span>
            </div>
            <p>
              <span className="repo-lang">
                {repo.lang} <span className="lang-dot"></span>
              </span>
              <FontAwesomeIcon icon={faDatabase} className="repo-icon" /> {repo.size}
              <span className="repo-time">
                Updated {repo.updated}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RepositoryList;
