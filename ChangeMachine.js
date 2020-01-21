const till = {
  penny: 12,
  nickel: 25,
  dime: 39,
  quarter: 22,
  dollars: 40,
}

function getChange(amount) {
  let change = {};
  let values = [
  	{coin: 'dollars', value: 100}, 
    {coin: 'quarter', value: 25}, 
    {coin: 'dime', value: 10}, 
    {coin: 'nickel', value: 5},
    {coin: 'penny', value: 1}
  ];
  
  // translate amount into cents
  let newAmount = amount * 100;

  // iterate over coins and values
  for (let i=0; i<values.length; i++) {
  	// figure out max number of coins per denomination
    let coins = Math.floor(newAmount/values[i].value);
    // figure out if we have enough change in the till to do this
    if (coins > till[values[i].coin]) {
      change[values[i].coin] = till[values[i].coin];
      // empty till
      till[values[i].coin] = 0;
      // subtract change taken from amount
      newAmount -= (change[values[i].coin] * values[i].value);
    } else {
      change[values[i].coin] = coins;
      // subtract change taken from till
      till[values[i].coin] -= coins;
      // get remainder from this denomination
      newAmount = newAmount % values[i].value;
    }
  }
  
  return newAmount === 0 ? change : 'Not enough change!';
}

