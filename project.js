var graph = Viva.Graph.graph();
	var graphics = Viva.Graph.View.svgGraphics(),
	
	nodeSize = 24;
	
	//creating link color change
	highlightRelatedNodes = function(nodeId, isOn) {
		graph.forEachLinkedNode(nodeId, function(node, link){
			var linkUI = graphics.getLinkUI(link.id);
                       if (linkUI) {
                           linkUI.attr('stroke', isOn ? 'red' : 'gray');
                       }
                   });
                };

        graph.addNode('ECE', '');
        graph.addNode('CSE', '');
    	graph.addNode('EE', '');
    	graph.addNode('BCT', '');
    	graph.addNode('DS' , '');
    	graph.addNode('OOP', '')	
	graph.addNode('PRP', '');
    	graph.addNode('DL', '');
	graph.addNode('DM', '');
    	graph.addNode('DS', '');
    	graph.addNode('CO', '');
	graph.addNode('IA', '');
    	graph.addNode('OS', '');
    	graph.addNode('TC', '');
    	graph.addNode('PPL', '');
    	graph.addNode('CN', '');
    	graph.addNode('IC', '');
    	graph.addNode('PC', '');
//    graph.addNode(18, {name: '18'});
    	graph.addNode('MC','');
    	graph.addNode('CG','');

	graph.addLink('ECE', 'CSE');
	graph.addLink('ECE', 'EE');
	graph.addLink('CSE', 'BCT');
	graph.addLink('CSE','OOP');
	graph.addLink('CSE', 'TC');
	graph.addLink('CSE', 'PRP');
        graph.addLink('CSE', 'DL');
        graph.addLink('CSE', 'DM');
        graph.addLink('OOP','DS');
 	graph.addLink('DM', 'IA');
        graph.addLink('OOP', 'CO');
        graph.addLink('DL', 'CO');
        graph.addLink('DS','OS');
        graph.addLink('DL', 'OS');
        graph.addLink('OOP', 'PPL');
        graph.addLink('PRP', 'CN');
        graph.addLink('OOP','CN');
	graph.addLink('PPL', 'IC');
        graph.addLink('OS', 'PC');
        graph.addLink('OOP', 'MC');
        graph.addLink('DS','OS');
        graph.addLink('CN', 'MC');
        graph.addLink('DS', 'CG');
        graph.addLink('OOP', 'CG');
        


	graphics.node(function(node) {
              var ui = Viva.Graph.svg('g'),
                  // Create SVG text element with user id as content
                  svgText = Viva.Graph.svg('text').attr('y', '-4px').text(node.id),
                  img = Viva.Graph.svg('image')
                     .attr('width', nodeSize)
                     .attr('height', nodeSize)
                     .link('http://www.clipartkid.com/images/131/blue-circle-h0HTbH-clipart.png' + node.data);
              ui.append(svgText);
              ui.append(img);
	      $(ui).hover(function() { // mouse over
                    highlightRelatedNodes(node.id, true);
                }, function() { // mouse out
                    highlightRelatedNodes(node.id, false);
                });
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
