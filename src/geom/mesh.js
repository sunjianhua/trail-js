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
    this.edges = [];
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
 * @param id {Integer} the id of the Polygon to get
 * @return {Polygon} Polygon by id
 */
TRAIL.Mesh.prototype.getPolygon = function(id)
{
    return this.polygons[id];
};


/**
 * Adds a Polygon to the meshes polygons
 *
 * @param polygon {Polygon} the polygon to add
 */
TRAIL.Mesh.prototype.addPolygon = function(polygon)
{
    this.polygons.push(polygon);
    // TODO collect edges?
};


/**
 * Welds two Points together by merging point2 in to point 1
 * Warning - this is destructive
 *
 * @param point1 {Point} the first point to weld
 * @param point2 {Point} the second point to weld
 */
TRAIL.Mesh.prototype.weldPoints = function(point1, point2)
{
    // TODO
    point2 = point1;
};




// constructor
TRAIL.Mesh.prototype.constructor = TRAIL.Mesh;