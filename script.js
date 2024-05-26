document.addEventListener('DOMContentLoaded', () => {
    const csvFileInput = document.getElementById('csvFileInput');
    const uploadButton = document.getElementById('uploadButton');
    const uploadProgress = document.getElementById('uploadProgress');
    const uploadStatus = document.getElementById('uploadStatus');
    const dataTable = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    const prevPage = document.getElementById('prevPage');
    const nextPage = document.getElementById('nextPage');
    const pageInfo = document.getElementById('pageInfo');
    const dataSearchInput = document.getElementById('dataSearchInput');
    const basePriceInput = document.getElementById('basePrice');
    const pricePerCreditLineInput = document.getElementById('pricePerCreditLine');
    const pricePerCreditScorePointInput = document.getElementById('pricePerCreditScorePoint');
    const calculateButton = document.getElementById('calculateButton');
    const pricingResultsTable = document.getElementById('pricingTable').getElementsByTagName('tbody')[0];
    const prevPricePage = document.getElementById('prevPricePage');
    const nextPricePage = document.getElementById('nextPricePage');
    const pricePageInfo = document.getElementById('pricePageInfo');
    const pricingSearchInput = document.getElementById('pricingSearchInput');
    const dataSection = document.querySelector('.data-section');
    const calculatorSection = document.querySelector('.calculator-section');
    const pricingResultsSection = document.getElementById('pricingResults');

    let data = [];
    let filteredData = [];
    let currentPage = 1;
    const rowsPerPage = 10;
    let priceData = [];
    let filteredPriceData = [];
    let currentPricePage = 1;

    uploadButton.addEventListener('click', () => {
        if (csvFileInput.files.length === 0) {
            alert('Please select a CSV file to upload.');
            return;
        }
        const file = csvFileInput.files[0];
        const reader = new FileReader();

        reader.onload = function(e) {
            const text = e.target.result;
            const rows = text.split('\n');
            data = rows.slice(1).map(row => row.split(',').map(cell => cell.trim()));
            filteredData = data;
            currentPage = 1;
            displayTable();
            uploadStatus.textContent = 'Upload complete!';
            uploadProgress.value = 100;

            // Show data section and calculator section
            dataSection.classList.remove('hidden');
            calculatorSection.classList.remove('hidden');

            // Hide upload progress
            uploadProgress.style.display = 'none';
        };
        reader.readAsText(file);
        uploadProgress.style.display = 'block';
        uploadProgress.value = 50;
    });

    function displayTable() {
        dataTable.innerHTML = '';
        const start = (currentPage - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        const paginatedData = filteredData.slice(start, end);

        for (const row of paginatedData) {
            const newRow = dataTable.insertRow();
            row[4] = maskPhoneNumber(row[4]); // Mask phone number
            for (const cell of row) {
                const newCell = newRow.insertCell();
                newCell.textContent = cell;
                newCell.style.transition = 'background-color 0.5s ease';
                newCell.addEventListener('mouseover', () => {
                    newCell.style.backgroundColor = '#e0f7fa';
                });
                newCell.addEventListener('mouseout', () => {
                    newCell.style.backgroundColor = '';
                });
            }
        }
        pageInfo.textContent = `Page ${currentPage} / ${Math.ceil(filteredData.length / rowsPerPage)}`;
    }

    function maskPhoneNumber(phoneNumber) {
        return phoneNumber.replace(/(\d{3})\d{4}(\d{2})/, '$1****$2');
    }

    dataSearchInput.addEventListener('input', () => {
        const searchValue = dataSearchInput.value.toLowerCase();
        filteredData = data.filter(row => row[0].toLowerCase().includes(searchValue));
        currentPage = 1;
        displayTable();
    });

    prevPage.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            displayTable();
        }
    });

    nextPage.addEventListener('click', () => {
        if (currentPage < Math.ceil(filteredData.length / rowsPerPage)) {
            currentPage++;
            displayTable();
        }
    });

    calculateButton.addEventListener('click', () => {
        if (csvFileInput.files.length === 0) {
            alert('Please select a CSV file to upload.');
            return;
        }
        const basePrice = parseFloat(basePriceInput.value);
        const pricePerCreditLine = parseFloat(pricePerCreditLineInput.value);
        const pricePerCreditScorePoint = parseFloat(pricePerCreditScorePointInput.value);
        
        if (isNaN(basePrice) || isNaN(pricePerCreditLine) || isNaN(pricePerCreditScorePoint)) {
            alert('Please enter valid numerical values for pricing.');
            return;
        }

        priceData = data.map(row => {
            const email = row[0];
            const name = row[1];
            const creditScore = parseFloat(row[2]);
            const creditLines = parseFloat(row[3]);
            const subscriptionPrice = basePrice + (pricePerCreditLine * creditLines) + (pricePerCreditScorePoint * creditScore);
            return [email, name, subscriptionPrice.toFixed(2)];
        });
        filteredPriceData = priceData;
        currentPricePage = 1;
        displayPricingResults();
        
        // Show pricing results section
        pricingResultsSection.classList.remove('hidden');
    });

    function displayPricingResults() {
        pricingResultsTable.innerHTML = '';
        const start = (currentPricePage - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        const paginatedPriceData = filteredPriceData.slice(start, end);

        for (const row of paginatedPriceData) {
            const newRow = pricingResultsTable.insertRow();
            for (const cell of row) {
                const newCell = newRow.insertCell();
                newCell.textContent = cell;
                newCell.style.transition = 'background-color 0.5s ease';
                newCell.addEventListener('mouseover', () => {
                    newCell.style.backgroundColor = '#e0f7fa';
                });
                newCell.addEventListener('mouseout', () => {
                    newCell.style.backgroundColor = '';
                });
            }
        }
        pricePageInfo.textContent = `Page ${currentPricePage} / ${Math.ceil(filteredPriceData.length / rowsPerPage)}`;
    }

    pricingSearchInput.addEventListener('input', () => {
        const searchValue = pricingSearchInput.value.toLowerCase();
        filteredPriceData = priceData.filter(row => row[0].toLowerCase().includes(searchValue));
        currentPricePage = 1;
        displayPricingResults();
    });

    prevPricePage.addEventListener('click', () => {
        if (currentPricePage > 1) {
            currentPricePage--;
            displayPricingResults();
        }
    });

    nextPricePage.addEventListener('click', () => {
        if (currentPricePage < Math.ceil(filteredPriceData.length / rowsPerPage)) {
            currentPricePage++;
            displayPricingResults();
        }
    });
});