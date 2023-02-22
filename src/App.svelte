<script lang="ts">
  import Clock from './component/Clock.svelte';
  import TransactionAmountOfThePreviousDayMoreThan100BillionWon from './component/TransactionAmountOfThePreviousDayMoreThan100BillionWon.svelte';
  import CheckedMoreThanFiveBillion from './component/CheckedMoreThanFiveBillion.svelte';
  import MoreThan15percentComparedToThePreviousDay from './component/MoreThan15percentComparedToThePreviousDay.svelte';
  import ANetPurchaseOfThePreviousDayMoreThan10BillionWon from './component/ANetPurchaseOfThePreviousDayMoreThan10BillionWon.svelte';
</script>

<Clock />
<TransactionAmountOfThePreviousDayMoreThan100BillionWon />
<ANetPurchaseOfThePreviousDayMoreThan10BillionWon />
<CheckedMoreThanFiveBillion />
<MoreThan15percentComparedToThePreviousDay />
