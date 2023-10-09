<script>
  export let size = 'large'
</script>

<style>
  .calculator-text {
    display: inline-block;
  }

  .calculator-text--large {
    font-size: 1.3em;
    padding: 0 .3em;
    margin: 0;
  }

  .calculator-text--small {
    font-size: .7em;
    padding: 0;
  }
</style>

<div class="calculator-text app-font calculator-text--{size}">
  <slot></slot>
</div>
