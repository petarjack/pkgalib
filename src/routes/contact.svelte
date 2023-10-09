<style>
  h1 {
    text-align: center;
    margin: 0;
    padding: 0;
    font-size: 2em;
    font-weight: normal
  }

  .section {
    margin-top: 25px;
  }

  label {
    font-size: 1.2em;
  }

  input, textarea {
    background: #fff;
    border: 1px solid #707070;
    outline: 0;
    border-radius: .2em;
    font-size: 1.1em;
    font-weight: 300;
    padding: .6em;
    width: 100%;
    box-sizing: border-box;
  }

  button {
    display: block;
    background: #fff;
    color: #707070;
    border: 1px solid #707070;
    width: 100%;
    margin-bottom: .2em;
    font-size: 1.4em;
    font-weight: 300;
    padding: .6em 0;
    border-radius: .2em;
    cursor: pointer;
    box-sizing: border-box;
  }
</style>

<svelte:head>
  <title> Primary Calculator Contact</title>
</svelte:head>

<h1>Contact</h1>

<form action="https://formsubmit.co/notuoserebour@gmail.com" method="POST">
  <div class="section">
    <label for="name">Name:</label><br>
    <input type="text" name="name" id="name" required>
  </div>

  <div class="section">
    <label for="email">E-mail:</label><br>
    <input type="email" name="email" id="email" required>
  </div>

  <div class="section">
    <label for="message">Message:</label><br>
    <textarea name="message" id="message" rows="5" required></textarea>
  </div>

  <div class="section">
    <button type="submit">Send</button>
  </div>
</form>
