<script lang="ts">
  import axios from 'axios';

  $: datas = axios
    .get('/st/transactionAmountOfThePreviousDayMoreThan100BillionWon')
    .then(response => response.data);
</script>

<h3>전일 거래대금 1000억 이상</h3>
{#await datas}
  <p>...Wait</p>
{:then datas}
  <ul>
    {#each datas as data}
      <li style="list-style:none;">
        종목코드 : {data.code} 전일거래대금 : {data.price}
      </li>
    {/each}
  </ul>
{:catch error}
  {error.message}
{/await}
