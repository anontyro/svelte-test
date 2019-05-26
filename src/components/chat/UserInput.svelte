<script>
  import { chatStore } from "../../store/chatStore.js";
  const defaultText = "Enter text to start talking";
  let currentMsg = defaultText;

  const onInputSelect = event => {
    if (event.target.value === defaultText) {
      currentMsg = "";
    }
  };

  const onInputBlur = event => {
    if (event.target.value === "") {
      currentMsg = defaultText;
    }
  };

  const onSubmit = event => {
    if (currentMsg !== defaultText || currentMsg !== "") {
      console.log(`Submitted text: ${currentMsg}`);
      chatStore.update(val => [...val, currentMsg]);
      currentMsg = "";
    }
  };

  const handleKeydown = event => {
    if (event.key.toLowerCase() === "enter") {
      onSubmit(event);
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
    bind:value={currentMsg}
    on:click={onInputSelect}
    on:blur={onInputBlur}
    rows="3"
    cols="50" />
  <button on:click={onSubmit}>Submit</button>
</div>
<svelte:window on:keydown={handleKeydown} />
