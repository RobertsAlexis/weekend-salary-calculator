console.log("Hello World!");
let totalMonthlyPay = 0;

function addEmployee(event){
    event.preventDefault();
    const firstNameInput = document.getElementById("firstNameInput").value;
    const lastNameInput = document.getElementById("lastNameInput").value;
    const idInput = document.getElementById("idInput").value;
    const titleInput = document.getElementById("titleInput").value;
    const annualSalaryInput = document.getElementById("annualSalaryInput").value;

    console.log("First Name: ", firstNameInput);
    console.log("Last Name: ", lastNameInput);
    console.log("ID: ", idInput);
    console.log("Title: ", titleInput);
    console.log("Annual Salary: ", annualSalaryInput);

    let tableBody = document.getElementById("tableBody")
    let htmlString = `<tr class="Employee">
                        <td>${firstNameInput}</td>
                        <td>${lastNameInput}</td>
                        <td>${idInput}</td>
                        <td>${titleInput}</td>
                        <td>${annualSalaryInput}</td>
                        <td><button onclick="removeEmployee(event)">Remove</button></td>
                      </tr>`;
    console.log(htmlString);
    
    tableBody.innerHTML += htmlString; 

    document.getElementById("firstNameInput").value = "";
    document.getElementById("firstNameInput").value = "";
    document.getElementById("lastNameInput").value = "";
    document.getElementById("idInput").value = "";
    document.getElementById("titleInput").value = "";
    document.getElementById("annualSalaryInput").value = "";
    document.getElementById("monthlyPay").value = "";

    //totalMonthlyPay=+monthlyPay;
    //total monthly pay plus monthly pay 
    updateTotalMonthlyPay(annualSalaryInput);
  }
//const monthlyPay = Math.floor(Number(annualSalaryInput)/12);
//   console.log("Monthly Pay: ", monthlyPay);
//  <td>${monthlyPay}</td> 
// <th>Monthly Pay</th>
function updateTotalMonthlyPay(annualSalaryInput) {
    const monthlyPay = Number(annualSalaryInput)/12;
        totalMonthlyPay  += monthlyPay
        console.log("Pay be payin")
    let monthlyPayLocation = document.getElementById("monthlyPay");
                console.log("Please pay")
        monthlyPayLocation.textContent = Math.round(Number(totalMonthlyPay));
        console.log("Pay be playin")
    let footer = document.getElementById("footer");
       if (totalMonthlyPay > 20000) {
        footer.classList.toggle("over-budget"); }
  }

 function removeEmployee(event){
   let employeeToRemove = event.target.parentNode.parentNode;
      console.log(employeeToRemove);
      employeeToRemove.remove();
 }