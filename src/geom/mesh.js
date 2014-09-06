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
};


/**
 * Gets all Polygons
 *
 * @return {Array} Array of Polygons
 */
TRAIL.Mesh.prototype.getPolygons = function()
{
    return this.polygons;
};


/**
 * Gets a Polygon by id
 *
 * @return {Polygon} Polygon
 */
TRAIL.Mesh.prototype.getPolygon = function(id)
{
	return this.polygons[id];
};


/**
 * Generate a Polygon by Vertex hash
 *
 * @param polygon {Polygon} the vertices to be used by hash
 */
TRAIL.Mesh.prototype.addPolygon = function(polygon)
{
    this.polygons.push(polygon);
}


/**
 * Test edge collection
 *
 * @param polygon {Polygon} the vertices to be used by hash
 */
TRAIL.Mesh.prototype.calculatePolygonLinks = function()
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

	console.log("graph test*");
	console.dir(this.polygonLinks);
}


// constructor
TRAIL.Mesh.prototype.constructor = TRAIL.Mesh;