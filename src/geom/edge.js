/**
 * This class is an Edge implementation.
 * Edges make up the boundaries of Polygons using two Vertices.
 * Edges also contain a reference to the Vertex objects and the parent Polygon and are used to make up a Graph.
 *
 * @class Edge
 * @constructor
 * @param vertex1 {Vertex} the first vertex
 * @param vertex2 {Vertex} the second vertex
 * @param polygon {Polygon} the polygon parent
 */
TRAIL.Edge = function(vertex1, vertex2, polygon)
{
	// calculate hash (for easy detection of shared edges by the polygons)
	var hash1 = TRAIL.generateHash(vertex1.x) + TRAIL.generateHash(vertex1.y);
	var hash2 = TRAIL.generateHash(vertex2.x) + TRAIL.generateHash(vertex2.y);
	var hash = hash1 + hash2;

	// set properties
	this.vertex1 = vertex1;
	this.vertex2 = vertex2;
	this.polygon = polygon;
	this.hash = hash;
};


/**
 * Get hash.
 *
 * @return {Integer} returns the hash for lookup operations / linking Polygons in the Mesh
 */
TRAIL.Edge.prototype.getHash = function()
{
	return this.hash;
};


// constructor
TRAIL.Edge.prototype.constructor = TRAIL.Edge;
