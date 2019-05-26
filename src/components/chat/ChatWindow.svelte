<script>
  import { chatStore } from "../../store/chatStore.js";
  import ChatItem from "./ChatItem";
  let chatData = [];
  const chatSub = chatStore.subscribe(val => {
    chatData = val;
  });
</script>

<style>
  .chat-window {
    height: 80vh;
    overflow-y: auto;
  }
</style>

<div class="chat-window">
  <h3>Chat Window</h3>
  {#each chatData as item}
    <ChatItem data={item} />
  {/each}
</div>
