import commonFunctions from './commonFunctions.js';

class FetchData {
  async getValue(fileName, key) {
    const file = await commonFunctions.fetchJSON(fileName);
    return file[key];
  }

  async getData(fileName) {
    return await commonFunctions.fetchJSON(fileName);
  }
}

export default new FetchData();
