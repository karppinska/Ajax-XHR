// Plain text
const 
    button = document.querySelector('#button'), 
    output = document.querySelector('#output'),
    errorOutput = document.querySelector('#error-output');


button.addEventListener('click', (event) => {
    event.preventDefault();

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.txt', true);
    xhr.send();

    xhr.onprogress = function() {
        console.log(`readystate: ${this.readyState}`);
    }

    xhr.onload = function() {
        if (this.status === 200) {
            output.innerHTML = `${this.responseText}`;
        }
    }

    xhr.onerror = function() {
        errorOutput.innerHTML = 'Request error';
    }
});

// JSON

const 
    customersBtn = document.querySelector('#customers-btn'),
    customersOutput = document.querySelector('#customers-output');

customersBtn.addEventListener('click', (event) => {
    event.preventDefault();
    
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'customers.json', true);
    xhr.send();

    xhr.onload = function() {
        if (this.status === 200) {
            const customers = JSON.parse(this.response);

            customers.forEach(customer => {
                customersOutput.innerHTML += 
                `<tr>
                    <th scope="row">${customer.id}</th>
                    <td>${customer.name}</td>
                    <td>${customer.company}</td>
                    <td>${customer.phone}</td>
                </tr>`;
            });
        }
    }
});

