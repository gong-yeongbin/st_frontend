import moment from 'moment';
import {derived, readable} from 'svelte/store';
import {
  getaNetPurchaseOfThePreviousDayMoreThan10BillionWon,
  getCheckedMoreThanFiveBillion,
  getMoreThan15percentComparedToThePreviousDay,
  getTransactionAmountOfThePreviousDayMoreThan100BillionWon
} from '../api/stork';

let second = readable(moment().format('ss'), set => {
  setInterval(() => {
    set(moment().format('ss'));
  }, 1000);
});
let day = derived(second, () => moment().format('DD'));
export let minute = derived(second, () => moment().format('mm'));
export let now = derived(second, () =>
  moment().format('YYYY년 MM월 DD일 HH:mm:ss')
);

// 전일 순매수 100억이상 (매수 - 매도)
export let aNetPurchaseOfThePreviousDayMoreThan10BillionWon = derived(day, () =>
  getaNetPurchaseOfThePreviousDayMoreThan10BillionWon()
);

// 전일 거래대금 1000억 이상
export let transactionAmountOfThePreviousDayMoreThan100BillionWon = derived(
  day,
  async () => getTransactionAmountOfThePreviousDayMoreThan100BillionWon()
);

// 50억 이상 채결(직전1분)
export let checkedMoreThanFiveBillion = derived(minute, () =>
  getCheckedMoreThanFiveBillion()
);

// 전일대비 15%이상(직전1분)
export let moreThan15percentComparedToThePreviousDay = derived(minute, () =>
  getMoreThan15percentComparedToThePreviousDay()
);
