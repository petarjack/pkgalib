<script>
  import CalculatorInput from './calculator-input'

  export let numeratorValue, numeratorPlaceholder
  export let denominatorValue, denominatorPlaceholder
  export let disabled
</script>

<style>
  .calculator-fraction {
    display: inline-block;
  }
</style>

<div class="calculator-fraction">
  <div class="calculator-fraction__numerator">
    <CalculatorInput bind:value={numeratorValue} placeholder={numeratorPlaceholder} {disabled} />
  </div>
  <hr>
  <div class="calculator-fraction__denominator">
    <CalculatorInput bind:value={denominatorValue} placeholder={denominatorPlaceholder} {disabled} />
  </div>
</div>
