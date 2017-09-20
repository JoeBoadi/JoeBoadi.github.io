var graph = Viva.Graph.graph ();
/*nodePositions = [{
  x: 0,
  y: 0
}, {
  x: 0,
  y: 0
}, {
  x: 0,
  y: 0
}, {
  x: 0,
  y: -50
}, {
  x: 0,
  y: -75
}, {
  x: 0,
  y: -100
}, {
  x: 0,
  y: -25
}, {
  x: 0,
  y: 0
}];*/


var firstNode = graph.addNode(1, '')
firstNode.isPinned = true;
graph.addNode(2, '');
graph.addNode(3, '');
graph.addNode(4, '');
graph.addNode(5, '');
graph.addNode(6, '');

graph.addNode(7, '');
graph.addNode(8, '');
graph.addNode(9, '');
graph.addNode(10, '');
graph.addNode(11, '');
graph.addNode (12, '');
graph.addNode (13, '');

graph.addLink(1, 2);
graph.addLink(2, 3);
graph.addLink(1, 4);
graph.addLink(4, 5);
graph.addLink(5, 6);
graph.addLink(4, 7);
graph.addLink(7, 8);
graph.addLink(8, 9);
graph.addLink(9, 10);
graph.addLink(10, 11);
graph.addLink(13, 12);
graph.addLink(12, 5);

var graphics = Viva.Graph.View.svgGraphics();
var nodeSize = 40;
var no = 20;


 var  graphics.node(function(node) {
              // This time it's a group of elements: http://www.w3.org/TR/SVG/struct.html#Groups
              var ui = Viva.Graph.svg('g'),
                  // Create SVG text element with user id as content
                  svgText = Viva.Graph.svg('text').attr('y', '-4px').text(node.id),
                  img = Viva.Graph.svg('image')
                     .attr('width', nodeSize)
                     .attr('height', nodeSize)
                     .link('https://upload.wikimedia.org/wikipedia/commons/8/8e/Pan_Blue_Circle.png' + node.data);
              ui.append(svgText);
              ui.append(img);
              return ui;
            }).placeNode(function(nodeUI, pos) {
                // 'g' element doesn't have convenient (x,y) attributes, instead
                // we have to deal with transforms: http://www.w3.org/TR/SVG/coords.html#SVGGlobalTransformAttribute
                nodeUI.attr('transform',
                            'translate(' +
                                  (pos.x - nodeSize/2) + ',' + (pos.y - nodeSize/2) +
                            ')');
            });
            // Render the graph
            var renderer = Viva.Graph.View.renderer(graph, {
                    graphics : graphics
                });
            renderer.run();
        
