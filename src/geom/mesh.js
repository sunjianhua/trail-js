/**
 * This class is a container for all mesh related functionality.
 * Meshes contain n amount of Polygons.
 * Polygons contain n amount of Points.
 *
 * @class Mesh
 * @constructor
 */
TRAIL.Mesh = function()
{
    this.polygons = [];
};


/**
 * Gets an array of the mesh's polygons
 *
 * @return {Array} Polygons
 */
TRAIL.Mesh.prototype.getPolygons = function()
{
    return this.polygons;
};


/**
 * Gets a single polygon by id
 *
 * @return {Polygon} Polygon by id
 */
TRAIL.Mesh.prototype.getPolygon = function(id)
{
    return this.polygons[id];
};


/**
 * adds a Polygon to the meshes polygons
 *
 * @return {Array} Polygons
 */
TRAIL.Mesh.prototype.addPolygon = function(polygon)
{
    this.polygons.push(polygon);
};






// constructor
TRAIL.Mesh.prototype.constructor = TRAIL.Mesh;