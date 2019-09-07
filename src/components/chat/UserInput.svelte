<script>
  import { Store } from "../../store/chatStore.js";
  import { ACTIVE_COMPONENT } from "../../store/storeEnums";

  const defaultText = "Enter text to start talking";
  let currentMsg = "";
  let userName = "user";
  let activeComponent = "";

  const storeSubscription = Store.subscribe(store => {
    userName = store.user.userName;
    activeComponent = store.properties.current;
  });

  const getDateStamp = () => {
    const date = new Date();
    const time = `${date.getHours()}:${date.getMinutes()}`;
    const day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
    const month = date.getMonth() > 9 ? date.getMonth() : `0${date.getMonth()}`;
    const dateNow = `${day}/${month}:${time}`;
    return dateNow;
  };

  const addNewMessage = (val, Store, userName) => {
    const msg = {
      dateStamp: getDateStamp(),
      msg: val,
      user: userName
    };
    Store.update(store => {
      console.log(store.chat.length);
      const chatData = store.chat;
      msg.index = chatData.length;
      socket.emit("chat message", msg);
      const output = { ...store, chat: [msg, ...chatData] };
      return output;
    });
  };

  const onSubmit = event => {
    currentMsg = currentMsg.trim();
    if (currentMsg.length > 1) {
      console.log(`Submitted text: ${currentMsg}`);
      addNewMessage(currentMsg, Store, userName);
      currentMsg = "";
    }
  };

  const handleKeydown = event => {
    if (
      event.key.toLowerCase() === "enter" &&
      activeComponent === ACTIVE_COMPONENT.CHAT_WINDOW
    ) {
      onSubmit(event);
    }
  };
</script>

<style>
  .user-input {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  textarea {
    flex-grow: 1;
  }
</style>

<div class="user-input">
  <textarea bind:value={currentMsg} placeholder={defaultText} rows="3" />
  <button on:click={onSubmit}>Submit</button>
</div>
<svelte:window on:keydown={handleKeydown} />
