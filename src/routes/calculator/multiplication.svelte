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
    const result = Number(a * b).toFixed(2)
    if (isNaN(result)) return
    c = parseFloat(result)
    history = [...history, `${Number(a)} x ${Number(b)} = ${c}`]
  }
</script>

<svelte:head>
  <title>Calculator &bull; Multiplication</title>
</svelte:head>

<CalculatorHeading>
  Multiplication Calculator
</CalculatorHeading>

<p>Product or multiplication calculator is used when the same addend is being added several times. For example if you want the addition of 6 for 5 times the result or product will be the same as adding 5 for 6 times. This is called a commutative operation as the result is the same either way, which is how this calculator works. However, this multiplication calculator supports only numbers, but not limited to decimals.</p>

<CalculatorBox history={history}>
  <CalculatorOperation>
    <div slot="left">
      <CalculatorText>What is </CalculatorText>
      <CalculatorInput placeholder="A" bind:value={a} />
      <CalculatorText> x </CalculatorText>
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
