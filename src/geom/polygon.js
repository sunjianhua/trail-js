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


// constructor
TRAIL.Polygon.prototype.constructor = TRAIL.Polygon;