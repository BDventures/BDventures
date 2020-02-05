//tree

class Node {
  constructor(val) {
    this.val = val,
    this.left = null,
    this.right = null
  }
}

class BST {
  constructor() {
    this.root = null
  }

  addNode(val) {
    let newNode = new Node(val)

    if(!this.root) this.root = newNode

    else {
      this.addNodeToCorrect(this.root, newNode)
    }
  }

  addNodeToCorrect(currentNode, newNode) {
    if(newNode.val < currentNode.val) {
      if(currentNode.left === null) {
        currentNode.left = newNode
      } else {
        
      }
    }
  }
}