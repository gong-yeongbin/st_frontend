<script lang="ts">
  import {getRsi} from '../api/stork';

  $: datas = getRsi();
</script>

<h3>rsi</h3>
{#await datas}
  <p>...Wait</p>
{:then datas}
  <ul>
    {#each datas as data}
      <li style="list-style:none;">
        {data.idx}
        {data.rsi}
      </li>
    {/each}
  </ul>
{:catch error}
  {error.message}
{/await}
