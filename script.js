
let expenses = [];

function addExpense() {
    let name = document.getElementById("name").value;
    let amount = Number(document.getElementById("amount").value);
    let category = document.getElementById("category").value;

    if (name == "" || amount <= 0) {
        alert("Enter valid details");
        return;
    }

    expenses.push({
        name: name,
        amount: amount,
        category: category
    });

    document.getElementById("name").value = "";
    document.getElementById("amount").value = "";

    showExpenses();
}

function showExpenses() {
    let list = document.getElementById("expenseList");
    let filter = document.getElementById("filter").value;
    let total = 0;

    list.innerHTML = "";

    for (let i = 0; i < expenses.length; i++) {
        total = total + expenses[i].amount;

        if (filter == "All" || expenses[i].category == filter) {
            list.innerHTML += `
                <div class="expense">
                    <p>${expenses[i].name} - ₹${expenses[i].amount}
                    (${expenses[i].category})</p>

                    <button class="delete" onclick="deleteExpense(${i})">
                        Delete
                    </button>
                </div>
            `;
        }
    }

    document.getElementById("total").innerHTML = total;
}

function deleteExpense(i) {
    expenses.splice(i, 1);
    showExpenses();
}
