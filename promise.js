const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (ekspresi) => {
  const data1 = await promiseTheaterIXX();
  const data2 = await promiseTheaterVGC();

  const resultData = data1.concat(data2)

  return resultData.filter(el => el.hasil === ekspresi).length
};

module.exports = {
  promiseOutput,
};