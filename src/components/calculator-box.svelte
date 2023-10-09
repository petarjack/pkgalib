<script>
  export let history
</script>

<style>
  .calculator-box {
    width: 100%;
    margin-bottom: 30px;
  }

  .calculator-box__main {
    background: #fff;
    box-shadow: 0 3px 6px rgba(0, 0, 0, .3);
    width: 100%;
    border-radius: .6em;
    padding: 2em;
    box-sizing: border-box;
  }

  .calculator-box__history {
    text-align: right;
    padding-top: 20px;
    font-size: .8em;
    box-sizing: border-box;
  }
</style>

<div class="calculator-box">
  <div class="calculator-box__main">
    <slot></slot>
  </div>

  <div class="calculator-box__history">
    {#if history.length > 0}
      History<br>
    {/if}

    {#each history as line}
      {line}<br>
    {/each}
  </div>
</div>
