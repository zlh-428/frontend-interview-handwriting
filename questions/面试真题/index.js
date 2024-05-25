// 比较两个版本号;
var compareVersion = function (version1, version2) {
  version1 = version1.split('.');
  version2 = version2.split(".");

  let L1 = 0, L2 = 0;

  while(L1 < version1.length - 1 && L2 < version2.length - 1) {
    let targetItem1 = Number(version1[L1]);
    let targetItem2 = Number(version2[L2]);

    if (targetItem1 < targetItem2) return -1;
    if (targetItem1 > targetItem2) return 1;

    L1 ++;
    L2 ++;
  }

  // 处理边界
  if (L1 < version1.length - 1) return 1;
  if (L2 < version2.length - 1) return -1;

  return 0;
};
const version1 = "1.1";

const version2 = "1.0001.1.1";

console.log(compareVersion(version1, version2));
