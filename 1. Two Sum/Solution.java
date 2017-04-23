import java.util.*;
public class Solution {
    public static int[] twoSum(int[] nums, int target) {
        HashMap<Integer,Integer> map = new HashMap<Integer,Integer>();
        int[] out = new int[2];
        for(int i = 0;i < nums.length;i++){
          if(map.containsKey(target-nums[i])){
              out[0] = i;
              out[1] = map.get(target-nums[i]);
              break;
          }else{
            map.put(nums[i],i);
          }
        }
        return out;
    }

    public static void main(String []args) {
        int[] nums = {1,2,3,5,6,7, 11, 15};
        int target = 9;
        int[] out = twoSum(nums,target);
        System.out.println(out[0]);
        System.out.println(out[1]);
    }
}
