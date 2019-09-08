<script>
  import { Router, Route } from "svero";
  import Chat from "./routes/Chat.svelte";
  import Page from "page";
  export let name;
  let message = null;
</script>

<style>

</style>

<Router>
  <Route exact path="">
    <Chat />
  </Route>
  <Route path="/static-path">
    <h1>It works!</h1>
  </Route>
</Router>
