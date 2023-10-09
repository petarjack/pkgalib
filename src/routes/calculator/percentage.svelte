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

  // Original percentage operations
  let a1, b1, c1
  let a2, b2, c2
  let a3, b3, c3

  let history1 = []
  let history2 = []
  let history3 = []

  const calculate1 = () => {
    const result = Number(a1 * b1 / 100).toFixed(2)
    if (isNaN(result)) return
    c1 = parseFloat(result)
    history1 = [...history1, `${Number(a1)}% of ${Number(b1)} = ${c1}`]
  }

  const calculate2 = () => {
    const result = Number(a2 * 100 / b2).toFixed(2)
    if (isNaN(result)) return
    c2 = parseFloat(result)
    history2 = [...history2, `${Number(a2)} is what % of ${Number(b2)} = ${c2}`]
  }

  const calculate3 = () => {
    const difference = b3 - a3
    const result = Number(difference / a3 * 100).toFixed(2)
    if (isNaN(result)) return
    c3 = parseFloat(result)
    history3 = [...history3, `From ${Number(a3)} to ${Number(b3)} = ${c3}%`]
  }

  // Percentage to Decimal
  let a4, b4
  let history4 = []
  const calculate4 = () => {
    const result = Number(a4 / 100).toFixed(2)
    if (isNaN(result)) return
    b4 = parseFloat(result)
    history4 = [...history4, `${Number(a4)}% = ${b4}`]
  }

  // Percentage to Fraction
  let a5, b5, c5
  let history5 = []
  const calculate5 = () => {
    const resultN = Number(Number(a5).toFixed(2) * 100)
    const resultD = 10000
    if (isNaN(resultN)) return
    const divisor = gcd(resultN, resultD)
    b5 = parseFloat(resultN / divisor)
    c5 = parseFloat(resultD / divisor)
    history5 = [...history5, `${Number(a5)}% = ${b5}/${c5}`]
  }

  // Decimal to Percentage
  let a6, b6
  let history6 = []
  const calculate6 = () => {
    const result = Number(a6 * 100).toFixed(2)
    if (isNaN(result)) return
    b6 = parseFloat(result)
    history6 = [...history6, `${Number(a6)} = ${b6}%`]
  }
</script>

<svelte:head>
  <title>Calculator &bull; Percentage</title>
</svelte:head>

<CalculatorHeading>
  Percentage Calculator
</CalculatorHeading>

<p>Our percentage calculator provides the function of finding percentage in many different ways. The tool is pretty straightforward. All you need to do is fill in two fields, and the third one will be calculated for you automatically.</p>
<p>Here are a few calculators to solve related problems:</p>
<ol>
  <li>Percentage of a number</li>
  <li>Turning a number into percentage</li>
  <li>Percentage increase and decreases calculator show the percentage change, either positive or negative</li>
</ol>

<CalculatorBox history={history1}>
  <CalculatorOperation>
    <div slot="left">
      <CalculatorText>What is </CalculatorText>
      <CalculatorInput placeholder="A" bind:value={a1} />
      <CalculatorText> % of </CalculatorText>
      <CalculatorInput placeholder="B" bind:value={b1} />
      <CalculatorText>?</CalculatorText>
    </div>

    <div slot="right">
      <CalculatorButton on:click={calculate1} />
      <div><CalculatorText size="small">(result)</CalculatorText></div>
      <div>
        <CalculatorText> = </CalculatorText>
        <CalculatorInput placeholder="C" disabled={true} value={c1} />
      </div>
    </div>
  </CalculatorOperation>
</CalculatorBox>

<CalculatorBox history={history2}>
  <CalculatorOperation>
    <div slot="left">
      <CalculatorInput placeholder="A" bind:value={a2} />
      <CalculatorText> is what % of </CalculatorText>
      <CalculatorInput placeholder="B" bind:value={b2} />
      <CalculatorText>?</CalculatorText>
    </div>

    <div slot="right">
      <CalculatorButton on:click={calculate2} />
      <div><CalculatorText size="small">(result)</CalculatorText></div>
      <div>
        <CalculatorText> = </CalculatorText>
        <CalculatorInput placeholder="C" disabled={true} value={c2} />
      </div>
    </div>
  </CalculatorOperation>
</CalculatorBox>

<CalculatorBox history={history3}>
  <CalculatorOperation>
    <div slot="left">
      <CalculatorText>What is the percentage increase / decrease from </CalculatorText>
      <CalculatorInput placeholder="A" bind:value={a3} />
      <CalculatorText> to </CalculatorText>
      <CalculatorInput placeholder="B" bind:value={b3} />
      <CalculatorText>?</CalculatorText>
    </div>

    <div slot="right">
      <CalculatorButton on:click={calculate3} />
      <div><CalculatorText size="small">(result)</CalculatorText></div>
      <div>
        <CalculatorText> = </CalculatorText>
        <CalculatorInput placeholder="C" disabled={true} value={c3} />
      </div>
    </div>
  </CalculatorOperation>
</CalculatorBox>

<!-- Percentage to Decimal -->
<CalculatorBox history={history4}>
  <CalculatorOperation>
    <div slot="left">
      <CalculatorText>What is </CalculatorText>
      <CalculatorInput placeholder="A" bind:value={a4} />
      <CalculatorText> % as decimal?</CalculatorText>
    </div>

    <div slot="right">
      <CalculatorButton on:click={calculate4} />
      <div><CalculatorText size="small">(result)</CalculatorText></div>
      <div>
        <CalculatorText> = </CalculatorText>
        <CalculatorInput placeholder="B" disabled={true} value={b4} />
      </div>
    </div>
  </CalculatorOperation>
</CalculatorBox>

<!-- Percentage to Fraction -->
<CalculatorBox history={history5}>
  <CalculatorOperation>
    <div slot="left" style="display: flex; align-items: center;">
      <CalculatorText>What is </CalculatorText>
      <CalculatorInput placeholder="A" bind:value={a5} />
      <CalculatorText> % as fraction?</CalculatorText>
    </div>

    <div slot="right">
      <CalculatorButton on:click={calculate5} />

      <div>
        <CalculatorText size="small">(result)</CalculatorText>
      </div>

      <div>
        <CalculatorText> = </CalculatorText>
        <CalculatorFraction
          numeratorPlaceholder="B" bind:numeratorValue={b5}
          denominatorPlaceholder="C" bind:denominatorValue={c5}
          disabled={true} />
      </div>
    </div>
  </CalculatorOperation>
</CalculatorBox>

<!-- Decimal to Percentage -->
<CalculatorBox history={history6}>
  <CalculatorOperation>
    <div slot="left">
      <CalculatorText>What is </CalculatorText>
      <CalculatorInput placeholder="A" bind:value={a6} />
      <CalculatorText> in %?</CalculatorText>
    </div>

    <div slot="right">
      <CalculatorButton on:click={calculate6} />
      <div><CalculatorText size="small">(result)</CalculatorText></div>
      <div>
        <CalculatorText> = </CalculatorText>
        <CalculatorInput placeholder="B" disabled={true} value={b6} />
      </div>
    </div>
  </CalculatorOperation>
</CalculatorBox>

<BackToMain />
