
document.addEventListener('DOMContentLoaded', () => {
  const billAmountInput = document.getElementById("billAmount");
  const tipPercentageSlider = document.getElementById("tipPercentage");
  const tipPercentageDisplay = document.getElementById("tipPercentageDisplay");
  const tipAmountDisplay = document.getElementById("tipAmount");
  const totalAmountDisplay = document.getElementById("totalAmount");
  const currencySelect = document.getElementById("currency");

  function calculateTip() {
    const billAmount = parseFloat(billAmountInput.value);
    const tipPercentage = parseFloat(tipPercentageSlider.value);
    const currencyRate = parseFloat(currencySelect.value);
    
    if (isNaN(billAmount) || billAmount <= 0) {
      tipAmountDisplay.value = "Invalid Input";
      totalAmountDisplay.value = "Invalid Input";
      return;
    }

    const tipAmount = billAmount * (tipPercentage / 100);
    const totalAmount = billAmount + tipAmount;

    const convertedTip = tipAmount * currencyRate;
    const convertedTotal = totalAmount * currencyRate;

    tipAmountDisplay.value = convertedTip.toFixed(2);
    totalAmountDisplay.value = convertedTotal.toFixed(2);
  }

  billAmountInput.addEventListener("input", calculateTip);
  tipPercentageSlider.addEventListener("input", () => {
    tipPercentageDisplay.textContent = `${tipPercentageSlider.value}%`;
    calculateTip();
  });
  currencySelect.addEventListener("change", calculateTip);

  calculateTip(); // Initialize calculation on page load
});
