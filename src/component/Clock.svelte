<script lang="ts">
  import moment from 'moment';
  import {onMount} from 'svelte';

  let date;

  onMount(() => {
    setInterval(() => {
      date = moment().format('YYYY년 MM월 DD일 HH:mm:ss');
    }, 1000);
  });
</script>

<h2>{date}</h2>
