/**
 * This class contains the base for polygon shapes which make up the navmesh
 *
 * @class Polygon
 * @constructor
 */
TRAIL.Polygon = function()
{
    this.vertices = [];
};


/**
 * Gets an array of the polygons vertices
 *
 * @return {Array} vertices in the following order: [x,y,x,y,x,y]
 */
TRAIL.Polygon.prototype.getVertices = function()
{
    return this.vertices;
};


/**
 * Gets all of a polygons points
 *
 * @return {Array} Points
 */
TRAIL.Polygon.prototype.getPoints = function()
{
    return this.vertices;
};


/**
 * Gets a polygons point by id
 *
 * @return {Point} Point by id
 */
TRAIL.Polygon.prototype.getPoint = function(id)
{
    return this.vertices[id];
};


/**
 * Sets a polygons point by id - used in welding points
 *
 * @param id {Integer} the id of the Point to set
 * @param point {Point} the new Point object
 */
TRAIL.Polygon.prototype.setPoint = function(id, point)
{
    this.vertices[id] = point;
};


/**
 * Set Polygon by Vertices
 *
 * @param vertices {Array} the vertices in the following format: [x,y,x,y,x,y]
 */
TRAIL.Polygon.prototype.setVertices = function(vertices)
{
    this.vertices = [];

    // set vertices to points
    for(var i = 0; i < vertices.length; i += 2)
    {
        // create the point
        var point = new TRAIL.Point(vertices[i], vertices[i+1]);
        this.vertices.push(point);
    }

    // TODO calc Edges here?
};




// constructor
TRAIL.Polygon.prototype.constructor = TRAIL.Polygon;