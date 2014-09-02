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
        // create the point
        var point = new TRAIL.Point(vertices[i], vertices[i+1]);
        this.vertices.push(point);
    }

    // create the edges
    for (var i = 0; i < this.vertices.length-1; i++)
    {
        var point1 = this.vertices[i];
        var point2 = this.vertices[i];

        // create the edges
        var edge =
        {
            id: vertices[i] + vertices[i+1],
            point1: point1,
            point2: point2
        }
        this.edges.push(edge);
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