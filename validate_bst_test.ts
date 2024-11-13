import { Tree } from "istanbul-lib-report";

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

let flag: boolean = true;
let previous: TreeNode | null = null;

function isValidBST(root: TreeNode | null): boolean {
  helper(root);
  return flag
}

function helper(root: TreeNode | null) {
  if (root == null) return;
  
  helper(root.left)

  if (previous != null && previous.val >= root.val) {
    flag = false;
  }
  previous = root

  helper(root.right)
}

describe("Find Max Profit", () => {
  it("Happy Path", () => {
    let root = new TreeNode(0)
    expect(isValidBST(root)).toStrictEqual(true);
  });
});
