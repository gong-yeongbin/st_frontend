<script lang="ts">
  import {transactionAmountOfThePreviousDayMoreThan100BillionWon} from '../store/stork';

  $: datas = $transactionAmountOfThePreviousDayMoreThan100BillionWon;
</script>

<h3>전일 거래대금 1000억 이상</h3>
{#await datas}
  <p>...Wait</p>
{:then datas}
  <ul>
    {#each datas as data}
      <li style="list-style:none;">
        종목코드 : {data.code} 전일거래대금 : {data.price.toLocaleString(
          'ko-KR'
        )}
      </li>
    {/each}
  </ul>
{:catch error}
  {error.message}
{/await}
