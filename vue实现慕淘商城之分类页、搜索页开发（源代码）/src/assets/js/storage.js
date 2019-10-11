const storage = window.localStorage;

export default {
  // 存储数据
  set(key, val) {
    if (val === undefined) {
      return;
    }
    // serialize序列化
    // setItem() 作为 Storage 接口的方法，接受一个键名和值作为参数，
    // 将会把键名添加到存储中，如果键名已存在，则更新其对应的值。
    storage.setItem(key, serialize(val));
  },
  get(key, def) {
    // 获取数据
    // deserialize反序列化
    const val = deserialize(storage.getItem(key));
    return val === undefined ? def : val;
  },
  remove(key) {
    storage.removeItem(key);
  },
  clear() {
    storage.clear();
  }
};

function serialize(val) {
  // 将val转化为json字符串
  return JSON.stringify(val);
}

function deserialize(val) {
  if (typeof val !== 'string') {
    return undefined;
  }
  try {
    // JSON.parse() 方法用来解析JSON字符串，
    // 构造由字符串描述的JavaScript值或对象
    return JSON.parse(val);
  } catch (e) {
    return val || undefined;
  }
}
