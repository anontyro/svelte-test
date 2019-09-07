<script>
  import { Store } from "../../../store/chatStore.js";
  import { ACTIVE_COMPONENT } from "../../../store/storeEnums.js";

  let userName = "";
  const userId = Date.now();
  let showModal = true;
  const storeSubscription = Store.subscribe(store => {
    userName = store.user.userName;
  });

  const onSubmit = event => {
    socket.emit("user-joins", { userName, userId });
    Store.update(store => {
      const user = { userName, userId };
      const properties = {
        ...store.properties,
        current: ACTIVE_COMPONENT.CHAT_WINDOW
      };
      return { ...store, user, properties };
    });

    showModal = false;
  };
</script>

<style>
  .modal-bg {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.67);
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
  .modal-overlay {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 50%;
    border-radius: 15px;
    height: 25%;
    background-color: white;
    box-shadow: 1px 1px 20px 0px black;
    text-align: center;
  }
  .modal-hide {
    display: none;
  }
</style>

<div class="modal-bg {showModal ? '' : 'modal-hide'}">
  <div class="modal-overlay">
    <h3>Username</h3>
    <div>
      <input bind:value={userName} />
      <button on:click={onSubmit}>Submit</button>
    </div>
  </div>
</div>
