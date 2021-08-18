document.getElementById('deposit_btn').addEventListener('click',function(){
    const your_deposit_text = document.getElementById('input_deposite_values');
    // get input deposit 
    const your_deposit_values = parseFloat(your_deposit_text.value);
    // console.log(your_deposit_values);
    const output_deposit = document.getElementById('output_deposit');
    // get output deposit 
    const output_deposit_values = parseFloat(output_deposit.innerText);
    // console.log(output_deposit_values)
    output_deposit.innerText = your_deposit_values;
    // total add deposit
    const new_deposit_tk = your_deposit_values + output_deposit_values ;
    // console.log(new_deposit_tk);
    // assign new deposit 
    output_deposit.innerText = new_deposit_tk;

    // show entry input 
    your_deposit_text.value = '';
    // add main balnace 
    const output_Balance = document.getElementById('output_Balance');
    const output_Balance_values = parseFloat(output_Balance.innerText);
    // update balance after deposit 
    output_Balance.innerText = output_Balance_values + your_deposit_values;
})
document.getElementById('withdraw_btn').addEventListener('click',function(){
    const your_withdraw_text = document.getElementById('input_withdraw_values');
    // get input withdrow 
    const your_withdraw_values = parseFloat(your_withdraw_text.value);
    // console.log(your_withdraw_values);
    const output_withdraw_text = document.getElementById('output_withdraw');
    // get output withdraw
    const output_withdraw_values = parseFloat(output_withdraw_text.innerText)
    // console.log(output_withdraw_values)
    output_withdraw_text.innerText = your_withdraw_values;

    const new_withdraw_tk = your_withdraw_values + output_withdraw_values;
    // console.log(new_withdraw_tk);
    // add main balnace 
    output_withdraw_text.innerText = new_withdraw_tk;
    // show entry input 
    your_withdraw_text.value = '';
    // (-) main balnace 
    const output_Balance = document.getElementById('output_Balance');
    const output_Balance_values = parseFloat(output_Balance.innerText);
    // update balance after deposit 
    output_Balance.innerText = output_Balance_values - your_withdraw_values;

})