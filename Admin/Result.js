const initialData = [
    {
        id: 1, 
        code: "DCY1201", 
        name: "APPLIED CHEMISTRY", 
        credits: 4, 
        max: 100, 
        ca1: 30, 
        ca2: 25, 
        mte: 35, 
        ete: 40,
        tw: 20, 
        pr: 15, 
        pr_or: 18,
        grace: 2,
        total: 0, 
        grade: "A", 
        gradePoints: 9,
        result: "PASS"
    },
    // Add more subjects as needed
];

let editMode = false;

function calculateTotal(subject) {
    return parseInt(subject.mte || 0) + parseInt(subject.ete || 0) + 
           parseInt(subject.ca1 || 0) + parseInt(subject.ca2 || 0) + 
           parseInt(subject.tw || 0) + parseInt(subject.pr || 0) + 
           parseInt(subject.pr_or || 0) + parseInt(subject.grace || 0);
}

function populateTable() {
    const tbody = document.getElementById('resultTableBody');
    tbody.innerHTML = initialData.map(subject => {
        subject.total = calculateTotal(subject);
        return `
            <tr class="hover:bg-gray-50">
                <td class="border p-2">${subject.id}</td>
                <td class="border p-2 editable" data-field="code">${subject.code}</td>
                <td class="border p-2 editable" data-field="name">${subject.name}</td>
                <td class="border p-2 editable" data-field="credits">${subject.credits}</td>
                <td class="border p-2 editable" data-field="max">${subject.max}</td>
                <td class="border p-2 editable" data-field="ca1">${subject.ca1}</td>
                <td class="border p-2 editable" data-field="ca2">${subject.ca2}</td>
                <td class="border p-2 editable" data-field="mte">${subject.mte}</td>
                <td class="border p-2 editable" data-field="ete">${subject.ete}</td>
                <td class="border p-2 editable" data-field="tw">${subject.tw}</td>
                <td class="border p-2 editable" data-field="pr">${subject.pr}</td>
                <td class="border p-2 editable" data-field="pr_or">${subject.pr_or}</td>
                <td class="border p-2 editable" data-field="grace">${subject.grace}</td>
                <td class="border p-2">${subject.total}</td>
                <td class="border p-2 editable" data-field="grade">${subject.grade}</td>
                <td class="border p-2 editable" data-field="gradePoints">${subject.gradePoints}</td>
                <td class="border p-2">${subject.result}</td>
            </tr>
        `;
    }).join('');
}

function toggleEditMode() {
    editMode = !editMode;
    const editables = document.querySelectorAll('.editable');
    editables.forEach(el => {
        el.contentEditable = editMode;
        el.style.backgroundColor = editMode ? '#f0f9ff' : '';
    });
}

function generatePDF() {
    const element = document.getElementById('resultContent');
    html2canvas(element).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jspdf.jsPDF();
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('student-result.pdf');
    });
}

function importCSV(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        const text = e.target.result;
        const rows = text.split('\n');
        // Process CSV data here
        console.log('CSV imported:', rows);
    };
    reader.readAsText(file);
}

document.addEventListener('DOMContentLoaded', populateTable);

// Add event listener for content changes
document.addEventListener('input', function(e) {
    if (e.target.classList.contains('editable') && e.target.closest('tr')) {
        const row = e.target.closest('tr');
        const cells = row.cells;
        // Recalculate total when marks are changed
        const subject = {
            mte: cells[7].textContent,
            ete: cells[8].textContent,
            ca1: cells[5].textContent,
            ca2: cells[6].textContent,
            tw: cells[9].textContent,
            pr: cells[10].textContent,
            pr_or: cells[11].textContent,
            grace: cells[12].textContent
        };
        cells[13].textContent = calculateTotal(subject);
    }
});