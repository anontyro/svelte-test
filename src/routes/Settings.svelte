<script>
  import { onMount, onDestroy } from "svelte";
  import { Link } from "svero";
  import { Store } from "../store/chatStore";
  import ChatItem from "../components/chat/ChatItem";

  let userName = "";
  let chatMessages = [];

  const unsubscribe = Store.subscribe(store => {
    userName = store.user.userName;
    chatMessages = store.chat;
  });

  const getLastMessage = () => {
    const lastMessage = chatMessages.find(item => item.user === userName);
    return lastMessage ? lastMessage.msg : "";
  };

  onDestroy(unsubscribe);
</script>

<style>
  .settings-header {
    display: flex;
    justify-content: center;
    position: relative;
    margin: 0.5rem;
    line-height: 2;
  }
  .title {
    text-transform: capitalize;
    font-size: 2rem;
  }
  .back-btn {
    position: absolute;
    left: 10px;
  }
  .user-item {
    display: flex;
  }
  .user-value {
    margin: 0 20px;
  }
</style>

<div class="settings-header">
  <div class="back-btn">
    <Link href="/" className="link-btn">Back</Link>
  </div>
  <div class="title">{userName} Setting Page</div>
</div>
<div class="settings-body">
  <div class="user-item">
    <div class="user-key">Last Message:</div>
    <div class="user-value">{getLastMessage()}</div>
  </div>
</div>
