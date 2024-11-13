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
let prev_min: number | null = null;
let prev_max: number | null = null;

function isValidBST(root: TreeNode | null): boolean {
  helperV2(root, null, null, prev_min, prev_max);
  return flag;
}

function helper(root: TreeNode | null) {
  if (root == null) return;

  helper(root.left);

  if (previous != null && previous.val >= root.val) {
    flag = false;
  }
  previous = root;

  helper(root.right);
}

function helperV2(
  root: TreeNode | null,
  min: number | null,
  max: number | null,
  previous_min: number | null,
  previous_max: number | null
) {
  if (root == null) return;

  if (min != null && root.val <= min) {
    flag = false;
  }

  if (max != null && root.val >= max) {
    flag = false;
  }

  helperV2(root.left, min, root.val, min, max);
  helperV2(root.right, root.val, max, min, max);
  prev_min = previous_min;
  prev_max = previous_max;
}

describe("Find Max Profit", () => {
  it("Happy Path", () => {
    let root = new TreeNode(0);
    expect(isValidBST(root)).toStrictEqual(true);
  });
});
