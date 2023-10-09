<script>
  import BackToMain from '../../components/back-to-main'
  import CalculatorBox from '../../components/calculator-box'
  import CalculatorHeading from '../../components/calculator-heading'
  import CalculatorInput from '../../components/calculator-input'
  import CalculatorText from '../../components/calculator-text'
  import CalculatorOperation from '../../components/calculator-operation'
  import CalculatorButton from '../../components/calculator-button'

  let a1, b1
  let a2, b2
  let a3, b3

  let history1 = []
  let history2 = []
  let history3 = []

  const calculate1 = () => {
    const result = Math.sin(a1).toFixed(2)
    if (isNaN(result)) return
    b1 = parseFloat(result)
    history1 = [...history1, `sin(${Number(a1)}) = ${b1}`]
  }

  const calculate2 = () => {
    const result = Math.cos(a2).toFixed(2)
    if (isNaN(result)) return
    b2 = parseFloat(result)
    history2 = [...history2, `cos(${Number(a2)}) = ${b2}`]
  }

  const calculate3 = () => {
    const result = Math.tan(a3).toFixed(2)
    if (isNaN(result)) return
    b3 = parseFloat(result)
    history3 = [...history3, `tan(${Number(a3)}) = ${b3}`]
  }
</script>

<svelte:head>
  <title>Calculator &bull; Advanced</title>
</svelte:head>

<CalculatorHeading>
  Advanced Calculator
</CalculatorHeading>

<p>This advanced calculator provides the calculation for trigonometry functions which includes sine, cosine and tangent values. As trigonometry applies mostly with angles and triangles, it is defining and using the relationships and ratios between angles and sides in triangles. We include trigonometry in this calculator as it is very useful in day to day use, since many different fields of science and engineering use trigonometry and trigonometric functions. To find the missing sides of the right triangle (with one angle being 90º), all you need to do is enter the known variable into the trigonometry calculator.</p>

<CalculatorBox history={history1}>
  <CalculatorOperation>
    <div slot="left">
      <CalculatorText>What is sin(</CalculatorText>
      <CalculatorInput placeholder="A" bind:value={a1} />
      <CalculatorText>) ?</CalculatorText>
    </div>

    <div slot="right">
      <CalculatorButton on:click={calculate1} />
      <div><CalculatorText size="small">(result)</CalculatorText></div>
      <div>
        <CalculatorText> = </CalculatorText>
        <CalculatorInput placeholder="B" disabled={true} value={b1} />
      </div>
    </div>
  </CalculatorOperation>
</CalculatorBox>

<CalculatorBox history={history2}>
  <CalculatorOperation>
    <div slot="left">
      <CalculatorText>What is cos(</CalculatorText>
      <CalculatorInput placeholder="A" bind:value={a2} />
      <CalculatorText>) ?</CalculatorText>
    </div>

    <div slot="right">
      <CalculatorButton on:click={calculate2} />
      <div><CalculatorText size="small">(result)</CalculatorText></div>
      <div>
        <CalculatorText> = </CalculatorText>
        <CalculatorInput placeholder="B" disabled={true} value={b2} />
      </div>
    </div>
  </CalculatorOperation>
</CalculatorBox>

<CalculatorBox history={history3}>
  <CalculatorOperation>
    <div slot="left">
      <CalculatorText>What is tan(</CalculatorText>
      <CalculatorInput placeholder="A" bind:value={a3} />
      <CalculatorText>) ?</CalculatorText>
    </div>

    <div slot="right">
      <CalculatorButton on:click={calculate3} />
      <div><CalculatorText size="small">(result)</CalculatorText></div>
      <div>
        <CalculatorText> = </CalculatorText>
        <CalculatorInput placeholder="B" disabled={true} value={b3} />
      </div>
    </div>
  </CalculatorOperation>
</CalculatorBox>

<BackToMain />
