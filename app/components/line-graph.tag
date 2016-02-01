<line-graph>
  <div style="max-width: 600px; margin: 0 auto">
    <canvas id="chart"></canvas>
  </div>

  <script type="es6">
    let self = this;
    let Chart = self.opts.chart;

    self.ctx = self.chart.getContext('2d');

    self.options = {
      scaleShowGridLines: true,
      responsive: true
    };

    function drawChart() {
      self.lineChart = new Chart(self.ctx).Line(opts.data, self.options);
    }

    self.on('mount', function() {
      drawChart();
    });

    self.on('update', function() {
      
    });

  </script>
</line-graph>
