<script>
  import background from "$lib/images/bf-background.jpeg";
  import { enhance } from "$app/forms";

  let submit = false;
  let first_name = "John";
  let last_name = "Doe";
  let email = "nobody@none.com";
  const handlesubmit = () => {
    submit = true;
  };

  let displayform = false;

  const showform = () => {
    if (displayform === false) {
      displayform = true;
    } else {
      displayform = false;
    }
  };
</script>

<main>
  <div class="container">
    <div class="banner">
      <h1>Coming Soon!</h1>
      <h2>Bailey Freed Wellness</h2>
      <button
        class="signup-btn"
        class:signup-btn-active={displayform}
        on:click={showform}>Sign up to find out when its ready!</button
      >
      {#if displayform === true}
        <div class="form_container">
          <form class="signup-form" method="POST">
            <input name="first_name" type="text" placeholder="First Name" />
            <input name="last_name" type="text" placeholder="Last Name" />
            <input name="email" type="text" placeholder="Email" />
            <button>Submit</button>
          </form>
        </div>
      {/if}
    </div>

    <div class="background">
      <img alt="Wellness banner" src={background} />
    </div>
  </div>
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;700&display=swap");

  @font-face {
    font-family: "Playlist script";
    src: url("$lib/fonts/Playlist Script.otf");
  }
  .container {
    display: flex;
    height: 100vh;
    width: 100vw;
  }

  .banner {
    display: flex;
    width: 100vw;
    height: 800px;
    justify-content: center;
    flex-direction: column;
  }
  h1 {
    position: absolute;
    font-family: "Poppins", sans-serif;
    color: #0f3879;
    font-size: 150px;
    text-align: center;
    top: 0;
    padding-top: 200px;
    margin: 0 auto;
    z-index: 2;
    width: 100vw;
  }
  h2 {
    position: absolute;
    font-family: "Playlist script", sans-serif;
    color: #ffffff;
    font-size: 150px;
    text-align: center;
    top: 0;
    padding-top: 380px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin: 0 auto;
    z-index: 2;
    width: 100vw;
  }

  .signup-btn {
    position: absolute;
    align-self: center;
    width: 710px;
    height: 100px;
    font-family: "Poppins", sans-serif;
    color: #ff6567;
    font-weight: 500;
    background-color: #ffffff;
    font-size: 40px;
    border-radius: 20px;
    margin-top: 550px;
    cursor: pointer;
    border: none;
  }
  .signup-btn:active {
    background-color: #ff6567;
    color: #ffffff;
  }

  .signup-btn-active {
    position: absolute;
    align-self: center;
    width: 710px;
    height: 100px;
    font-family: "Poppins", sans-serif;
    color: #fff;
    font-weight: 500;
    background-color: #ff6567;
    font-size: 40px;
    border-radius: 20px;
    margin-top: 550px;
    cursor: pointer;
    border: none;
  }

  .form_container {
    display: flex;
    position: absolute;
    align-self: center;
    width: 400px;
    height: 250px;
    background-color: #fff;
    border-radius: 20px;
    margin-top: 970px;
  }

  .signup-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 265px;
    background-color: #fff;
    border-radius: 20px;
  }

  .signup-form button {
    background-color: #ff6567;
    font-family: "Poppins", sans-serif;
    font-size: 20px;
    color: #ffffff;
    margin-top: 20px;
    border-radius: 10px;
    border: 2px solid #ff6567;
    cursor: pointer;
    height: 65px;
    width: 100px;
  }
  .signup-form input {
    display: block;
    background-color: #ffffff;
    border: 0;
    font-size: 18px;
    margin-top: 20px;
    border: 1px solid #7bddd2;
    border-radius: 5px;
    color: #0f3879;
    font-family: "Poppins", sans-serif;
  }
  .background {
    position: fixed;
    margin: 0 auto;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: -100;
  }

  @media (max-width: 900px) {
    h1 {
      font-size: 200px;
    }
  }

  @media (max-width: 600px) {
    .container {
      width: 430px;
      margin: 0 auto;
      right: 0;
    }
    .banner {
      width: 100vw;
      height: 600px;
    }
    h1 {
      padding-top: 200px;
      font-size: 50px;
    }
    h2 {
      padding-top: 300px;
      font-size: 45px;
    }

    .signup-btn {
      width: 350px;
      height: 50px;
      font-size: 18px;
      margin-top: 250px;
    }

    .background img {
      position: absolute;
      height: 1080px;
      width: 1920px;
      right: -300px;
    }

    .form_container {
      margin-top: 615px;
      height: 250px;
    }
    .signup-form button {
      text-align: center;
      height: 50px;
      width: 120px;
    }
  }
</style>
