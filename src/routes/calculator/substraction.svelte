<script>
  import BackToMain from '../../components/back-to-main'
  import CalculatorBox from '../../components/calculator-box'
  import CalculatorHeading from '../../components/calculator-heading'
  import CalculatorInput from '../../components/calculator-input'
  import CalculatorText from '../../components/calculator-text'
  import CalculatorOperation from '../../components/calculator-operation'
  import CalculatorButton from '../../components/calculator-button'

  let a, b, c
  let history = []

  const calculate = () => {
    const result = Number(a - b).toFixed(2)
    if (isNaN(result)) return
    c = parseFloat(result)
    history = [...history, `${Number(a)} - ${Number(b)} = ${c}`]
  }
</script>

<svelte:head>
  <title>Calculator &bull; Subtraction</title>
</svelte:head>

<CalculatorHeading>
  Subtraction Calculator
</CalculatorHeading>

<p>This calculator is simply used to find the difference between two numbers. Subtraction is the term used to describe how we &quot;take away&quot; one or more numbers from another using a minus (-) sign. The number being subtracted is known as the subtrahend (shown as A), while the number it is subtracted from is the minuend (shown as B). Unlike addition, the order of the number that is being a subtrahend or minuend gives different results. For example, 5 (as a subtrahend) - 3 (as a minuend) = 2 (as a result), but if we put 3 (as a subtrahend) - 5 (as a minuend) = -2 (negative number as a result).</p>

<CalculatorBox history={history}>
  <CalculatorOperation>
    <div slot="left">
      <CalculatorText>What is </CalculatorText>
      <CalculatorInput placeholder="A" bind:value={a} />
      <CalculatorText> - </CalculatorText>
      <CalculatorInput placeholder="B" bind:value={b} />
      <CalculatorText>?</CalculatorText>
    </div>

    <div slot="right">
      <CalculatorButton on:click={calculate} />

      <div>
        <CalculatorText size="small">(result)</CalculatorText>
      </div>

      <div>
        <CalculatorText> = </CalculatorText>
        <CalculatorInput placeholder="C" disabled={true} value={c} />
      </div>
    </div>
  </CalculatorOperation>
</CalculatorBox>

<BackToMain />
