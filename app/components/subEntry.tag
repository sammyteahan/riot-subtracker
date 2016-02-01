<submission-entry>
  <h2>Entry</h2>
  <form>
    <input type="number" id="subs" placeholder="Submission Count" onkeyup={}>
    <button type="submit" onClick={add}>Add</button>
  </form>
  <script type="es6">
    var self = this;
    self.disabled = true;

    self.edit = (e) => {
      self.disabled = (self.subs.value > 0);
    }
    
    self.add = (e) => {
      opts.data.datasets[0].data.push(parseInt(self.subs.value));

      // need to pass in labels as well, this is wrong
      opts.data.labels.push('');

      // opts.submissions[0].label.push("");
      self.subs.value = '';

      // self.update();
      riot.update();
    }

    self.on('update', function() {
    });

  </script>
</submission-entry>
