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
    const result = Number(a + b).toFixed(2)
    if (isNaN(result)) return
    c = parseFloat(result)
    history = [...history, `${Number(a)} + ${Number(b)} = ${c}`]
  }
</script>

<svelte:head>
  <title>Addition &bull; Calculator</title>
</svelte:head>

<CalculatorHeading>
  Addition Calculator
</CalculatorHeading>

<p>This calculator is a simple addition or summation using a (+) plus sign, which is the calculation of two numbers. These numbers are called addends, which are represented as A and B in this calculator. The result of this process is called the sum which is shown in place of letter C in this calculator.</p>

<CalculatorBox history={history}>
  <CalculatorOperation>
    <div slot="left">
      <CalculatorText>What is </CalculatorText>
      <CalculatorInput placeholder="A" bind:value={a} />
      <CalculatorText> + </CalculatorText>
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
