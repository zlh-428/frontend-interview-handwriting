import { flatObject } from "./index.mjs";


const obj1 = { name: "person", target: { attr1: "name", attr2: "gender" } };

console.log(flatObject(obj1)); // { name: 'person', 'target.attr1': 'name', 'target.attr2': 'gender' }


// 阿里淘天原题：
// 实现1个模板替换函数，能将字符串模板中的 ${xxxx} 替换为给定的数据。
// 字符串 s = 'It is a ${name} template, which can get ${target.attr1} and ${target.attr2}'
// 数据 data = { name: 'person', target: { attr1: 'name', attr2: 'gender', attr3: { age: 17 } }}

const s =
  "It is a ${name} template, which can get ${target.attr1} and ${target.attr2}, and ${target.attr3.age} is over";

const data = {
  name: "person",
  target: { attr1: "name", attr2: "gender", attr3: { age: 17 } },
};

// 方法1: 将对象展平为xxx.xxx的形式进行匹配
function replaceTemplate(s, data) {
  data = flatObject(data);

  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      s = s.replace("${" + key + "}", data[key]);
    }
  }

  return s
}

console.log(replaceTemplate(s, data));

// 方法2：
// 使用正则表达式 /\$\{([^}]+)\}/g 来匹配模板字符串中的占位符 ${xxxx}
// 通过 reduce 方法递归地访问嵌套数据对象中的属性，直到获取最终值
function replaceTemplateByREG(template, data) {
  return template.replace(/\$\{([^}]+)\}/g, (_, key) => {
    // 使用函数将点分隔的路径转化为数据对象中的值
    return key.split(".").reduce((acc, part) => acc && acc[part], data);
  });
}

console.log(replaceTemplateByREG(s, data));