<script>
  import { onMount } from "svelte";
  import { Store } from "../../store/chatStore.js";
  import ChatItem from "./ChatItem";
  let chatData = [];
  const chatSub = Store.subscribe(store => {
    chatData = store.chat;
  });

  socket.on("chat message", msg => {
    console.log(msg);
    Store.update(store => {
      const chatData = store.chat;
      const output = { ...store, chat: [msg, ...chatData] };
      return output;
    });
  });
</script>

<style>
  .chat-header {
    text-align: center;
    width: 100%;
  }
  .chat-window {
    height: 77vh;
    overflow-y: auto;
    border: 5px solid #8b8cd4;
    border-bottom: unset;
    border-radius: 5px 5px 0 0;
  }
</style>

<div class="chat-header">
  <h3>Svelte Chat</h3>
</div>
<div class="chat-window">
  {#each chatData as item}
    <ChatItem data={item} />
  {/each}
</div>
