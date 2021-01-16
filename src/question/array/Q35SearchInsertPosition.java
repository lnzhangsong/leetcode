package question.array;

/**
 * @description:  35. 搜索插入位置
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。
 * 如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * 你可以假设数组中无重复元素。
 * @author: lnzhangsong
 * @time: 2021/1/16 22:11
 */
public class Q35SearchInsertPosition {

    /**
     * 二分查找
     * @param nums 被查询的数组
     * @param target 目标值
     * @return 位置
     */
    public static int searchInsert0(int[] nums, int target) {
        int left = 0;
        int right = nums.length - 1;
        // 判定条件 包括等于
        while (left <= right) {
            // 防止溢出
            int middle = left + (right - left) / 2;
            if (target < nums[middle]) {
                right = middle - 1;
            } else if (target > nums[middle]) {
                left = middle + 1;
            } else {
                return middle;
            }
        }
        return left;
    }

    /**
     * 暴力 未超时
     * @param nums 被查询的数组
     * @param target 目标值
     * @return 位置
     */
    public static int searchInsert(int[] nums, int target) {
        for (int i = 0; i < nums.length; i++) {
            if (target <= nums[i]) {
                return i;
            }
        }
        return 0;
    }


    public static void main(String[] args) {
        int[] nums = new int[]{1,3,5,6};
        int target = 5;
        System.out.println(searchInsert(nums, target));
    }

}
