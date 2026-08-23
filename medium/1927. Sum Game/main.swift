class Solution {
    func sumGame(_ num: String) -> Bool {
        let n = num.count
        let mid = n / 2
        var leftSum = 0
        var rightSum = 0
        var leftUnknown = 0
        var rightUnknown = 0

        for i in 0..<mid {
            if num[num.index(num.startIndex, offsetBy: i)] == "?" {
                leftUnknown += 1
            } else {
                leftSum += Int(String(num[num.index(num.startIndex, offsetBy: i)]))!
            }
        }

        for i in mid..<n {
            if num[num.index(num.startIndex, offsetBy: i)] == "?" {
                rightUnknown += 1
            } else {
                rightSum += Int(String(num[num.index(num.startIndex, offsetBy: i)]))!
            }
        }

        let diff = leftSum - rightSum
        let unknownDiff = leftUnknown - rightUnknown

        if unknownDiff == 0 {
            return diff == 0
        }

        if unknownDiff > 0 {
            return diff + unknownDiff * 9 / 2 > 0
        } else {
            return diff + unknownDiff * 9 / 2 < 0
        }
    }
}