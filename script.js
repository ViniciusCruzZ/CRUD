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
        const data = {
            id,
            name: tableName,
            description: tableDescription
        };
        
        addRow(data);
        saveToLocalStorage(data);
        
        id++;
        
    } else {
        alert('Nome e descrição devem ser preenchidos');
    }
});

function saveToLocalStorage(data) {
    let tableData = localStorage.getItem('tableData');
    if (!tableData) {
        tableData = [];
    } else {
        tableData = JSON.parse(tableData);
    }
    tableData.push(data);
    localStorage.setItem('tableData', JSON.stringify(tableData));
}


function loadFromLocalStorage() {
    const tableData = localStorage.getItem('tableData');
    if (tableData) {
      const data = JSON.parse(tableData);
      data.forEach(item => addRow(item));
      id = data.length; // Atualiza o ID para o próximo valor após o último item carregado
    }
}

function addRow(data) {
    const row = document.createElement('tr');
    const tdID = document.createElement('td');
    const tdName = document.createElement('td');
    const tdDescription = document.createElement('td');
    
    tdID.innerText = data.id;
    tdName.innerText = data.name;
    tdDescription.innerText = data.description;
    
    row.setAttribute('id', data.id);
    row.appendChild(tdID);
    row.appendChild(tdName);
    row.appendChild(tdDescription);
    
    tbody.appendChild(row);
}

// Carrega os dados do localStorage ao carregar a página
loadFromLocalStorage();

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
      removeFromLocalStorage(idDel);
    } else {
      alert('ID não encontrado');
    }
});
  
function removeFromLocalStorage(id) {
    let tableData = localStorage.getItem('tableData');
    if (tableData) {
      tableData = JSON.parse(tableData);
      const updatedData = tableData.filter(item => item.id.toString() !== id);
      localStorage.setItem('tableData', JSON.stringify(updatedData));
    }
}
