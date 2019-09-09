<script>
  import { Router, Route } from "svero";
  import Chat from "./routes/Chat.svelte";
  import Settings from "./routes/Settings.svelte";
  import Page from "page";
  export let name;
  let message = null;
</script>

<style>

</style>

<Router>
  <Route exact path="" component={Chat} />
  <Route path="/home" component={Chat} />
  <Route path="/setting" redirect="/settings" />
  <Route path="/settings" component={Settings} />
  <Route path="/static-path">
    <h1>It works!</h1>
  </Route>
  <Route path="*">
    <h1>No page found</h1>
  </Route>
</Router>
