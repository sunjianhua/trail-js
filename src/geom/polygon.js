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
 * Tests if a Polygon is simple in nature (doesn't cross over itself)
 *
 * @return {Boolean} true is a simple Polygon
 */
TRAIL.Polygon.prototype.isSimple = function()
{
    /*
	var n = this.vertices.length >> 1;
        if(n<4) return true;
        var a1 = new TRAIL.Point(0,0), a2 = new TRAIL.Point(0,0);
        var b1 = new TRAIL.Point(0,0), b2 = TRAIL.Point(0,0);
        var c = new TRAIL.Point(0,0);

        for(var i=0; i<n; i++)
        {
            a1.x = p[2*i];
            a1.y = p[2*i+1];
            if(i==n-1)	{ a2.x = p[0    ];  a2.y = p[1    ]; }
            else		{ a2.x = p[2*i+2];  a2.y = p[2*i+3]; }

            for(var j=0; j<n; j++)
            {
                if(Math.abs(i-j) < 2) continue;
                if(j==n-1 && i==0) continue;
                if(i==n-1 && j==0) continue;

                b1.x = p[2*j  ];
                b1.y = p[2*j+1];
                if(j==n-1)	{ b2.x = p[0    ];  b2.y = p[1    ]; }
                else		{ b2.x = p[2*j+2];  b2.y = p[2*j+3]; }

                if(PolyK._GetLineIntersection(a1,a2,b1,b2,c) != null) return false;
            }
        }
        return true;
    }
    */
	return PolyK.IsSimple(this.vertices);
};

/*
 public boolean isConvex()
 {
 if (_vertices.size()<4)
 return true;
 boolean sign=false;
 int n=_vertices.size();
 for(int i=0;i<n;i++)
 {
 double dx1 = _vertices.get((i+2)%n).X-_vertices.get((i+1)%n).X;
 double dy1 = _vertices.get((i+2)%n).Y-_vertices.get((i+1)%n).Y;
 double dx2 = _vertices.get(i).X-_vertices.get((i+1)%n).X;
 double dy2 = _vertices.get(i).Y-_vertices.get((i+1)%n).Y;
 double zcrossproduct = dx1*dy2 - dy1*dx2;
 if (i==0)
 sign=zcrossproduct>0;
 else
 {
 if (sign!=(zcrossproduct>0))
 return false;
 }
 }
 return true;
 }

 */


// constructor
TRAIL.Polygon.prototype.constructor = TRAIL.Polygon;