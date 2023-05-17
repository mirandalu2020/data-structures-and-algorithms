'use strict';

function inOrder(tree, hashTableSize=1000){
  let node = tree.root;
  const HashTable = require('./../hashtable');

  let hashed = new HashTable(hashTableSize);

  function traverse(node){
    if (node.left){
      traverse(node.left);
    }
    hashed.set(node.value);
    if(node.right){
      traverse(node.right);
    }
  }

  traverse(node);
  return hashed;
}

function treeIntersection (tree1, tree2){
  let tree1Hashed = inOrder(tree1);
  let intersection = [];
  let node = tree2.node;

  function traverse(node){
    if (node.left){
      traverse(node.left);
    }
    if (tree1Hashed.has(node.value)){
      intersection.push(node.value);
    }
    if(node.right){
      traverse(node.right);
    }
  }

  traverse(node);
  return intersection;
}

module.exports = treeIntersection;
