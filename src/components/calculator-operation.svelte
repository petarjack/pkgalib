<style>
  .calculator-operation {
    display: flex;
  }

  .calculator-operation__left {
    flex: 1 0 70%;
    display: flex;
    align-items: center;
  }

  .calculator-operation__right {
    text-align: right;
    flex: 0 0 30%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
</style>

<div class="calculator-operation">
  <div class="calculator-operation__left">
    <slot name="left"></slot>
  </div>

  <div class="calculator-operation__right">
    <slot name="right"></slot>
  </div>
</div>
