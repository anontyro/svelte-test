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

  const getDateStamp = () => {
    const date = new Date();
    const time = `${date.getHours()}:${date.getMinutes()}`;
    const day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
    const month = date.getMonth() > 9 ? date.getMonth() : `0${date.getMonth()}`;
    const dateNow = `${day}/${month}:${time}`;
    return dateNow;
  };

  const addNewMessage = (val, store) => {
    const msg = {
      dateStamp: getDateStamp(),
      msg: val,
      user: "me"
    };
    store.update(val => {
      msg.index = val.length;
      socket.emit("chat message", msg);
      const output = [msg, ...val];
      return output;
    });
  };

  const onSubmit = event => {
    if (currentMsg !== defaultText || currentMsg !== "") {
      console.log(`Submitted text: ${currentMsg}`);
      addNewMessage(currentMsg, chatStore);
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
