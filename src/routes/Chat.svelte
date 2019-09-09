<script>
  export let router = {};
  import { Link } from "svero";
  import UserInput from "../components/chat/UserInput.svelte";
  import ChatWindow from "../components/chat/ChatWindow.svelte";
  import UserSelectModal from "../components/modal/userSelect/UserSelectModal.svelte";
</script>

<ChatWindow />
<UserInput />
<UserSelectModal />
<Link href="/settings" className="link-btn">Settings</Link>
