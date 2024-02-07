document.addEventListener('DOMContentLoaded', () => {
    // GLOBAL VARS FOR ALL PLOTS
    var config = {responsive: true}
   
    // #1 - line plot
    TESTER = document.getElementById('line1');
    Plotly.newPlot( TESTER, [{
        x: [1, 2, 3, 4, 5],
        y: [1, 2, 4, 8, 16] }], {
            margin: { t: 0 }, 
            autosize: true }, 
            config)
            
    // #2 - bar plot
    var trace1 = {
        type: 'bar',
        x: [1, 2, 3, 4],
        y: [5, 10, 2, 8],
        marker: {
            color: '#a2d5d8',
            line: {
                width: 0
            }
        }
      };
      
      var data = [ trace1 ];
      
      var layout = { 
        title: 'Responsive to window\'s size!',
        font: {size: 18}
      };
      
      
      Plotly.newPlot('trc1', data, layout, config );

})
