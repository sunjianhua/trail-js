/**
 * This class contains the base for polygon shapes which make up the navmesh
 *
 * @class Polygon
 * @constructor
 * @param vertices {Array} the vertices in the following format: [x,y,x,y,x,y]
 */
TRAIL.Polygon = function(vertices)
{
    this.vertices = [];
    this.edges = [];

    // set vertices to points
    for(var i = 0; i < vertices.length; i += 2)
    {
        this.vertices.push(new TRAIL.Point(vertices[i], vertices[i+1]));
    }
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
 * Gets a polygons point by id
 *
 * @return {Point} Point by id
 */
TRAIL.Polygon.prototype.getPoint = function(id)
{
    return this.vertices[id];
};





// constructor
TRAIL.Polygon.prototype.constructor = TRAIL.Polygon;