/**
 * This class contains the base for polygon shapes which make up the navmesh
 *
 * @class Polygon
 * @param vertices {Array} the Vertices to make up the Polygon
 * @constructor
 */
TRAIL.Polygon = function(vertices)
{
	// sets vertices and calculates edges
	this.setVertices(vertices);
};


/**
 * Set Polygon by Vertices
 *
 * @param vertices {Array} the Vertices to make up the Polygon
 */
TRAIL.Polygon.prototype.setVertices = function(vertices)
{
	this.vertices = [];
	this.edges = [];

	// set vertices to points
	for(var i = 0; i < vertices.length; i+=2)
	{
		var vertex = new TRAIL.Vertex(vertices[i], vertices[i+1]);
		this.vertices.push(vertex);
	}

	// calculate all edges
	for (var i = 0; i < this.vertices.length; i++)
	{
		var hash1, hash2, edge;
		if(i < this.vertices.length-1)
		{
			hash1 = TRAIL.generateHash(this.vertices[i].x) + TRAIL.generateHash(this.vertices[i].y);
			hash2 = TRAIL.generateHash(this.vertices[i + 1].x) + TRAIL.generateHash(this.vertices[i + 1].y);
			edge = hash1 + hash2;
		} else
		{
			hash1 = TRAIL.generateHash(this.vertices[i].x) + TRAIL.generateHash(this.vertices[i].y);
			hash2 = TRAIL.generateHash(this.vertices[0].x) + TRAIL.generateHash(this.vertices[0].y);
			edge = hash1 + hash2;
		}

		this.edges.push(edge);
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


/**
 * Get Polygon edges.
 *
 * @return {Array} returns an Array of edges
 */
TRAIL.Polygon.prototype.getEdges = function()
{
	return this.edges;
};


/**
 * Set a specific Vertex
 *
 * @param id {integer} id of the Vertex to replace
 * @param vertex {Vertex} Vertex to be replaced with
 */
TRAIL.Polygon.prototype.setVertex = function(id, vertex)
{
	this.vertices[id] = vertex;
};


// constructor
TRAIL.Polygon.prototype.constructor = TRAIL.Polygon;