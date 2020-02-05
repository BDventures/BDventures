//tree

const Node = val => {
  (this.val = val), (this.left = null), (this.right = null);
};

const BST = () => {
  this.root = null;

  const addNode = val => {
    let newNode = new Node(val);

    if (!root) root = newNode;
    else {
      addNodeToCorrect(this.root, newNode);
    }
  };

  const addNodeToCorrect = (currentNode, newNode) => {
    if (newNode.val < currentNode.val) {
      if (currentNode.left === null) {
        currentNode.left = newNode;
      } else {
        addNodeToCorrect(currentNode.left, newNode);
      }
    } else {
      if (currentNode.right === null) {
        currentNode.right = newNode;
      } else {
        addNodeToCorrect(currentNode.right, newNode);
      }
    }
  };

  const findTargetNode = (currentNode, target) => {
    if (currentNode.target === target) return true;
    else {
      findTargetNode(currentNode.left);
      findTargetNode(currentNode.right);
    }
    return false;
  };
};

let newBST = new BST();
newBST.addNode(2);
newBST.addNode(1);
newBST.addNode(3);
newBST.findTargetNode(BST.root, 3);
console.log(newBST);


const error = err => err
const success = data => data

const promise = async (data) => {
  const promisified = await new Promise( (resolve, reject) => {
    if(!data) reject(new Error(error(errorMessage)))

    resolve(success(data))
  })

  return promisified
}

promise([1,2,3])