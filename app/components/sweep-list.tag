<sweep-list>
  <ul>
    <li each={opts.sweeps}>{name} <span onclick={handleDelete}>x</span></li>
  </ul>

  <script>
    let self = this;
    let store = opts.store;

    self.handleDelete = (e) => {
      let id = e.item.id;
      let index = self.opts.sweeps.indexOf(e.item);
      store.dispatch(self.opts.deletesweep(id, index));
    }
  </script>

  <style scoped>
    span {
      cursor: pointer;
    }
  </style>
</sweep-list>