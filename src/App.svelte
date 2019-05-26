<script>
  import UserInput from "./components/chat/UserInput.svelte";
  import ChatWindow from "./components/chat/ChatWindow.svelte";
  export let name;
  let message = null;
</script>

<style>

</style>

<ChatWindow />
<UserInput />
