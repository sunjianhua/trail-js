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
	// TODO pass over to PolyK for the isSimple
	return PolyK.IsSimple(this.vertices);
};


TRAIL.Polygon.prototype.isConvex = function()
{
	if (this.vertices.length < 4)
		return true;

	var sign = false;
	var n = this.vertices.length;
	for(var i= 0; i < n; i++)
	{
		var dx1 = this.vertices[(i + 2) % n].x - this.vertices[(i + 1) % n].x;
		var dy1 = this.vertices[(i + 2) % n].y - this.vertices[(i + 1) % n].y;
		var dx2 = this.vertices[i].x - this.vertices[(i + 1) % n].x;
		var dy2 = this.vertices[i].y - this.vertices[(i + 1) % n].y;
		var zcrossproduct = dx1 * dy2 - dy1 * dx2;
		if (i == 0)
		{
			sign = zcrossproduct > 0;
		} else
		{
			if (sign != (zcrossproduct > 0))
				return false;
		}
	}
	return true;
}


// constructor
TRAIL.Polygon.prototype.constructor = TRAIL.Polygon;