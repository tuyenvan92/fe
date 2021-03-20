function fetchIssues() {
  const issues = JSON.parse(localStorage.getItem('tasks')) || [];

  console.log('fetchIssues: ', issues)
  if (issues.length <= 0) return;
  
  const issueList = document.getElementById("issues");
  issueList.innerHTML = '';
  for(let i = 0; i < issues.length; i++) {
    const id = issues[i].id;
    const desc = issues[i].description;
    const severity = issues[i].severity;
    const assignTo = issues[i].assignTo;
    const status = issues[i].status;

    // es6+ : template literal
    issueList.innerHTML += `
      <p class="id-title">Issue ID: <span class="id">${id}</span></p>
      <button class="btn btn-info">${status}</button>
      <div class="issue-name">${desc}</div>
      <div class="severity">
        <img src="https://img.icons8.com/pastel-glyph/64/000000/clock--v1.png"/>
        <span class="issue-level"> ${severity}</span>
      </div>
      <div class="assign">
        <img src="https://img.icons8.com/ios-glyphs/26/000000/user-male.png"/>
        <span class="issue-assign"> ${assignTo}</span>
      </div>
      <button class="btn btn-warning">Close</button>
      <button class="btn btn-danger" onClick={handleDelete(${id})}>Delete</button>
    `
  }
}

function saveIssue(e) {
  e.preventDefault();
  const listIssues = localStorage.getItem('tasks');
  const id = Date.now();
  const description = document.getElementById('description').value.trim();
  const severity = document.getElementById('severity').value;
  const assignTo = document.getElementById('assignTo').value.trim();
  const status = 'Open';

  const issue = {
    id,
    description,
    severity,
    assignTo,
    status
  }

  // check if don't have localstorage
  if (listIssues === null) {
    const issues = [];
    issues.push(issue);
    localStorage.setItem('tasks', JSON.stringify(issues));
  } else {
    // has localstorage
    const issues = JSON.parse(localStorage.getItem('tasks'));
    issues.push(issue);
    localStorage.setItem('tasks', JSON.stringify(issues));
  }
  fetchIssues();
}

const formIssue = document.getElementById('formIssue');
formIssue.addEventListener('submit', saveIssue);

fetchIssues();

function handleDelete(id) {
  const issues = JSON.parse(localStorage.getItem('tasks')) || [];
  // delete by index of array
  // issues.splice(index, 1);
  const newIssues = issues.filter(item => item.id !== id);
  localStorage.setItem('tasks', JSON.stringify(newIssues));
  fetchIssues();
}