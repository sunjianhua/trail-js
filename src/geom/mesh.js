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
 * Weld Vertices
 *
 * @param vertex1 {Vertex} Vertex 1
 * @param vertex2 {Vertex} Vertex 2 to be welded to Vertex 1
 */
TRAIL.Mesh.prototype.weldVertex = function(polygon1, polygon2, vertex1, vertex2)
{
	polygon2.setVertex(vertex2, polygon1.getVertex(vertex1));
}



// constructor
TRAIL.Mesh.prototype.constructor = TRAIL.Mesh;