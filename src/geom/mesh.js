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
	var edges = [];
	var graph = [];
	var polygonLinks = [];

	// STEP 1
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
			if(polygonLinks[hash] == undefined)
			{
				polygonLinks[hash] = [edge];
			} else
			{
				polygonLinks[hash].push(edge);
			}
		}
	}

	// STEP 2
	// here we iterate the hashed edges, reverse linking the missing polygons in the edge objects
	var edgeID;
	var hashedNodes = [];
	for(edgeID in polygonLinks)
	{
		if(polygonLinks[edgeID].length > 1)
		{
			// set each edges second polygon - for easy reference when creating the graph nodes
			polygonLinks[edgeID][0].polygon2 = polygonLinks[edgeID][1].polygon1;
			polygonLinks[edgeID][1].polygon2 = polygonLinks[edgeID][0].polygon1;


			// TODO this needs tidying but essentially works!
				// gets or creates a unique graphnode
				var graphNode1;
				var hash1 = TRAIL.generateHash(polygonLinks[edgeID][0].polygon1.x) + TRAIL.generateHash(polygonLinks[edgeID][0].polygon1.y);
				if(hashedNodes[hash1] != undefined)
				{
					graphNode1 = hashedNodes[hash1];
				} else
				{
					var center1 = polygonLinks[edgeID][0].polygon1.getCenter();
					graphNode1 = new TRAIL.GraphNode(center1.x, center1.y);
					graph.push(graphNode1);
				}

				var graphNode2;
				var hash2 = TRAIL.generateHash(polygonLinks[edgeID][1].polygon1.x) + TRAIL.generateHash(polygonLinks[edgeID][1].polygon1.y);
				if(hashedNodes[hash2] != undefined)
				{
					graphNode2 = hashedNodes[hash2];
				} else
				{
					var center2 = polygonLinks[edgeID][1].polygon1.getCenter();
					graphNode2 = new TRAIL.GraphNode(center2.x, center2.y);
					graph.push(graphNode2);
				}

				graphNode1.connectedGraphNodes.push(graphNode2);
				graphNode2.connectedGraphNodes.push(graphNode1);
		}
	}

	return graph;
}


// constructor
TRAIL.Mesh.prototype.constructor = TRAIL.Mesh;