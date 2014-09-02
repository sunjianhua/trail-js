// namespace definition
var TRAIL = TRAIL || {};

// debug output
TRAIL.sayHi = function()
{
    console.log('%c trail.js* init \n', 'background: #ff1234; color: #ffffff');
}

/*
 [2/09/2014 5:15:10 pm] Stephen Woolcock: the edges are a better choice
 [2/09/2014 5:16:39 pm] Stephen Woolcock: to build your graph, i would do this:
 - run over each triangle, for each connecting verts, create an 'Edge' object
 - put the edge object into a dictionary/lookup, with the key being a combined hash of two verts making up the tri edge (hash(a) + hash(b))
 [2/09/2014 5:16:50 pm] Stephen Woolcock: hash( a ) + hash( b )
 [2/09/2014 5:17:09 pm] Stephen Woolcock: - when analysing an edge, calc the hash, and check the lookup for an exisitng entry
 [2/09/2014 5:17:26 pm] Stephen Woolcock: - if one exists, at the new tri edge to the existing Edge object
 [2/09/2014 5:17:43 pm] Stephen Woolcock: now edge triangle edge and a connecting edge
 [2/09/2014 5:18:08 pm] Stephen Woolcock: then you run over each triangle and get add graph edges connecting all them all
 [2/09/2014 5:18:23 pm] Anton Mills: oh nice, yeah
 [2/09/2014 5:18:41 pm] Stephen Woolcock: if you make your hash function return an integer, you can simply add the values together
 [2/09/2014 5:18:47 pm] Anton Mills: going to have to hack the polyk source for that
 [2/09/2014 5:18:49 pm] Stephen Woolcock: and it won't matter the order of vertA and vertB
 [2/09/2014 5:19:10 pm] Stephen Woolcock: hash( a ) + hash( b ) == hash( b ) + hash( a )
 [2/09/2014 5:19:10 pm] Stephen Woolcock: :)
 [2/09/2014 5:19:23 pm] Stephen Woolcock: assuming they don't get too large and overflow :D
 [2/09/2014 5:19:36 pm] Stephen Woolcock: i think i had an AS3 function that did tha
 */