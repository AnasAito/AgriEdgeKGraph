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
      highlightNodes.add(node.id);

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
      setHoverNode(node.id);
      updateHighlight();
    }
  };
  const paintRing = useCallback(
    (node, ctx) => {
      // add ring just for highlighted nodes
      //console.log("ring", node);
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.val * 4.5, 0, 2 * Math.PI, false);
      ctx.lineWidth = 1;
      ctx.strokeStyle = node.id === hoverNode ? "red" : "orange";
      //ctx.strokeStyle = "#FF0000";
      ctx.stroke();
    },
    [hoverNode]
  );

  return (
    <ForceGraph2D
      ref={fgRef}
      graphData={data}
      // nodeVal={(node) => node.val}
      autoPauseRedraw={false}
      linkWidth={(link) => (highlightLinks.has(link) ? 5 : 1)}
      // nodeCanvasObject={(node) => "red"}
      // nodeCanvasObject={(node) => {
      //const  isMainNode =
      //  if (hoverNode == node.id) {
      //  return "red";
      //} else {
      // return highlightNodes.has(node.id) ? "blue" : "black";
      // }
      //}}
      nodeCanvasObjectMode={(node) =>
        highlightNodes.has(node.id) ? "before" : undefined
      }
      nodeCanvasObject={paintRing}
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
