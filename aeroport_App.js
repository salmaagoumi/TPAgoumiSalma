
fetch('aeroport_data.json')
    .then(response => response.json())  
    .then(data => {
        const vols = data.vols;  
        const tableBody = document.querySelector('#volsTable tbody');  

        vols.forEach(vol => {
            const row = document.createElement('tr');  
            row.innerHTML = `
                <td>${vol.id}</td>
                <td>${vol.origine}</td>
                <td>${vol.destination}</td>
                <td>${vol.compagnie}</td>
                <td>${vol.avion}</td>
                <td>${vol.piste}</td>
                <td>${vol.equipage.join(', ')}</td>
            `;
            tableBody.appendChild(row);  
        });
    })
    .catch(error => console.error('Erreur de chargement des données :', error));  
