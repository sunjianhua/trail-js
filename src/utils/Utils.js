/**
 * Return vertices in a single Array.
 * Used mostly for interactions between PolyK which requires an
 * Array of vertices in a single linear stream.
 *
 * This method will return an Array such as: [x,y, x,y, x,y, x,y]
 * e.g. [0,0, 10,0, 10,10, 0,10]
 *
 *
 * @return {Array} returns an array of all vertices in [x,y,x,y] format
 */
TRAIL.verticesFromPolygon = function(polygon)
{
    var vertices = polygon.getVertices();
    var returnArray = [];
    for (var i = 0; i < vertices.length; i++) {
        var vertex = vertices[i];
        returnArray.push(vertex.x, vertex.y);
    }

    return returnArray;
};


/**
 * Return triangles from a single Array of vertices.
 * Used mostly for interactions between PolyK which requires an
 * Array of vertices in a single linear stream.
 *
 * This method will create an Array of Triangles (using Polygon as their Object)
 * from an Array of vertices such as: [x,y, x,y, x,y]
 * e.g. [0,0, 10,0, 10,10]
 *
 *
 * @return {Array} returns an array of Triangles (Polygon Object)
 */
TRAIL.trianglesFromVertexArray = function(vertices)
{
    var returnArray = [];
    for(var i = 0; i < vertices.length/6; i+=6)
    {
        var polygon = new TRAIL.Polygon([i,i+1, i+2,i+3, i+4,i+5]);
    }

    return returnArray;
};


