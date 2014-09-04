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
    this.vertices = [];
    this.edges = [];
};


/**
 * Gets a Vertex by hash
 *
 * @param hash {Integer} the hash of the Vertex to return
 * @return {Vertex} Vertex object
 */
TRAIL.Mesh.prototype.getVertex = function(hash)
{
    return this.vertices[hash];
};



/**
 * Gets all Vertices
 *
 * @return {Array} Array of Vertices (Vertex objects)
 */
TRAIL.Mesh.prototype.getVertices = function()
{
    return this.vertices;
};


/**
 * Add a single vertex by separate X/Y values
 *
 * @param x {Integer} the vertex x position
 * @param y {Integer} the vertex y position
 */
TRAIL.Mesh.prototype.addVertexByXY = function(x, y)
{
    // create the vertex
    var vertex = new TRAIL.Vertex(vertices[i], vertices[i+1]);

    // hash the vertex in the system so vertices are shares (for Edge calculation)
    var hash = vertex.x + vertex.y;
    if(this.vertices[hash] == undefined) {
        this.vertices[hash] = vertex;
    } else {
        console.log("Vertex already exists - skipping");
    }
};


/**
 * Set all by Vertices by XY
 *
 * @param vertices {Array} the vertices in the following format: [x,y,x,y,x,y]
 */
TRAIL.Mesh.prototype.setVerticesByXY = function(vertices)
{
    this.vertices = [];

    // set Integer Array to Vertex objects
    for(var i = 0; i < vertices.length; i += 2)
    {
        // create the Vertex
        var vertex = new TRAIL.Vertex(vertices[i], vertices[i+1]);

        // hash the vertex in the system so vertices are shares (for Edge calculation)
        var hash = vertex.x + vertex.y;
        if(this.vertices[hash] == undefined) {
            this.vertices[hash] = vertex;
        } else {
            console.log("Vertex already exists - skipping");
        }
    }
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
 * Generate a Polygon by Vertex hash
 *
 * @param hashes {Array} the vertices to be used by hash
 */
TRAIL.Mesh.prototype.addPolygonByHashes = function(hashes)
{
    // minimum amount of vertices not met
    if (hashes < 3) return;

    // iterate over hashes to create the vertex array
    var vertices = [];
    for(var i = 0; i < hashes.length; i++)
    {
        // check if hash exists
        if(this.vertices[hashes[i]] != undefined)
        {
            // create the Vertex
            vertices.push(this.vertices[hashes[i]]);

        } else { return; }
    }

    // create polygon
    var polygon = new TRAIL.Polygon();
    polygon.setVertices(vertices);
    this.polygons.push(polygon);
}






// constructor
TRAIL.Mesh.prototype.constructor = TRAIL.Mesh;