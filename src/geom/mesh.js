/**
 * This class is a container for all mesh related functionality.
 * Meshes contain n amount of Polygons.
 * Polygons contain n amount of Vertex objects.
 *
 * @class Mesh
 * @constructor
 */
TRAIL.Mesh = function()
{
	this.polygons = [];
	this.polygonLinks = [];
	this.graph = null;
};


/**
 * Returns all Polygons in an Array
 *
 * @return {Array} Array of Polygons
 */
TRAIL.Mesh.prototype.getPolygons = function()
{
	return this.polygons;
};


/**
 * Returns a single Polygon by id, the id
 * is it's location in the Array - not very user friendly atm
 *
 * @return {Polygon} Polygon
 */
TRAIL.Mesh.prototype.getPolygon = function(id)
{
	return this.polygons[id];
};


/**
 * Adds a Polygon object to the Mesh
 *
 * @param polygon {Polygon} the Polygon to be added to the Mesh
 */
TRAIL.Mesh.prototype.addPolygon = function(polygon)
{
	this.polygons.push(polygon);
}


/**
 * Prepares the Graph for use by the A* Agent for pathfinding
 *
 *
 * @return {Graph} Returns the Graph to be used by A*
 */
TRAIL.Mesh.prototype.prepareGraph = function()
{
	this.edges = [];
	this.graph = [];
	this.polygonLinks = [];

	// iterate over polygons to build the Edges - Edges need to be collected before building the graph nodes
	for(var i = 0; i < this.polygons.length; i++)
	{
		var polygon = this.polygons[i];
		var edges = polygon.getEdges();
		for(var j = 0; j < edges.length; j++)
		{
			var edge = edges[j];
			var hash = edge.getHash();

			// create one element arrays as standard - otherwise push in to the array if more than one item already exists
			if(this.polygonLinks[hash] == undefined)
			{
				this.polygonLinks[hash] = [edge];
			} else
			{
				this.polygonLinks[hash].push(edge);
			}
		}
	}


	// TODO this is creating too many graphnodes
//	for(edges in this.polygonLinks)
//	{
//		if(this.polygonLinks[edges].length > 1)
//		{
//			// TODO need connecting Polygons to link the graphnodes
//			for(var i = 0; i < this.polygonLinks[edges].length; i++)
//			{
//				var edge = this.polygonLinks[edges][i];
//				var center = edge.polygon.getCentroid();
//
//				// create a graphnode and link to all other polys sharing the edge
//				var graphNode = new TRAIL.GraphNode(center.x, center.y);
//				for(var j = 0; j < this.polygonLinks[edges].length; j++)
//				{
//					if(j != i)
//					{
//						graphNode.connectedGraphNodes.push(this.polygonLinks[edges][j].polygon);
//					}
//				}
//				this.graph.push(graphNode);
//			}
//		}
//	}

	// iterate over all edge hashes and building the graph nodes at polygon centers
	// linking polygons where n amount of polygons have an edge.
	// e.g. graph nodes at center of polygon 1 and 2. polygon 1 and 2 share an edge (hashed) so we link their graphnodes.
	for(var i = 0; i < this.polygons.length; i++)
	{
		var polygon = this.polygons[i];
		var center = polygon.getCenter();
		var graphNode = new TRAIL.GraphNode(center.x, center.y);
		this.graph.push(graphNode);

		// do i iterate each polygonlink/edge here comparing against this polygon and adding the shared edge? kinda, bruteforcey :(
		// is there a better approach (almost certainly)
	}

	// manually force a link for debugging
	// TODO remove this shizzle
	this.graph[0].connectedGraphNodes[0]=this.graph[1];

	// verbose output for debugging
	console.log("created: " + this.graph.length + " graphnodes");
	for(var i = 0; i < this.graph.length; i++)
	{
		var graphNode = this.graph[i];
		console.log("graphnode " + i + " has " + graphNode.connectedGraphNodes.length + " connections");
	}
}


// constructor
TRAIL.Mesh.prototype.constructor = TRAIL.Mesh;