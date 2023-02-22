<script lang="ts">
  import moment from 'moment';
  import {beforeUpdate} from 'svelte';

  let date = moment().format('YYYY년 MM월 DD일 HH:mm:ss');

  beforeUpdate(() => {
    setInterval(() => {
      date = moment().format('YYYY년 MM월 DD일 HH:mm:ss');
    }, 1000);
  });
</script>

<h2>{date}</h2>
