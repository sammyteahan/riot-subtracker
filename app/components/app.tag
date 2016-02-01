<app>
  <h2>Analytics</h2>
  <hr>

  <h4>Subs</h4>
  <submission-list submissions={state.submissions.items}></submission-list>

  <h4>Sweeps</h4>
  <sweep-list sweeps={state.sweeps.items}></sweep-list>

  <submission-form 
    addSubmission={handleNewSubmission}>
  </submission-form>

  <script>
    let self = this;
    let store = opts.store;

    self.handleNewSubmission = (submissionName) => {
      store.dispatch(opts.addSubmission(submissionName));
    }

    /**
    * @desc subscribe to store changes, so after
    * our api call is passed through reducer and 
    * state is changed, it will be updated.
    */
    store.subscribe(() => {
      self.state = store.getState();
      self.update();
    });

    self.on('mount', function() {
      store.dispatch(opts.fetchSubmissions());
      store.dispatch(opts.fetchSweeps());
    });
  </script>
</app>