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
	for(var i = 0; i < vertices.length; i += 2)
	{
		var vertex = new TRAIL.Vertex(vertices[i], vertices[i + 1]);
		this.vertices.push(vertex);
	}

	// calculate all edges
	for(var i = 0; i < this.vertices.length; i++)
	{
		var hash1, hash2, edge;
		if(i < this.vertices.length - 1)
		{
			edge = new TRAIL.Edge(this.vertices[i], this.vertices[i + 1], this);
		} else
		{
			edge = new TRAIL.Edge(this.vertices[i], this.vertices[0], this);
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


/**
 * Returns a Vertex that denotes the Polygons centeroid
 * TODO does this work with concave polygons?
 * @return {Array} returns an Array of edges
 */
TRAIL.Polygon.prototype.getCentroid = function()
{
	var twicearea = 0,
		x = 0, y = 0,
		p1, p2, f;

	for(var i = 0, j = this.vertices.length - 1; i < this.vertices.length; j = i++)
	{
		p1 = this.vertices[i];
		p2 = this.vertices[j];

		f = p1.x * p2.y - p2.x * p1.y;
		twicearea += f;

		x += (p1.x + p2.x) * f;
		y += (p1.y + p2.y) * f;
	}
	f = twicearea * 3;

	return new TRAIL.Vertex(x / f, y / f);
}

// constructor
TRAIL.Polygon.prototype.constructor = TRAIL.Polygon;