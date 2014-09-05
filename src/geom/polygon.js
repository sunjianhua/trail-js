/**
 * This class contains the base for polygon shapes which make up the navmesh
 *
 * @class Polygon
 * @param vertices {Array} the Vertices to make up the Polygon
 * @constructor
 */
TRAIL.Polygon = function(vertices)
{
    this.vertices = [];

	// set vertices to points
	for(var i = 0; i < vertices.length; i+=2)
	{
		var vertex = new TRAIL.Vertex(vertices[i], vertices[i+1]);
		this.vertices.push(vertex);
	}
};


/**
 * Set Polygon by Vertices
 *
 * @param vertices {Array} the Vertices to make up the Polygon
 */
TRAIL.Polygon.prototype.setVertices = function(vertices)
{
    this.vertices = [];

    // set vertices to points
    for(var i = 0; i < vertices.length; i++)
    {
        this.vertices.push(vertices[i]);
    }
};


/**
 * Get Polygon Vertices
 *
 * @return {Array} Array of Vertices
 */
TRAIL.Polygon.prototype.getVertices = function()
{
    return this.vertices;
};


/**
 * Get a specific Vertex
 *
 * @return {Vertex} Array of Vertices
 */
TRAIL.Polygon.prototype.getVertex = function(id)
{
	return this.vertices[id];
};



// constructor
TRAIL.Polygon.prototype.constructor = TRAIL.Polygon;