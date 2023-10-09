<script>
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  const onChange = (event) => {
    const value = event.target.value.replace(/[^0-1]/g, '')
    event.target.value = value
    dispatch('change', value)
  }

  export let placeholder
  export let value = ''
  export let disabled = false
</script>

<style>
  .calculator-input {
    display: inline-block;
  }

  input {
    text-align: right;
    background: #efeff5;
    border: 0;
    outline: 0;
    border-radius: .4em;
    font-size: 1.4em;
    font-weight: 300;
    padding: .6em;
    width: 4em;
    -moz-appearance: textfield;
  }

  input, input::placeholder {
    color: #707070;
  }

  input::placeholder {
    opacity: 0.2;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input:disabled {
    -webkit-text-fill-color: #000;
    -webkit-opacity: 1;
    color: #000;
    opacity: 1;
  }
</style>

<div class="calculator-input">
  <input
    type="text"
    value={value}
    on:input={onChange}
    placeholder={placeholder}
    disabled={disabled} />
</div>
