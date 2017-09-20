var graph = Viva.Graph.graph ();
nodePositions = [{
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
}];


var firstNode = graph.addNode(1, 'Patent');
firstNode.isPinned = true;
graph.addNode(2, 'Law');
graph.addNode(3, 'Merge');
graph.addNode(4, 'Acquisition');
graph.addNode(5, 'Immigration');
graph.addNode(6, 'Family');

graph.addNode(7, 'Divorce');
graph.addNode(8, 'Marriage');
graph.addNode(9, 'Religion');


graph.addLink(1, 2);
graph.addLink(2, 3);
graph.addLink(1, 4);
graph.addLink(4, 5);
graph.addLink(5, 6);
graph.addLink(4, 7);
graph.addLink(7, 8);
graph.addLink(8, 9);
var graphics = Viva.Graph.View.svgGraphics();
var nodeSize = 40;
var no = 20;

graphics.node(function(node) {
  if (node.id == 1) {
    var ui = Viva.Graph.svg('g'),
      text = Viva.Graph.svg('text').text(node.data).attr('width', node.data.size).attr('height', node.data.size).attr("id", '1').attr("font-weight", 'bold'),
      img = Viva.Graph.svg('image').attr('width', 84).attr('height', 84).link('img/A/' + node.data + '.jpg');
    ui.append(text);
    ui.append(img);
    ui.myCustomSize = node.data.size;
    return ui;
  } else {
    var ui = Viva.Graph.svg('g'),
      text = Viva.Graph.svg('text').text(node.data).attr('width', node.data.size).attr('height', node.data.size).attr("id", '2'),
      img = Viva.Graph.svg('image').attr('width', 84).attr('height', 84).link('img/A/' + node.data + '.jpg');
    ui.append(text);
    ui.append(img);
    ui.myCustomSize = node.data.size;
    //pinNode(1, !layout.isNodePinned(node));
    return ui;
  }
}).placeNode(function(nodeUI, pos) {
  nodeUI.attr('transform', 'translate(' + (pos.x) + ',' + (pos.y) + ')');
});


var renderer = Viva.Graph.View.renderer(graph, {
  graphics: graphics
});

renderer.run();
