function omfg_bofa_stopit() {

  console.log("BofA Allow Paste Extension Starting!");

  document.addEventListener('paste', function (event) {
      event.stopPropagation();
  }, true);

  const elemAmountParent = document.getElementById('paymentAmount').parentNode;
  elemAmountParent.classList.add("transfer-parent");

}

setTimeout(function () {
  omfg_bofa_stopit();
}, 3000);
