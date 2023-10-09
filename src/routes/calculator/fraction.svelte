<script>
  import BackToMain from '../../components/back-to-main'
  import CalculatorBox from '../../components/calculator-box'
  import CalculatorHeading from '../../components/calculator-heading'
  import CalculatorInput from '../../components/calculator-input'
  import CalculatorFraction from '../../components/calculator-fraction'
  import CalculatorText from '../../components/calculator-text'
  import CalculatorOperation from '../../components/calculator-operation'
  import CalculatorButton from '../../components/calculator-button'

  const gcd = (a,b) => {
    if (b === 0) return a
    return gcd(b, a % b)
  }

  // Fraction operations
  let a, b, c, d, e, f
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
    let resultNominator, resultDenominator
    if (operator === '+' || operator === '-') {
      resultNominator = Number(applyOperator(a * d, b * c)).toFixed(2)
      resultDenominator = Number(b * d).toFixed(2)
    } else {
      resultNominator = Number(applyOperator(a, c)).toFixed(2)
      resultDenominator = Number(applyOperator(b, d)).toFixed(2)
    }
    if (isNaN(resultNominator) || isNaN(resultDenominator)) return
    const divisor = gcd(resultNominator, resultDenominator)
    e = parseFloat(resultNominator / divisor)
    f = parseFloat(resultDenominator / divisor)
    history = [...history, `${Number(a)}/${Number(b)} ${operator} ${Number(c)}/${Number(d)} = ${e}/${f}`]
  }

  // Fraction to decimal
  let a2, b2, c2
  let history2 = []

  const calculate2 = () => {
    const result = Number(a2 / b2).toFixed(2)
    if (isNaN(result)) return
    c2 = parseFloat(result)
    history2 = [...history2, `${Number(a2)}/${Number(b2)} = ${c2}`]
  }

  // Fraction to percentage
  let a3, b3, c3
  let history3 = []

  const calculate3 = () => {
    const result = Number(a3 / b3 * 100).toFixed(2)
    if (isNaN(result)) return
    c3 = parseFloat(result)
    history3 = [...history3, `${Number(a3)}/${Number(b3)} = ${c3}%`]
  }

  // Decimal to fraction
  let a4, b4, c4
  let history4 = []

  const calculate4 = () => {
    const resultN = Number((Number(Number(a4).toFixed(2)) * 100).toFixed(2))
    const resultD = 100
    if (isNaN(resultN)) return
    const divisor = gcd(resultN, resultD)
    b4 = parseFloat(resultN / divisor)
    c4 = parseFloat(resultD / divisor)
    history4 = [...history4, `${Number(a4)} = ${b4}/${c4}`]
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
  <title>Calculator &bull; Fraction</title>
</svelte:head>

<CalculatorHeading>
  Fraction Calculator
</CalculatorHeading>

<p>This calculator is built to be one of the most versatile tool as we provide addition, subtraction, multiplication and division for any two fractions. A fraction is simply the number of equal parts of a whole thing. Our fraction calculator works with both proper and improper fractions. To briefly explain this, fraction is numerator (top digits) / denominator (bottom digits); proper fraction is when numerator is lesser than denominator, and improper fraction is when numerator is greater than denominator.</p>

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
      <CalculatorFraction
        numeratorPlaceholder="A" bind:numeratorValue={a}
        denominatorPlaceholder="B" bind:denominatorValue={b} />
      <CalculatorText> {operator} </CalculatorText>
      <CalculatorFraction
        numeratorPlaceholder="C" bind:numeratorValue={c}
        denominatorPlaceholder="D" bind:denominatorValue={d} />
      <CalculatorText>?</CalculatorText>
    </div>

    <div slot="right">
      <CalculatorButton on:click={calculate} />

      <div>
        <CalculatorText size="small">(result)</CalculatorText>
      </div>

      <div>
        <CalculatorText> = </CalculatorText>
        <CalculatorFraction
          numeratorPlaceholder="E" bind:numeratorValue={e}
          denominatorPlaceholder="F" bind:denominatorValue={f}
          disabled={true} />
      </div>
    </div>
  </CalculatorOperation>
</CalculatorBox>

<!-- Fraction to Decimal -->
<CalculatorBox history={history2}>
  <CalculatorOperation>
    <div slot="left" style="display: flex; align-items: center;">
      <CalculatorText>What is </CalculatorText>
      <CalculatorFraction
        numeratorPlaceholder="A" bind:numeratorValue={a2}
        denominatorPlaceholder="B" bind:denominatorValue={b2} />
      <CalculatorText> in decimal?</CalculatorText>
    </div>

    <div slot="right">
      <CalculatorButton on:click={calculate2} />

      <div>
        <CalculatorText size="small">(result)</CalculatorText>
      </div>

      <div>
        <CalculatorText> = </CalculatorText>
        <CalculatorInput placeholder="C" disabled={true} value={c2} />
      </div>
    </div>
  </CalculatorOperation>
</CalculatorBox>

<!-- Fraction to Percentage -->
<CalculatorBox history={history3}>
  <CalculatorOperation>
    <div slot="left" style="display: flex; align-items: center;">
      <CalculatorText>What is </CalculatorText>
      <CalculatorFraction
        numeratorPlaceholder="A" bind:numeratorValue={a3}
        denominatorPlaceholder="B" bind:denominatorValue={b3} />
      <CalculatorText> in %?</CalculatorText>
    </div>

    <div slot="right">
      <CalculatorButton on:click={calculate3} />

      <div>
        <CalculatorText size="small">(result)</CalculatorText>
      </div>

      <div>
        <CalculatorText> = </CalculatorText>
        <CalculatorInput placeholder="C" disabled={true} value={c3} />
      </div>
    </div>
  </CalculatorOperation>
</CalculatorBox>

<!-- Decimal to Fraction -->
<CalculatorBox history={history4}>
  <CalculatorOperation>
    <div slot="left" style="display: flex; align-items: center;">
      <CalculatorText>What is </CalculatorText>
      <CalculatorInput placeholder="A" bind:value={a4} />
      <CalculatorText> as fraction?</CalculatorText>
    </div>

    <div slot="right">
      <CalculatorButton on:click={calculate4} />

      <div>
        <CalculatorText size="small">(result)</CalculatorText>
      </div>

      <div>
        <CalculatorText> = </CalculatorText>
        <CalculatorFraction
          numeratorPlaceholder="B" bind:numeratorValue={b4}
          denominatorPlaceholder="C" bind:denominatorValue={c4}
          disabled={true} />
      </div>
    </div>
  </CalculatorOperation>
</CalculatorBox>

<BackToMain />
