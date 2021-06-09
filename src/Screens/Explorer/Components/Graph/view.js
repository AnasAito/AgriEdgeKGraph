import React, { useMemo, useRef, useState, useCallback } from "react";
import ForceGraph2D from "react-force-graph-2d";

export default function View({ gdata }) {
  const fgRef = useRef();
  const data = useMemo(() => {
    return gdata;
  }, []);

  const [highlightNodes, setHighlightNodes] = useState(new Set());
  const [highlightLinks, setHighlightLinks] = useState(new Set());
  const [hoverNode, setHoverNode] = useState(null);

  const updateHighlight = () => {
    setHighlightNodes(highlightNodes);
    setHighlightLinks(highlightLinks);
  };

  const handleNodeClick = (node) => {
    // first zoom at node

    fgRef.current.centerAt(node.x, node.y, 1000);
    fgRef.current.zoom(8, 1000);
    // highlight nodes
    highlightNodes.clear();
    highlightLinks.clear();
    if (node) {
      // highlightNodes.add(node.id);

      data.links
        .filter((e) => e.source.id == node.id || e.target.id == node.id)
        .forEach((e) => {
          highlightLinks.add(e);
          if (e.source.id == node.id) {
            const nodeId = e.target.id;
            const neighbor = data.nodes.filter((node) => node.id == nodeId)[0];
            highlightNodes.add(neighbor.id);
          }
          if (e.target.id == node.id) {
            const nodeId = e.source.id;
            const neighbor = data.nodes.filter((node) => node.id == nodeId)[0];
            highlightNodes.add(neighbor.id);
          }
        });
    }

    setHoverNode(node.id || null);
    updateHighlight();
  };

  return (
    <ForceGraph2D
      ref={fgRef}
      graphData={data}
      // nodeRelSize={NODE_R}
      autoPauseRedraw={false}
      linkWidth={(link) => (highlightLinks.has(link) ? 5 : 1)}
      nodeColor={(node) => {
        //const  isMainNode =
        if (hoverNode == node.id) {
          return "red";
        } else {
          return highlightNodes.has(node.id) ? "blue" : "black";
        }
      }}
      linkDirectionalParticles={4}
      linkDirectionalParticleWidth={(link) =>
        highlightLinks.has(link) ? 4 : 0
      }
      // nodeCanvasObject={paintRing}
      onNodeClick={handleNodeClick}
      // onLinkHover={handleLinkHover}
    />
  );
}
