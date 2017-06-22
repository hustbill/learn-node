/**
Given two binary trees, write a function to check if they are equal or not.

Two binary trees are considered equal if they are structurally identical and the nodes have the same value.

 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @returns {boolean}
 */

 function TreeNode(val) {
   this.val = val;
   this.left = this.right = null;
 }

 var isSameTree = function(p, q) {     
     if (!p && !q) {
         return true;
     }
     if (!p || !q) {
         return false;
     }
     if (p.val !== q.val) {
         return false;
     }
     return isSameTree(p.left, q.left)&&isSameTree(p.right, q.right);
 };

var result = [isSameTree(new TreeNode(1), new TreeNode(112)),
  isSameTree(new TreeNode(1), new TreeNode(1))];
console.log('result = ' + result);
