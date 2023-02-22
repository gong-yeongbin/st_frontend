<script lang="ts">
  import axios from 'axios';

  $: datas = axios
    .get('/st/checkedMoreThanFiveBillion')
    .then(response => response.data);
</script>

<h3>50억 이상 채결(직전1분)</h3>
{#await datas}
  <p>...No Data</p>
{:then datas}
  <ul>
    {#each datas as data}
      <li style="list-style:none;">
        종목코드 : {data.code} 체결금액 : {data.price.toLocaleString('ko-KR')}
      </li>
    {/each}
  </ul>
{:catch error}
  {error.message}
{/await}
