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
 * Tests if a Polygon is simple in nature (doesn't cross over / intersect itself)
 *
 * @return {Boolean} true is a simple Polygon
 */
TRAIL.Polygon.prototype.isSimple = function()
{
	var vertices = TRAIL.verticesFromPolygon(this);
    return PolyK.IsSimple(vertices);
};


/**
 * Tests if a Polygon shape is convex
 *
 * @return {Boolean} true is a convex shape
 */
TRAIL.Polygon.prototype.isConvex = function()
{
	var vertices = TRAIL.verticesFromPolygon(this);
	return PolyK.IsConvex(vertices);
}


/**
 * Triangulates a Polygon
 *
 * @return {Array} returns an array of Polygons
 */
TRAIL.Polygon.prototype.triangulate = function()
{
	// block triangulation if not simple
    if(this.isSimple() == true)
	{
		var vertices = TRAIL.verticesFromPolygon(this);
		var polykReturnValues = PolyK.Triangulate(vertices);

		// iterate over triangle data, creating polys for use
		var triangles = [];
		for (var i = 0; i < polykReturnValues.length; i += 3)
		{
			var polygon = new TRAIL.Polygon([
				this.vertices[polykReturnValues[i]].x, this.vertices[polykReturnValues[i]].y,
				this.vertices[polykReturnValues[i + 1]].x, this.vertices[polykReturnValues[i + 1]].y,
				this.vertices[polykReturnValues[i + 2]].x, this.vertices[polykReturnValues[i + 2]].y
			]);
			triangles.push(polygon);
		}

		return triangles;
	} else
	{
		return [];
	}
}


// constructor
TRAIL.Polygon.prototype.constructor = TRAIL.Polygon;