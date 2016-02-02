<sweep-form>
  <h4>Add Sweep</h4>
  <form onsubmit={handleSubmit}>
    <input type="text" name="newSweep">
    <button type="submit">Submit</button>
  </form>
  <script>
    let self = this;

    self.handleSubmit = () => {
      self.opts.addsweep(self.newSweep.value);
      self.newSweep.value = '';
    }
  </script>
</sweep-form>