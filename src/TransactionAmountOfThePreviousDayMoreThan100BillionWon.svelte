<script>
  import axios from 'axios';
  import {onMount} from 'svelte';

  let transactionAmountOfThePreviousDayMoreThan100BillionWonData;

  onMount(async () => {
    try {
      // transactionAmountOfThePreviousDayMoreThan100BillionWonData = await axios.get('/st/transactionAmountOfThePreviousDayMoreThan100BillionWon')
    } catch (error) {
      console.log(error);
    }
  });
</script>

<h3>전일 거래대금 1000억 이상</h3>

<ul>
  {#each transactionAmountOfThePreviousDayMoreThan100BillionWonData as transactionAmountOfThePreviousDayMoreThan100BillionWon}
    <li style="list-style: none;">
      {transactionAmountOfThePreviousDayMoreThan100BillionWon}
    </li>
  {/each}
</ul>
