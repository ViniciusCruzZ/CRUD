const tbody = document.querySelector('tbody');

const btnAdd = document.getElementById('add');
const btnList = document.getElementById('list');
const btnEdit = document.getElementById('edit');
const btnDel = document.getElementById('delete');

let id = 0;

btnAdd.addEventListener('click', function() {
    const tableName = prompt(`NAME: `);
    const tableDescription = prompt(`DESCRIPTION: `);
    if (tableName && tableDescription) {
        addRow(tableName, tableDescription)
    } else {
        alert('Nome e descrição devem ser preenchidos')
    }
});

function addRow(tableName, tableDescription) {
    const row = document.createElement('tr');
    const tdID = document.createElement('td');
    const tdName = document.createElement('td');
    const tdDescription = document.createElement('td');

    tdID.innerText = id;
    tdName.innerText = tableName;
    tdDescription.innerText = tableDescription;

    row.setAttribute('id', id);
    row.appendChild(tdID);
    row.appendChild(tdName);
    row.appendChild(tdDescription);
    
    tbody.appendChild(row);

    id++
}

btnList.addEventListener('click', () => {
    if (document.querySelector('td')) {
        alert('Está cego? Está logo abaixo a lista... 😾')
    } else {
        alert('Precisa de dados para serem listados!')
    }
})

btnEdit.addEventListener('click', function() {
    const idEdit = prompt('Digite o ID que deseja editar: ');
    const rowToEdit = document.getElementById(idEdit);
    
    if (rowToEdit) {
        const newName = prompt(`New NAME: `);
        const newDescription = prompt(`New DESCRIPTION: `)

        // if (newName && newDescription) {
        //     rowToEdit.innerHTML = `
        //         <td>${idEdit}</td>
        //         <td>${newName}</td>
        //         <td>${newDescription}</td>
        //     `

        if (newName && newDescription) {
            const tdName = rowToEdit.querySelector('td:nth-child(2)');
            const tdDescription = rowToEdit.querySelector('td:nth-child(3)');
      
            tdName.innerText = newName;
            tdDescription.innerText = newDescription;

        } else {
            alert('Novos nome e descrição devem ser preenchidos')
        }

    } else {
        alert('ID não encontrado')
    }
        
})

btnDel.addEventListener('click', function() {
    const idDel = prompt('Digite o ID que deseja deletar: ');
    const rowToRemove = document.getElementById(idDel);
    
    if (rowToRemove) {
        tbody.removeChild(rowToRemove);
    } else {
        alert('ID não encontrado');
    }
});