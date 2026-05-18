interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'New York',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'Paris',
};

const studentsList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement('table');
const headerRow: HTMLTableRowElement = document.createElement('tr');

const firstNameHeader: HTMLTableCellElement = document.createElement('th');
const lastNameHeader: HTMLTableCellElement = document.createElement('th');
const ageHeader: HTMLTableCellElement = document.createElement('th');
const locationHeader: HTMLTableCellElement = document.createElement('th');

firstNameHeader.textContent = 'First Name';
lastNameHeader.textContent = 'Last Name';
ageHeader.textContent = 'Age';
locationHeader.textContent = 'Location';

headerRow.append(firstNameHeader, lastNameHeader, ageHeader, locationHeader);
table.appendChild(headerRow);

studentsList.forEach((student: Student) => {
  const row: HTMLTableRowElement = document.createElement('tr');

  const firstNameCell: HTMLTableCellElement = document.createElement('td');
  const lastNameCell: HTMLTableCellElement = document.createElement('td');
  const ageCell: HTMLTableCellElement = document.createElement('td');
  const locationCell: HTMLTableCellElement = document.createElement('td');

  firstNameCell.textContent = student.firstName;
  lastNameCell.textContent = student.lastName;
  ageCell.textContent = student.age.toString();
  locationCell.textContent = student.location;

  row.append(firstNameCell, lastNameCell, ageCell, locationCell);
  table.appendChild(row);
});

document.body.appendChild(table);