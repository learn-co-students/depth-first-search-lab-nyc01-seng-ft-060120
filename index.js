let edges = [
	['14th&6th', '23rd&6th'],
	['23rd&6th', '34th&6th'],
	['34th&6th', '28th&Bwy'],
	['28th&Bwy', '23rd&Bwy'],
	['23rd&Bwy', '14th&Lex'],
	['14th&Lex', '23rd&Lex']
]

let vertices = [
  {name: '34th&6th', discovered: null},
  {name: '23rd&6th', discovered: null},
  {name: '14th&6th', discovered: null},
  {name: '28th&Bwy', discovered: null},
  {name: '23rd&Bwy', discovered: null},
  {name: '14th&Lex', discovered: null},
  {name: '23rd&Lex', discovered: null}
]

function adjacentEdges(v) {
    
    let adj = edges.filter(e => e.includes(v.name))
    console.log(adj.map(e => e.find(e2 => e2!==v.name)).map(e3 => vertices.find(v2 => v2.name===e3)).filter(v3 => !v3.discovered)    )
    return adj.map(e => e.find(e2 => e2!==v.name)).map(e3 => vertices.find(v2 => v2.name===e3)).filter(v3 => !v3.discovered)
}

function depthFirstSearch(root, e) {
    let s = []
    let visited = [root]
    s.push(root)
    while (s.length > 0) {
        let v = s.pop()
        if (!v.discovered) {

            v.discovered=true
            console.log(`adjacent edges of ${v} are: ${adjacentEdges(v)}`)
            adjacentEdges(v).forEach( e => {
                if (!e.discovered) { visited.push(e) }
                s.push(e)
            })
        }
    }
    console.log(visited)
    return visited
}

module.exports = {depthFirstSearch, adjacentEdges, vertices, edges}