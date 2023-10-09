<script>
  import BackToMain from '../../components/back-to-main'
  import CalculatorBox from '../../components/calculator-box'
  import CalculatorHeading from '../../components/calculator-heading'
  import CalculatorBinaryInput from '../../components/calculator-binary-input'
  import CalculatorText from '../../components/calculator-text'
  import CalculatorOperation from '../../components/calculator-operation'
  import CalculatorButton from '../../components/calculator-button'

  let a, b, c
  let operator = '+'
  let history = []

  const applyOperator = (a, b) => {
    if (operator === '+') return a + b
    if (operator === '-') return a - b
    if (operator === 'x') return a * b
    if (operator === '÷') return a / b
    return NaN
  }

  const calculate = () => {
    const aDec = parseInt(a, 2)
    const bDec = parseInt(b, 2)
    const result = Math.round(applyOperator(aDec, bDec))
    if (isNaN(result)) return
    c = result.toString(2)
    history = [...history, `${a} ${operator} ${b} = ${c}`]
  }
</script>

<style>
  .operators {
    position: relative;
    top: 20px;
    text-align: center;
  }

  .operator {
    display: inline-block;
    background: #fff;
    border-radius: 100px;
    font-size: 1.2em;
    color: #707070;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border: 1px solid #707070;
    outline: 0;
    cursor: pointer;
  }
</style>

<svelte:head>
  <title>Calculator &bull; Binary</title>
</svelte:head>

<CalculatorHeading>
  Binary Calculator
</CalculatorHeading>

<p>The binary calculator is useful in many areas, especially engineering. The binary system (composed of 1s and 0s) provides an elegant way to represent numbers digitally, as 1 usually means the signal is on while 0 means the signal is off. You can use this calculator to add, substract, multiply and divide binary numbers.</p>

<div class="operators">
  <button class="operator app-font" on:click={() => operator = '+'}>+</button>
  <button class="operator app-font" on:click={() => operator = '-'}>-</button>
  <button class="operator app-font" on:click={() => operator = 'x'}>x</button>
  <button class="operator app-font" on:click={() => operator = '÷'}>÷</button>
</div>

<CalculatorBox history={history}>
  <CalculatorOperation>
    <div slot="left" style="display: flex; align-items: center;">
      <CalculatorText>What is </CalculatorText>
      <CalculatorBinaryInput placeholder="A" value={a} on:change={value => a = value.detail} />
      <CalculatorText> {operator} </CalculatorText>
      <CalculatorBinaryInput placeholder="B" value={b} on:change={value => b = value.detail} />
      <CalculatorText>?</CalculatorText>
    </div>

    <div slot="right">
      <CalculatorButton on:click={calculate} />

      <div>
        <CalculatorText size="small">(result)</CalculatorText>
      </div>

      <div>
        <CalculatorText> = </CalculatorText>
        <CalculatorBinaryInput placeholder="C" disabled={true} value={c} />
      </div>
    </div>
  </CalculatorOperation>
</CalculatorBox>

<BackToMain />
