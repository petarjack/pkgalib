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
    const result = Number(a / b).toFixed(2)
    if (isNaN(result)) return
    c = parseFloat(result)
    history = [...history, `${Number(a)} ÷ ${Number(b)} = ${c}`]
  }
</script>

<svelte:head>
  <title>Calculator &bull; Division</title>
</svelte:head>

<CalculatorHeading>
  Division Calculator
</CalculatorHeading>

<p>Division is often considered the most difficult of the four main arithmetic functions that we also provided in this calculator. Just as multiplication is a quick way of calculating multiple additions, division is a quick way of performing multiple subtractions. The simple formula is Dividend (A) ÷ Divisor (B) = Division (C). There are some rules that you need to keep in mind in division, in which our calculator is built to be working the same way. This includes; using 0 as dividend or divisor will not give any result, and all fractions such as ½, ¼ and ¾ are division sums which we strongly recommend you to use our fraction calculator in order to calculate these values.</p>

<CalculatorBox history={history}>
  <CalculatorOperation>
    <div slot="left">
      <CalculatorText>What is </CalculatorText>
      <CalculatorInput placeholder="A" bind:value={a} />
      <CalculatorText> ÷ </CalculatorText>
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
