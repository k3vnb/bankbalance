//back end Logic
function AccountSetUp(name, deposit) {
  if (isNaN(deposit)) {
    alert("please enter a valid deposit number")
  }
  this.accountname = name;
  this.initDeposit = deposit;
  AccountSetUp = 0 + deposit;
  // console.log(AccountSetUp);
  // console.log(name);
  // return AccountSetUp
}
AccountSetUp.prototype.accountBalance = function() {
  return this.initDeposit - this.newWithdrawal;
}

function Account(addNewDeposit, addNewWithdrawal) {
    this.newDeposit = addNewDeposit;
    this.newWithdrawal = addNewWithdrawal;
    Account = AccountSetUp + addNewDeposit - addNewWithdrawal;
    console.log(AccountSetUp);
    return Account
}

// Account.prototype.balanceAccount = function() {
//   return this.initDeposit + this.newDeposit - this.newWithdrawal;
// }

//front end logic
$(document).ready(function(){
  $("#newAccount").submit(function(event){
    event.preventDefault();
    var acctName = $(".initialName").val();
    var initialDeposit = parseInt($(".initialDeposit").val());
    var account = new AccountSetUp(acctName, initialDeposit);
    $(".displayBalance").text("$" + AccountSetUp);
    $("#depositForm").submit(function(event){
      event.preventDefault();
      var addNewDeposit = parseInt($(".newDeposit").val());
      var addNewWithdrawal = parseInt($(".newWithdrawal").val());
      var newAccount = new Account(addNewDeposit, addNewWithdrawal);
      $(".displayBalance").text("$" + Account);
      // alert(account.balanceAccount());
    });//deposit function
  })//newAcc function

  // $("#depositForm").submit(function(event){
  //   event.preventDefault();
  //   var addNewDeposit = parseInt($(".newDeposit").val());
  //   var addNewWithdrawal = parseInt($(".newWithdrawal").val());
  //   var newAccount = new Account(addNewDeposit, addNewWithdrawal);
  //   $(".displayBalance").text("$" + AccountSetUp);
  //   alert(account.balanceAccount());
  // });//deposit function
});//end doc rdy
