function addRecord() {
    // Obtener el reCAPTCHA response
    const response = grecaptcha.getResponse();
    
    if (response.length === 0) {
        alert('Por favor, verifica el reCAPTCHA.');
        return;
    }

    // Obtener los valores del formulario
    const name = document.getElementById('name').value;
    const apellido = document.getElementById('apellido').value;
    const mail = document.getElementById('mail').value;
    const color = document.getElementById('color').value;

    // Validar que todos los campos estén completos
    if (!name || !apellido || !mail || !color) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Crear un nuevo registro
    const recordList = document.getElementById('recordList');
    const recordItem = document.createElement('div');
    recordItem.classList.add('record-item');
    recordItem.innerHTML = `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Apellido:</strong> ${apellido}</p>
        <p><strong>E-Mail:</strong> ${mail}</p>
        <p><strong>Color Favorito:</strong> ${color}</p>
        <button onclick="showPopup('${name}', '${apellido}', '${mail}', '${color}')">Ver detalles</button>
    `;
    recordList.appendChild(recordItem);

    // Limpiar el formulario
    document.getElementById('dataForm').reset();

    // Limpiar el reCAPTCHA
    grecaptcha.reset();
}

function showPopup(name, apellido, mail, color) {
    const popup = document.getElementById('popup');
    const popupDetails = document.getElementById('popupDetails');
    popupDetails.innerHTML = `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Apellido:</strong> ${apellido}</p>
        <p><strong>E-Mail:</strong> ${mail}</p>
        <p><strong>Color Favorito:</strong> ${color}</p>
    `;
    popup.style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
