class Node {
    constructor(value) {
        this.val = value;
        this.leftChild = null;
        this.rightChild = null;
    }
}
class BinarySearchTree {
    constructor(rootValue) {
        this.root = new Node(rootValue);//створюємо корінь
    }

    insert(currentNode, newValue) {
        if (currentNode === null) {
            currentNode = new Node(newValue);
        } else if (newValue < currentNode.val) {
            currentNode.leftChild = this.insert(currentNode.leftChild, newValue);
        } else {
            currentNode.rightChild = this.insert(currentNode.rightChild, newValue);
        }
        return currentNode;
    }
    insertBST(newValue) {
        if(this.root==null){
            this.root=new Node(newValue);
            return;
        }
        this.insert(this.root, newValue);
    }
    preOrderPrint(currentNode) {
        if (currentNode!==null) {
            console.log(currentNode.val);
            this.preOrderPrint(currentNode.leftChild);
            this.preOrderPrint(currentNode.rightChild);
        }
    }
    inOrderPrint(currentNode) {
        if (currentNode!==null) {
            this.inOrderPrint(currentNode.leftChild);
            console.log(currentNode.val);
            this.inOrderPrint(currentNode.rightChild);
        }
    }
    postOrderPrint(currentNode) {
        if (currentNode !== null) {
            this.postOrderPrint(currentNode.leftChild);
            this.postOrderPrint(currentNode.rightChild);
            console.log(currentNode.val);
        }
    }
}


var BST = new BinarySearchTree(7);
console.log('Корінь дерева:', BST.root.val)
BST.insertBST(4);
BST.insertBST(9);
BST.insertBST(5);
BST.insertBST(2);
BST.insertBST(8);
BST.insertBST(12)
console.log("Обхід дерева в глубину:")
console.log('Pre-Order - обхід по порядку "корінь-вліво-вправо":')
BST.preOrderPrint(BST.root);
console.log('In-Order - обхід по порядку "вліво-корінь-вправо":')
BST.inOrderPrint(BST.root);
console.log('Pos-Order - обхід по порядку "вліво-вправо-корінь":')
BST.postOrderPrint(BST.root);

