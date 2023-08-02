import React from 'react'

const Footer = () => {
  return (
    <div>
        <br/> <br/> <br/>
      <footer
        class="text-center text-white "
        style={{ backgroundColor: "#343434" }}
      >
        <div class="container p-4"></div>
        <div
          class="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2022 Copyright:
          <a class="text-white" href="https://mdbootstrap.com/">
            Bloggers.com
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer