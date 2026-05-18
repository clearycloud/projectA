let students = [];

function addStudent() {
  const nameInput = document.getElementById("name");
  const name = nameInput.value;

  if(name === "") return;

  students.push(name);

  renderStudents();

  nameInput.value = "";
}

function renderStudents() {
  const list = document.getElementById("studentList");

  list.innerHTML = "";

  students.forEach((student, index) => {
    list.innerHTML += `
      <li>
        ${student}
        <button onclick="removeStudent(${index})">삭제</button>
      </li>
    `;
  });
}

function removeStudent(index) {
  students.splice(index, 1);
  renderStudents();
}
