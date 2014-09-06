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
	// iterate over polygons - getting all edges
	for (var i = 0; i < this.polygons.length; i++)
	{
		var polygon = this.polygons[i];
		var edges = polygon.getEdges();

		// iterate over all edge hashes and placing them in the polygonLink array (using their hash)
		for (var j = 0; j < edges.length; j++)
		{
			var edge = edges[j];
			if(this.polygonLinks[edge] == undefined)
			{
				this.polygonLinks[edge] = [polygon];
			} else
			{
				this.polygonLinks[edge].push(polygon);
			}
		}
	}
}


// constructor
TRAIL.Mesh.prototype.constructor = TRAIL.Mesh;