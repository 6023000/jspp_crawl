const SliderModel = require('../db/models/slider'); // 引入表模型

class SliderService {
  async addSliderData (data) {

  	const cid = data.cid;
    
    const result = await SliderModel.findOne({
    	where: { cid }
    }); // 查找

    if (result) {
    	return await SliderModel.update(data, {
        where: { cid }
    	});
    } else {
    	return await SliderModel.create(data); // 根据表结构和数据创建表
    }
  }

  async getSliderData () {
    return await SliderModel.findAll({
      attributes: {
        exclude: ['imgUrl']
      }
    });
  }

  async changeSliderStatus (id, status) {
    const ret = await SliderModel.update({ status }, {
      where: { id }
    });

    return ret[0];
  }
}

module.exports = new SliderService();