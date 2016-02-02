<submission-form>
  <h4>Add a new submission</h4>
  <form onsubmit={handleSubmit}>
    <input type="text" name="newSub">
    <button type="submit">Submit</button>
  </form>

  <script>
    let self = this;

    self.handleSubmit = () => {
      self.opts.addsubmission(self.newSub.value);
      self.newSub.value = '';
    }
  </script>
</submission-form>