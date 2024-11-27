
const generateBillButton = document.querySelector(".generate-bill");

const billAmount = document.querySelector(".bill-amount");
const discountPercentage = document.querySelector(".discount-percentage");
const tipPercentage = document.querySelector(".tip-percentage");
const noOfCustomers = document.querySelector(".no-of-customers");

const TotalTipPaid = document.querySelector(".total-tip-paid");
const totalAmountToPay = document.querySelector(".total-amount-to-pay");
const eachCustomerToPay = document.querySelector(".each-customer-to-pay");

const totalTipPercentageValue = document.querySelector(".tip-value")
const discountPercentageValue = document.querySelector(".discount-value")
const totalNumberOfCustomersValue = document.querySelector(".no-of-customers-value")

generateBillButton.addEventListener("click", calculateBill)


function calculateBill() {
    //    console.log(generateBillButton.value,billAmount.value,discountPercentage.value,tipPercentage.value,noOfCustomers.value)

    const billAmountAfterDiscountPercentage = billAmount.value - ((discountPercentage.value * billAmount.value) / 100);
    const getTipAmount = billAmountAfterDiscountPercentage * (tipPercentage.value / 100)
    const totalBill = billAmountAfterDiscountPercentage + getTipAmount

    TotalTipPaid.textContent = getTipAmount;
    totalAmountToPay.textContent = totalBill;

    totalTipPercentageValue.textContent = tipPercentage.value;
    discountPercentageValue.textContent = discountPercentage.value;
    totalNumberOfCustomersValue.textContent = noOfCustomers.value;
    eachCustomerToPay.textContent = totalBill/ noOfCustomers.value

    // console.log(getTipAmount,totalBill)

}