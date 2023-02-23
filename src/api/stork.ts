import axios from 'axios';

// 전일 순매수 100억이상 (매수 - 매도)
export const getaNetPurchaseOfThePreviousDayMoreThan10BillionWon = async () =>
  await axios
    .get('/st/aNetPurchaseOfThePreviousDayMoreThan10BillionWon')
    .then(response => response.data);

// 전일 거래대금 1000억 이상
export const getTransactionAmountOfThePreviousDayMoreThan100BillionWon =
  async () =>
    await axios
      .get('/st/transactionAmountOfThePreviousDayMoreThan100BillionWon')
      .then(response => response.data);

// 50억 이상 채결(직전1분)
export const getCheckedMoreThanFiveBillion = async () =>
  await axios
    .get('/st/checkedMoreThanFiveBillion')
    .then(response => response.data);

// 전일대비 15%이상(직전1분)
export const getMoreThan15percentComparedToThePreviousDay = async () =>
  await axios
    .get('/st/moreThan15percentComparedToThePreviousDay')
    .then(response => response.data);
