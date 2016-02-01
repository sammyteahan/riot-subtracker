<radar-graph>
  <div style="max-width: 600px; margin: 0 auto">
    <canvas id="radarChart"></canvas>
  </div>
  
  <script type="es6">
    let self = this;
    let Chart = self.opts.chart;

    self.ctx = self.radarChart.getContext('2d');

    self.options = {
      scaleShowLine: true,
      angleShowLineOut: true,
      responsive: true
    };

    let drawChart = () => {
      self.radarChart = new Chart(self.ctx).Radar(opts.data, self.options);
    }

    self.on('mount', function() {
      drawChart();
    });

  </script>
</radar-graph>
