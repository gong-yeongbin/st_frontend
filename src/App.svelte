<script lang="ts">
  import {now} from './store/stork';
  import TransactionAmountOfThePreviousDayMoreThan100BillionWon from './component/TransactionAmountOfThePreviousDayMoreThan100BillionWon.svelte';
  import CheckedMoreThanFiveBillion from './component/CheckedMoreThanFiveBillion.svelte';
  import MoreThan15percentComparedToThePreviousDay from './component/MoreThan15percentComparedToThePreviousDay.svelte';
  import ANetPurchaseOfThePreviousDayMoreThan10BillionWon from './component/ANetPurchaseOfThePreviousDayMoreThan10BillionWon.svelte';
</script>

<h2>{$now}</h2>
<ANetPurchaseOfThePreviousDayMoreThan10BillionWon />
<TransactionAmountOfThePreviousDayMoreThan100BillionWon />
<CheckedMoreThanFiveBillion />
<MoreThan15percentComparedToThePreviousDay />
