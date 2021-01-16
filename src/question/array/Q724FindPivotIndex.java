package question.array;

/**
 * @description: 寻找数组的中心索引
 * 给定一个整数类型的数组nums，请编写一个能够返回数组 “中心索引” 的方法。
 * 我们是这样定义数组 中心索引 的：数组中心索引的左侧所有元素相加的和等于右侧所有元素相加的和。
 * 如果数组不存在中心索引，那么我们应该返回 -1。如果数组有多个中心索引，那么我们应该返回最靠近左边的那一个。
 *
 * @author: lnzhangsong
 * @time: 2021/1/15 0:04
 */
public class Q724FindPivotIndex {

    /**
     * 双指针解法 失败 （应该可以出来）
     * @param nums 待处理数组
     * @return 中心索引
     */
    public static int pivotIndex0(int[] nums) {
        if (nums.length == 0) {
            return -1;
        }
        // 左右指针
        int left = 0;
        int right = nums.length - 1;
        // 左右指针所路过数据之和
        int leftSum = nums[left];
        int rightSum = nums[right];

        while(left + 1 != right - 1) {
            if (leftSum > rightSum) {
                right--;
                rightSum += nums[right];
            } else {
                left++;
                leftSum += nums[left];
            }
        }
        if (rightSum == leftSum){
            return left + 1;
        }
        return -1;
    }

    /**
     * 左侧 * 2 + 中间 = 总和 0（N）
     * @param nums 待处理数组
     * @return 中心索引
     */
    public static int pivotIndex(int[] nums) {
        // 总和
        int sum = 0;
        for (int num : nums) {
            sum += num;
        }
        // 指针 左侧
        int leftSum = 0;
        for (int i = 0; i < nums.length; i++){
            if (sum == leftSum * 2 + nums[i]) {
                return i;
            } else {
                leftSum += nums[i];
            }
        }
        return -1;
    }

    public static void main(String[] args) {
//        int[] nums = new int[] {-1,-1,-1,-1,-1,0}; // 双指针测试失败
        int[] nums = new int[] {-1,-1,-1,-1,-1,0};
        System.out.println(pivotIndex(nums));
    }
}

