'use strict';

animationsApp.factory('EnterUpdateExit', function() {
  // Public API here
  return {
    draw: function(svg, data) {
      var circle = svg.selectAll("circle").data(data);
      circle.enter().append("circle").transition().duration(3000).attr("r", function(d) { return d.r});
      circle.transition().duration(3000)
          .attr("r",    function(d) {return d.r;})
          .attr("cx",   function(d) {return d.x;})
          .attr("cy",   function(d) {return d.y;})
          .attr("fill", function(d) {return d.color;})
      circle.exit().transition().duration(3000).attr("r", 1).remove();
    }
  };
});
