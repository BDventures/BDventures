import React, {useState, useEffect, useReducer} from 'react'

const reducer = (state, action) => {
  switch(action.type) {
    case 'add-todo': return {todos: [...state.todos, {text: action.text}]};
    
    default: return state
  }
}

export const UseReducerTodo = () => {
  const [text, setText] = useState('')
  const [{todos}, dispatch] = useReducer(reducer, {todos: []})
  console.log(todos, 'todos')
  return(
    <div>
      <h2>Use Reducer Todo</h2>
      <form onSubmit={e => {
        e.preventDefault()
        dispatch({type: 'add-todo', text})
        setText('')
      }}>
        <input value={text} placeholder='add todos..' onChange={e => setText(e.target.value)}></input>
      </form>
      {todos.map(t => <div>{t.text}</div>)}
    </div>
  )
}

// const messages = (err, success) => {
//   if(err) console.log(err)

//   console.log(success)
// }

// const callback = (data, cb) => {
//   const errorMsg = 'no data to be found'
//   if(!data) cb(errorMsg)

//   cb(null, messages(data))
// }

class Node {
  constructor(value) {
    this.val = value,
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

  addNodeToCorrect(node, newNode) {
    if(newNode.val < node.val) {
      if(node.left === null) {
        node.left = newNode
      } else {
        this.addNodeToCorrect(node.left, newNode)
      }
    } else {
      if(node.right === null) {
        node.right = newNode
      } else {
        this.addNodeToCorrect(node.right, newNode)
      }
    }
  }
}

let newBST = new BST()
newBST.addNode(2)
newBST.addNode(1)
newBST.addNode(3)
