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



// constructor
TRAIL.Mesh.prototype.constructor = TRAIL.Mesh;