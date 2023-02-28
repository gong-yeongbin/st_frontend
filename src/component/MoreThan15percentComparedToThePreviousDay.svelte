<script lang="ts">
  import {moreThan15percentComparedToThePreviousDay} from '../store/stork';

  $: datas = $moreThan15percentComparedToThePreviousDay;
</script>

<h3>전일대비 15%이상(직전1분)</h3>
{#await datas}
  <p>...Wait</p>
{:then datas}
  <ul>
    {#each datas as data}
      <li style="list-style:none;">
        종목코드 : {data.code} 현재가 : {data.c_price.toLocaleString('ko-KR')}
      </li>
    {/each}
  </ul>
{:catch error}
  {error.message}
{/await}
