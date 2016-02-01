<submission-form>
  <h4>Add a new submission</h4>
  <div>
    <input type="text" name="newSub">
    <button name="submit" onclick={handleSubmit}>Submit</button>
  </div>

  <script>
    let self = this;

    self.handleSubmit = () => {
      self.opts.addsubmission(self.newSub.value);
      self.newSub.value = '';
    }
  </script>
</submission-form>