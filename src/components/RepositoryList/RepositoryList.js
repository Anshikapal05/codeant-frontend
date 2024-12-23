// RepositoryList.js
import './RepositoryList.css';

const repositories = [
  { name: 'design-system', type: 'Public', lang: 'React', size: '7320 KB', updated: '1 day ago' },
  { name: 'codeant-ci-app', type: 'Private', lang: 'JavaScript', size: '5871 KB', updated: '2 days ago' },
  { name: 'analytics-dashboard', type: 'Private', lang: 'Python', size: '4521 KB', updated: '5 days ago' },
  { name: 'analytics-dashboard', type: 'Private', lang: 'Python', size: '4521 KB', updated: '5 days ago' },
  { name: 'analytics-dashboard', type: 'Private', lang: 'Python', size: '4521 KB', updated: '5 days ago' },
  { name: 'analytics-dashboard', type: 'Private', lang: 'Python', size: '4521 KB', updated: '5 days ago' },
  { name: 'analytics-dashboard', type: 'Private', lang: 'Python', size: '4521 KB', updated: '5 days ago' },
  { name: 'analytics-dashboard', type: 'Private', lang: 'Python', size: '4521 KB', updated: '5 days ago' },
];

function RepositoryList() {
  return (
    <div className="repository-list">
      {repositories.map((repo, index) => (
        <div key={index} className="repository-item">
          <h3>{repo.name} <span className={repo.type.toLowerCase()}>{repo.type}</span></h3>
          <p>{repo.lang} • {repo.size} • Updated {repo.updated}</p>
        </div>
      ))}
    </div>
  );
}

export default RepositoryList;
