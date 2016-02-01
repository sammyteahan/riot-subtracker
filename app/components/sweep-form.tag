<sweep-form>
  <h4>Add Sweep</h4>
  <div>
    <input type="text" name="newSweep">
    <button name="submit" onclick={handleSubmit}>Submit</button>
  </div>
  <script>
    let self = this;

    self.handleSubmit = () => {
      self.opts.addsweep(self.newSweep.value);
      self.newSweep.value = '';
    }
  </script>
</sweep-form>