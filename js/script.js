let btn = document.getElementById("btn");

//Getting all input values
const inputs = document.querySelectorAll("input");

//spliting the income and expenses into two arrays
const income = Array.from(inputs).slice(0,12).map(incom => {return incom.value;});
const expenses = Array.from(inputs).slice(12,24).map(expens => {return expens.value;});

console.log(income)

const ctx = document.getElementById('incomeChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [{
        label: 'Income Chart',
        data: income,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
function calculateAll() {
    //calculating the saved money by subtracting expenses[i] from income[i]
    const resultArray = [];

    for (let i = 0; i < income.length; i++) {
        let remainign = income[i] - expenses[i];
        resultArray.push(remainign);
    }

    //Getting all paragrafs in the saved monet per month table
    const result = document.querySelectorAll("p");
    
    //appying the saved money to paragrafs
    for (let i = 0; i < result.length; i++) {
        const element = result[i];
        element.innerHTML = resultArray[i];
    }
    
    //calcutaing the sum of the saved money
    let sum = 0;
    for (let i = 0; i < resultArray.length; i++) {
        const element = resultArray[i];
        sum += element;
    }
    //displaying the total amount
    const totalSaved = document.getElementById("totalMoneySaved");
    totalSaved.innerHTML = sum; 
}

