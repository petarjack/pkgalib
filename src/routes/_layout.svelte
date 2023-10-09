<style>
  main {
    position: relative;
    max-width: 48em;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }

  footer {
    margin: 20px 0;
    font-size: 1em;
    text-align: center;
  }

  a {
    color: #6f71ac;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
</style>

<main>
  <slot></slot>
</main>

<footer>
  <a href="/">Home</a> &nbsp; | &nbsp;
  <a href="/about">About</a> &nbsp; | &nbsp;
  <a href="/contact">Contact</a> &nbsp; | &nbsp;
  <a href="/blog">Blog</a> &nbsp; | &nbsp;
  <a href="/privacy-policy">Privacy Policy</a> &nbsp; | &nbsp;
  <a href="/terms-conditions">Terms & Conditions</a> &nbsp; | &nbsp;
  <a href="/cookies-policy">Cookies Policy</a> &nbsp; | &nbsp;
  <a href="/disclaimer">Disclaimer</a> &nbsp; | &nbsp;
  Copyright &copy; {new Date().getFullYear()} Sofa Calculator
</footer>
