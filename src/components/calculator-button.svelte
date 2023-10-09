<script>
  export let text = 'CALCULATE'
  export let isFull = false
  export let isSpecial = false
  export let disabled = false
</script>

<style>
  .calculator-button {
    display: inline-block;
    background: #fff;
    color: #707070;
    border: 1px solid #4aa35c;
    outline: 0;
    width: 7.25em;
    font-size: 1em;
    font-weight: 300;
    padding: 1em .6em;
    border-radius: .6em;
    text-align: center;
    cursor: pointer;
  }

  .calculator-button:active {
    background: #5cce7f;
  }

  .calculator-button--is-full {
    width: 100%;
    border-color: #707070;
  }

  .calculator-button--is-special {
    background-color: #6f71ac44;
  }

  .calculator-button--is-disabled {
    background-color: #eee;
    cursor: default;
    cursor: not-allowed;
  }
</style>

<button class="calculator-button {isFull ? 'calculator-button--is-full' : ''} {isSpecial ? 'calculator-button--is-special' : ''} {disabled ? 'calculator-button--is-disabled' : '' }" on:click disabled={disabled}>
  {text}
</button>
