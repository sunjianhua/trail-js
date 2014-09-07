/**
 * This GraphNode is used in the A* Navigation
 *
 * A Graph has multiple GraphNodes.
 *
 * The GraphNodes are used as paths and as such have a reference
 * to other connected GraphNodes.
 *
 * @class GraphNode
 * @constructor
 * @param x {Integer} the x position of the Vertex
 * @param y {Integer} the y position of the Vertex
 */
TRAIL.GraphNode = function(x, y)
{
	this.x = x;
	this.y = y;
	this.connectedGraphNodes = [];
};


// GraphNode
TRAIL.GraphNode.prototype.constructor = TRAIL.GraphNode;