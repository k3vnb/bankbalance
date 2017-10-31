//back end Logic
function AccountSetUp(name, deposit) {

  this.accountname = name;
  this.initDeposit = deposit;
  AccountSetUp = 0 + deposit;
}

function Account(addNewDeposit, addNewWithdrawal) {
    this.newDeposit = addNewDeposit;
    this.newWithdrawal = addNewWithdrawal;
    Account = AccountSetUp + addNewDeposit - addNewWithdrawal;
    return Account;
}

//front end logic
$(document).ready(function(){
  $("#newAccount").submit(function(event){
    event.preventDefault();
    var acctName = $(".initialName").val();
    var initialDeposit = parseInt($(".initialDeposit").val());
    var account = new AccountSetUp(acctName, initialDeposit);
    if ((initialDeposit !== NaN) && (acctName !== "")) {
      $(".hideSetUp").hide();
      $(".hideDeposit").show();
      $(".displayBalance").text("$" + AccountSetUp);
    }

  });//newAcc function

  $("#depositForm").submit(function(event){
    event.preventDefault();
    var addNewDeposit = parseInt($(".newDeposit").val());
    var addNewWithdrawal = parseInt($(".newWithdrawal").val());
    var newAccount = new Account(addNewDeposit, addNewWithdrawal);
    $(".displayBalance").text("$" + Account);
    });//deposit function
});//end doc rdy
