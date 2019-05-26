<script>
  const defaultText = "Enter text to start talking";
  let userData = defaultText;

  const onInputSelect = event => {
    if (event.target.value === defaultText) {
      userData = "";
    }
  };

  const onInputBlur = event => {
    if (event.target.value === "") {
      userData = defaultText;
    }
  };
</script>

<style>
  .user-input {
    display: flex;
    flex-direction: row;
  }
  textarea {
    flex-grow: 1;
  }
</style>

<div class="user-input">
  <textarea
    bind:value={userData}
    on:click={onInputSelect}
    on:blur={onInputBlur}
    rows="3"
    cols="50" />
  <button>Submit</button>
</div>
