import AsyncStorage from '@react-native-async-storage/async-storage';

const key = '@team';

export const remove = async () => {
  return await AsyncStorage.removeItem(key);
};

export const removeOne = async (value, keyValue) => {
  let data = await get();
  const index = data.findIndex(item => item[keyValue] === value);
  data = data.filter((_, i) => i !== index);

  if (index >= 0) {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  }
};

export const add = async item => {
  let data = await get();
  if (data) {
    data.push(item);
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } else {
    await AsyncStorage.setItem(key, JSON.stringify([item]));
  }
};
export const get = async () => {
  let data = await AsyncStorage.getItem(key);
  data = JSON.parse(data);
  return data;
};

export const getOne = async (value, keyValue) => {
  const data = await get();
  return data.find(item => item[keyValue] === value);
};

export const getLength = async () => {
  let data = await AsyncStorage.getItem(key);
  data = JSON.parse(data);
  return data !== null ? data?.length : 0;
};
