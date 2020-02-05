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
        this.addNodeToCorrect(currentNode.left, newNode)
      }
    } else {
      if(currentNode.right === null) {
        currentNode.right = newNode
      } else {
        this.addNodeToCorrect(currentNode.right, newNode)
      }
    }
  }

  findTargetNode(currentNode, target) {
    if(currentNode.target === target) {
      return true
    } else {
      this.findTargetNode(currentNode.left)
      this.findTargetNode(currentNode.right)
    }
    return false
  }
}

let newBST = new BST()
newBST.addNode(2)
newBST.addNode(1)
newBST.addNode(3)
newBST.findTargetNode(BST.root, 3)
console.log(newBST)