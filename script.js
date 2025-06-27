function generateLoanID() {
  const randomNumber = Math.floor(10000000 + Math.random() * 90000000);
  return 'DIFI' + randomNumber;
}

function getInterestRate(salary) {
  if (salary < 5000) return 24;
  else if (salary < 10000) return 20;
  else if (salary < 20000) return 18;
  else if (salary < 30000) return 16;
  else return 14;
}

function calculateEMI(amount, months, rate) {
  const r = rate / (12 * 100);
  const emi = (amount * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
  return Math.round(emi);
}

function formatINR(num) {
  return '₹' + num.toLocaleString('en-IN');
}

function calculateProcessingFee(amount) {
  return Math.round(amount * 0.047); // 4.7%
}

function fillLoanSummary(name, salary, selectedAmount, months) {
  const interest = getInterestRate(salary);
  const processingFee = calculateProcessingFee(selectedAmount);
  const emi = calculateEMI(selectedAmount, months, interest);
  const disburseAmount = selectedAmount - processingFee;
  const loanId = generateLoanID();

  document.getElementById("customerName").textContent = name;
  document.getElementById("loanId").textContent = loanId;
  document.getElementById("approvedAmount").textContent = formatINR(selectedAmount);
  document.getElementById("tenure").textContent = months + " months";
  document.getElementById("interestRate").textContent = interest + "%";
  document.getElementById("emiAmount").textContent = formatINR(emi);
  document.getElementById("processingFee").textContent = formatINR(processingFee);
  document.getElementById("disbursedAmount").textContent = formatINR(disburseAmount);
}