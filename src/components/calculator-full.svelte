<script>
  import CalculatorBox from './calculator-box'
  import CalculatorButton from './calculator-button'

  let history = []
  let value = ''

  const operators = ['+','-','*','/']
  const numbers = ['0','1','2','3','4','5','6','7','8','9']
  const fns = ['sin','cos','tan']

  let lastCharacter, nOpenParenthesis, nClosedParenthesis, lastNumber
  $: lastCharacter = value.split('').filter(c => c !== ' ').slice(-1)[0]
  $: nOpenParenthesis = value.split('').filter(c => c === '(').length
  $: nClosedParenthesis = value.split('').filter(c => c === ')').length
  $: lastNumber = value.split('').reduce((acc, c) => (!numbers.includes(c) && c !== '.') ? '' : acc + c, '')

  let canAddOperator, canAddNonZeroNumber, canAddFn, canAddClosedParenthesis, canAddZero, canCalculate
  $: canAddOperator = !operators.includes(lastCharacter) && lastCharacter !== '('
  $: canAddNonZeroNumber = lastCharacter !== ')' && lastNumber !== '0'
  $: canAddFn = !lastCharacter || operators.includes(lastCharacter) || lastCharacter === '('
  $: canAddClosedParenthesis = canAddOperator && nOpenParenthesis > nClosedParenthesis
  $: canAddDecimal = lastNumber !== '' && !lastNumber.includes('.')
  $: canAddZero = lastCharacter !== ')' && lastNumber !== '0'
  $: canCalculate = lastNumber !== '' || lastCharacter === ')'

  const select = key => () => {
    if (key === '0' && canAddZero)
      value += key
    if (numbers.includes(key) && key !== '0' && canAddNonZeroNumber)
      value += key
    if (operators.includes(key) && canAddOperator)
      value += ` ${key} `
    if (fns.includes(key) && canAddFn)
      value += `${key}(`
    if (key === ')' && canAddClosedParenthesis)
      value += key
    if (key === '.' && canAddDecimal)
      value += key
  }

  const balanceParenthesis = () => {
    if (nOpenParenthesis > nClosedParenthesis) {
      value += ')'.repeat(nOpenParenthesis - nClosedParenthesis)
    }
  }

  const clear = () => value = ''

  const calculate = () => {
    if (!canCalculate) return
    balanceParenthesis()
    const result = eval(value.replace(/sin/g, 'Math.sin').replace(/cos/g, 'Math.cos').replace(/tan/g, 'Math.tan'))
    const trimmedResult = Number(result.toFixed(6))
    history = [...history, `${value} = ${trimmedResult}`]
    value = trimmedResult.toString()
  }

  const onKeyDown = (event) => {
    const { key } = event
    if ([...numbers, ...operators, ')', '.'].includes(key)) select(key)()
    if (key === 'Enter' || key === '=') calculate()
  }
</script>

<style>
  .keypad {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(5, 5em);
    grid-template-rows: repeat(4, 3em);
    grid-gap: 0.5em;
  }

  .value {
    text-align: center;
    margin-bottom: 15px;
  }

  .full {
    grid-column: 1 / -1;
  }
</style>

<svelte:window on:keydown={onKeyDown}/>

<CalculatorBox history={history}>
  <div class="value">&nbsp;{value}&nbsp;</div>

  <div class="keypad">
    <CalculatorButton on:click={select('sin')} text="sin" isFull isSpecial disabled={!canAddFn} />
    <CalculatorButton on:click={select('1')} text="1" isFull disabled={!canAddNonZeroNumber} />
    <CalculatorButton on:click={select('2')} text="2" isFull disabled={!canAddNonZeroNumber} />
    <CalculatorButton on:click={select('3')} text="3" isFull disabled={!canAddNonZeroNumber} />
    <CalculatorButton on:click={select('+')} text="+" isFull isSpecial disabled={!canAddOperator} />

    <CalculatorButton on:click={select('cos')} text="cos" isFull isSpecial disabled={!canAddFn} />
    <CalculatorButton on:click={select('4')} text="4" isFull disabled={!canAddNonZeroNumber} />
    <CalculatorButton on:click={select('5')} text="5" isFull disabled={!canAddNonZeroNumber} />
    <CalculatorButton on:click={select('6')} text="6" isFull disabled={!canAddNonZeroNumber} />
    <CalculatorButton on:click={select('-')} text="-" isFull isSpecial disabled={!canAddOperator} />

    <CalculatorButton on:click={select('tan')} text="tan" isFull isSpecial disabled={!canAddFn} />
    <CalculatorButton on:click={select('7')} text="7" isFull disabled={!canAddNonZeroNumber} />
    <CalculatorButton on:click={select('8')} text="8" isFull disabled={!canAddNonZeroNumber} />
    <CalculatorButton on:click={select('9')} text="9" isFull disabled={!canAddNonZeroNumber} />
    <CalculatorButton on:click={select('*')} text="*" isFull isSpecial disabled={!canAddOperator} />

    <CalculatorButton on:click={select(')')} text=")" isFull isSpecial disabled={!canAddClosedParenthesis} />
    <CalculatorButton on:click={clear} text="C" isFull isSpecial disabled={!value} />
    <CalculatorButton on:click={select('0')} text="0" isFull disabled={!canAddZero} />
    <CalculatorButton on:click={select('.')} text="." isFull isSpecial disabled={!canAddDecimal} />
    <CalculatorButton on:click={select('/')} text="/" isFull isSpecial disabled={!canAddOperator} />

    <div class="full">
      <CalculatorButton on:click={calculate} text="=" isFull isSpecial disabled={!canCalculate} />
    </div>
  </div>
</CalculatorBox>
