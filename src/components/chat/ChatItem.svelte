<script>
  export let data = null;
</script>

<style>
  .chat-message {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0.5rem 1rem;
    padding: 0 0.5rem;
  }
  .date {
    color: green;
  }
  .message {
    flex-grow: 1;
    margin: auto 2rem;
  }
  .user {
    font-size: 1rem;
    font-weight: 800;
  }
  .even {
    background-color: ghostwhite;
  }
</style>

<div class="chat-message {data.index % 2 === 0 ? 'even' : ''}">
  <p class="date">[{data.dateStamp}]</p>
  <p class="message">{data.msg}</p>
  <p class="user">{data.user}</p>
</div>
