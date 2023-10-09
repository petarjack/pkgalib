<script>
  import { goto } from '@sapper/app';
  import CalculatorFull from '../components/calculator-full'
</script>

<script context="module">
  export function preload({ params, query }) {
    return this.fetch("sitemap.xml")
  }
</script>

<link rel="icon" type="image/x-icon" href="../../static/favicon.ico">

<style>
  h1 {
    text-align: center;
    margin: 0;
    padding: 0;
    font-size: 3.4em;
    font-weight: normal
  }

  h2 {
    text-align: center;
    margin: 0;
    padding: 0;
    font-size: 1.8em;
    font-weight: normal
  }

  button {
    display: block;
    background: #fff;
    color: #707070;
    box-shadow: 0 3px 6px rgba(0, 0, 0, .3);
    border: 0;
    width: 100%;
    margin-bottom: .8em;
    font-size: 1.6em;
    font-weight: 300;
    padding: .6em 0;
    border-radius: .6em;
    cursor: pointer;
  }

  #operations {
    margin-top: 2em;
  }
</style>

<svelte:head>
 <title>Primary Calculator - Percentage Calculator, Binary Calculator</title>
</svelte:head>

<h1 class="svelte-lfi95i">Primary Calculator Free Math Calculator Tool</h1>
<h2 style="margin-bottom: 30px;">What will you be calculating?</h2>

<p>This page is where you can find the navigation to each calculator. Simply click on the type of calculator you would like to use and it will lead you there. Same way when you want to change the type of calculator from another page, click &quot;back to main page&quot; and choose where you want to go next. The main page also has a calculator on its own, this is for quick calculations with a few functions provided in this site.</p>

<CalculatorFull />
<div id="operations">
  <button class="app-font" on:click={() => goto('/calculator/addition')}>Addition</button>
  <button class="app-font" on:click={() => goto('/calculator/substraction')}>Subtraction</button>
  <button class="app-font" on:click={() => goto('/calculator/multiplication')}>Multiplication</button>
  <button class="app-font" on:click={() => goto('/calculator/division')}>Division</button>
  <button class="app-font" on:click={() => goto('/calculator/fraction')}>Fraction</button>
  <button class="app-font" on:click={() => goto('/calculator/percentage')}>Percentage</button>
  <button class="app-font" on:click={() => goto('/calculator/binary')}>Binary</button>
  <button class="app-font" on:click={() => goto('/calculator/advanced')}>
    Advanced
    <span style="display: block; font-size: .5em;">(sin, cos, tan)</span>
  </button>
</div>
