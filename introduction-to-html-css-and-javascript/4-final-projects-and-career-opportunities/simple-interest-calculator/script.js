function compute()
{
    let principal = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;
    
    let interest = principal * years * rate / 100;
    
    let amount = parseInt(principal) + parseFloat(interest);
    
    let result = document.getElementById("result");
    
    let year = new Date().getFullYear() + parseInt(years);
    
    if (principal < 1) {
      alert("Enter a positive number");
      document.getElementById("principal").focus();
    }
    else {
      result.innerHTML = `If you deposit $${principal}, <br />
      at an interest rate of ${rate}%, <br />
      You will receive an amount of $${amount} <br />
      in the year ${year}. <br />`
    }
}

function updateRate() {
  let rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = rateval;
}
        