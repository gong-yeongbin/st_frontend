<script lang="ts">
  import axios from 'axios';

  $: datas = axios
    .get('/st/moreThan15percentComparedToThePreviousDay')
    .then(response => response.data);
</script>

<h3>전일대비 15%이상(직전1분)</h3>
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
