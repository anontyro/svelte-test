<script>
  import UserInput from "./components/chat/UserInput.svelte";
  import ChatWindow from "./components/chat/ChatWindow.svelte";
  export let name;
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<h1>Hello {name}!</h1>
<ChatWindow />
<UserInput />
