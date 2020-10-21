//模拟新闻数据
const news = [{
    id: '264698',
    title: '宠物家具只为宠而设？香港品牌“不一而作”玩点不一样! ',
    poster: 'https://5b0988e595225.cdn.sohucs.com/images/20180711/83da0ed565a64986b528b20362487f98.jpeg',
    content: '    来自香港的家具品牌“不一而作”选择了人宠家具，并推出了专为猫奴与猫咪设计的“主子与我”系列。来自香港的四位年轻人Edmond、Eric、Fion和Judy成立了家具品牌“不一而作”，这个有建筑、设计背景的团队，目标是给予发展迟缓的家具行业带来新冲击。选择宠物类别时，“不一而作”首选了猫咪，原因在于狗狗会主动陪伴主人，相反猫咪喜欢独处，比较“高冷”，且90%的时间都生活在室内，喜欢借助物品自娱自乐。而家具是人每天都会用到的物品，也是主人和猫咪两者生活的桥梁，所以团队希望设计一些家具来增加猫咪与主人的互动。  ',
    add_date: '2020-07-11'
  },
  {
    id: '304083',
    title: '地标之家——Poopy Cat纸板猫家具',
    poster: 'https://pic.rmb.bdstatic.com/239bff8142bf84066c7b43aee15367fe7792.gif',
    content: ' 无论大小猫咪对于空纸板箱的迷恋就如同人类对猫咪的迷恋一样，不可描述。于是Poopy Cat公司为美学挑剔的宠物主人及其毛茸茸的朋友创造了一种巧妙的妥协——地标纸板游戏屋。与市场上的许多纸板猫结构不同，地标系列还巧妙地融入了游戏元素。例如，艾菲尔铁塔有一个挂在绳子上的内部电梯。人类可以在结构的顶部添加一种食物，以鼓励他们的猫科动物的朋友抓住他们的方式来获得奖励。  Poopy Cat的创作包括令人印象深刻的玛雅神庙、艾菲尔铁塔、泰姬陵和吉萨狮身人面像等七个世界顶级地标，且每栋建筑都拥有复杂的设计和与之相关的表面装饰。 ',
    add_date: '2020-8-14'
  },
  {
    id: '305670',
    title: 'IKEA 推出宠物系列 “LURVIG”，赶紧讨好主子们吧!',
    poster: 'http://5b0988e595225.cdn.sohucs.com/images/20171012/faa1281a5cb8422f859d0165587c3d05.gif',
    content: '本网讯 价格平宜又兼具设计品味的瑞典家居品牌 IKEA，向来深受全球消费者喜爱，总是以细腻的产品定位照顾每位消费者的需求，日前IKEA推出专为宠物设计的家居用品系列「LURVIG」。宜家的目标就是将所有这些家具都换成“Lurvig”，是瑞典语的“ 毛茸茸 ” 一改传统冰冷的刚硬狗屋 IKEA这一系列为宠物设计的家具，以米白、黑灰、橘色等百搭温暖的色调作为主色， 除了质感简约的设计，同样也兼具机能性 这系列的家居更加是收集了猫和狗这两种动物的一般需求和个性而设计。',
    add_date: '2020-10-27'
  }
];

//获取新闻列表
function getNewsList() {
  let list = [];
  for (var i = 0; i < news.length; i++) {
    let obj = {};
    obj.id = news[i].id;
    obj.poster = news[i].poster;
    obj.add_date = news[i].add_date;
    obj.title = news[i].title;
    list.push(obj);
  }
  return list; //返回新闻列表
}

//获取新闻内容
function getNewsDetail(newsID) {
  let msg = {
    code: '404', //没有对应的新闻
    news: {}
  };
  for (var i = 0; i < news.length; i++) {
    if (newsID == news[i].id) { //匹配新闻id编号
      msg.code = '200'; //成功
      msg.news = news[i]; //更新当前新闻内容
      break;
    }
  }
  return msg; //返回查找结果
}


module.exports = {
  getNewsList: getNewsList,
  getNewsDetail: getNewsDetail
}

