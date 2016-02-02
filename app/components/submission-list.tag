<submission-list>
  <ul>
    <li each={opts.submissions}>{name} <span onclick={deleteItem}>x</span></li>
  </ul>

  <script>
    let self = this;
    let store = opts.store;

    self.deleteItem = (e) => {
      let id = e.item.id;
      let index = self.opts.submissions.indexOf(e.item);
      store.dispatch(self.opts.deletesubmission(id, index));
    }
  </script>

  <style scoped>
    span {
      cursor: pointer;
    }
  </style>
</submission-list>