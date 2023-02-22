<script lang="ts">
  import axios from 'axios';

  $: datas = axios
    .get('/st/aNetPurchaseOfThePreviousDayMoreThan10BillionWon')
    .then(response => response.data);
</script>

<h3>전일 순매수 100억이상 (매수 - 매도)</h3>
{#await datas}
  <p>...Wait</p>
{:then datas}
  <ul>
    {#each datas as data}
      <li style="list-style:none;">
        종목코드 : {data.code} 전일순매수 : {data.price.toLocaleString('ko-KR')}
      </li>
    {/each}
  </ul>
{:catch error}
  {error.message}
{/await}
