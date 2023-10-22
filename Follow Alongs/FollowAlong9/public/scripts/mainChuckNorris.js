let choice = "";

document.addEventListener('DOMContentLoaded', (event) => {
    const fetchDataButton = document.getElementById("fetchDataButton");
    const dataTableHead = document.querySelector("#dataTable thead tr");
    const dataTableBody = document.querySelector("#dataTable tbody tr");

    fetchDataButton.addEventListener('click', function() {
        if (choice) {
            fetch(`https://api.chucknorris.io/jokes/random?category=${choice}`)
                .then(response => response.json())
                .then(data => {
                    dataTableHead.innerHTML = '';
                    dataTableBody.innerHTML = '';
                    for (const key in data) {
                        dataTableHead.insertAdjacentHTML('beforeend', `<th>${key}</th>`);
                        dataTableBody.insertAdjacentHTML('beforeend', `<td>${data[key]}</td>`);
                    }
                    $("#dataIndexModal").modal('hide');
                })
                .catch(error => {
                    console.error("Error fetching data: ", error);
                    dataTableBody.innerHTML = `<td colspan="2">Error fetching data. Please try again.</td>`;
                })
                .finally(() => {
                    $("#dataIndexModal").modal('hide');
                    $('body').removeClass('modal-open');
                    $('.modal-backdrop').remove();
                });
        };

    });
});

function setChoice(param) {
    choice = param;
    document.getElementById("dropdownButton").innerHTML = choice;
}