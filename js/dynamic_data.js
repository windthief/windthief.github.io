window.dynamicList = [
  {
    id: 1,
    user: { name: '李同学', avatar: '李', college: '外国语学院' },
    time: '昨天 15:32',
    text: '发现了一个超美的自习地点！学校新建的图书馆顶楼，俯瞰整个校园，学习氛围也超好，推荐给大家！📚',
    hashtag: '#自习地点 #图书馆 #学习环境',
    image: "../images/libarary2.webp",
    like: 156,
    comment: 24,
    views: 156,
    location: '校园图书馆',
    comments: [
      {
        user: { name: '王学长', avatar: '王' },
        time: '3小时前',
        text: '真的不错！我之前只在2楼自习，没想到顶楼风景这么好👍',
        like: 12,
        replies: []
      },
      {
        user: { name: '刘同学', avatar: '刘' },
        time: '5小时前',
        text: '开放时间是什么时候啊？晚上几点关门？',
        like: 7,
        replies: [
          {
            user: { name: '李同学', avatar: '李' },
            time: '4小时前',
            text: '@刘同学 早上8点到晚上10点，周末也开放',
            like: 4
          }
        ]
      },
      {
        user: { name: '张老师', avatar: '张' },
        time: '7小时前',
        text: '感谢分享！学校最近投入很多资源改善学习环境，希望大家好好学习~',
        like: 21,
        replies: []
      }
    ]
  },
  {
    id: 2,
    user: { name: '张同学', avatar: '张', college: '计算机学院' },
    time: '2小时前',
    text: '终于完成了数据结构的课程设计！三个星期的努力没有白费。感谢一起熬夜奋斗的舍友们，我们一定会取得好成绩💪🏻',
    hashtag: '#学习日常 #课程设计',
    image: "../images/study.webp",
    like: 86,
    comment: 24,
    views: 200,
    location: '计算机学院',
    comments: [
      {
        user: { name: '李同学', avatar: '李' },
        time: '1小时前',
        text: '恭喜！一起加油！',
        like: 5,
        replies: []
      },
      {
        user: { name: '王学长', avatar: '王' },
        time: '30分钟前',
        text: '数据结构真的不容易，佩服你们的坚持！',
        like: 3,
        replies: []
      }
    ]
  },
  {
    id: 3,
    user: { name: '王学长', avatar: '王', college: '经济管理学院' },
    time: '昨天',
    text: '📢【讲座预告】本周五晚7点，邀请到了腾讯资深产品经理@刘老师 来我校分享产品设计经验，地点：大礼堂A103。本次讲座计入综合素质学分，欢迎感兴趣的学弟学妹来参加！',
    hashtag: '#讲座 #产品设计',
    image: '',
    like: 98,
    comment: 35,
    views: 320,
    location: '大礼堂A103',
    comments: [
      {
        user: { name: '李同学', avatar: '李' },
        time: '2小时前',
        text: '请问需要提前报名吗？',
        like: 2,
        replies: [
          {
            user: { name: '王学长', avatar: '王' },
            time: '1小时前',
            text: '不需要，直接到场即可！',
            like: 1
          }
        ]
      },
      {
        user: { name: '张同学', avatar: '张' },
        time: '1小时前',
        text: '期待讲座！',
        like: 1,
        replies: []
      }
    ]
  },
  {
    id: 4,
    user: { name: '赵同学', avatar: '赵', college: '艺术学院' },
    time: '3天前',
    text: '🎨 艺术展览本周六开幕，欢迎大家来参观！',
    hashtag: '#艺术 #展览',
    image: '',
    like: 45,
    comment: 10,
    views: 120,
    location: '艺术楼一层展厅',
    comments: [
      {
        user: { name: '李同学', avatar: '李' },
        time: '2天前',
        text: '一定去支持！',
        like: 2,
        replies: []
      }
    ]
  },
  {
    id: 5,
    user: { name: '孙学姐', avatar: '孙', college: '管理学院' },
    time: '1小时前',
    text: '今天食堂新菜品超级好吃！推荐大家试试麻辣香锅！',
    hashtag: '#美食 #食堂',
    image: '',
    like: 32,
    comment: 8,
    views: 90,
    location: '一食堂',
    comments: [
      { user: { name: '王学长', avatar: '王' }, time: '50分钟前', text: '下课就去！', like: 1, replies: [] }
    ]
  },
  {
    id: 6,
    user: { name: '钱同学', avatar: '钱', college: '法学院' },
    time: '2小时前',
    text: '法学讲座收获满满，感谢老师们的精彩分享！',
    hashtag: '#讲座 #法学',
    image: '',
    like: 21,
    comment: 5,
    views: 60,
    location: '法学楼201',
    comments: []
  },
  {
    id: 7,
    user: { name: '周同学', avatar: '周', college: '物理学院' },
    time: '4小时前',
    text: '实验室新仪器到货，欢迎大家预约体验！',
    hashtag: '#实验 #物理',
    image: '',
    like: 18,
    comment: 3,
    views: 40,
    location: '物理实验楼',
    comments: []
  },
  {
    id: 8,
    user: { name: '吴同学', avatar: '吴', college: '数学学院' },
    time: '5小时前',
    text: '高数作业终于写完了，今晚可以好好休息一下！',
    hashtag: '#高数 #作业',
    image: '',
    like: 27,
    comment: 6,
    views: 70,
    location: '宿舍',
    comments: []
  },
  {
    id: 9,
    user: { name: '郑同学', avatar: '郑', college: '化学学院' },
    time: '6小时前',
    text: '化学实验有点难，求助有经验的同学！',
    hashtag: '#化学 #实验',
    image: '',
    like: 14,
    comment: 2,
    views: 30,
    location: '化学实验楼',
    comments: []
  },
  {
    id: 10,
    user: { name: '王老师', avatar: '王', college: '计算机学院' },
    time: '7小时前',
    text: '下周一有编程竞赛宣讲，欢迎大家参加！',
    hashtag: '#竞赛 #编程',
    image: '',
    like: 40,
    comment: 12,
    views: 110,
    location: '计算机楼报告厅',
    comments: []
  },
  {
    id: 11,
    user: { name: '冯同学', avatar: '冯', college: '外国语学院' },
    time: '8小时前',
    text: '英语角今晚7点见，欢迎大家来练口语！',
    hashtag: '#英语 #交流',
    image: '',
    like: 19,
    comment: 4,
    views: 50,
    location: '外语楼大厅',
    comments: []
  },
  {
    id: 12,
    user: { name: '陈同学', avatar: '陈', college: '生物学院' },
    time: '9小时前',
    text: '生物竞赛报名开始啦，感兴趣的同学快来！',
    hashtag: '#生物 #竞赛',
    image: '',
    like: 22,
    comment: 7,
    views: 80,
    location: '生物楼',
    comments: []
  },
  {
    id: 13,
    user: { name: '褚同学', avatar: '褚', college: '历史学院' },
    time: '10小时前',
    text: '历史讲座：从秦汉到明清，欢迎参加！',
    hashtag: '#历史 #讲座',
    image: '',
    like: 16,
    comment: 3,
    views: 35,
    location: '历史楼101',
    comments: []
  },
  {
    id: 14,
    user: { name: '卫同学', avatar: '卫', college: '体育学院' },
    time: '11小时前',
    text: '校篮球队今晚训练，欢迎围观加油！',
    hashtag: '#篮球 #体育',
    image: '',
    like: 30,
    comment: 9,
    views: 100,
    location: '体育馆',
    comments: []
  },
  {
    id: 15,
    user: { name: '蒋同学', avatar: '蒋', college: '音乐学院' },
    time: '12小时前',
    text: '钢琴独奏会圆满结束，感谢大家的支持！',
    hashtag: '#音乐 #钢琴',
    image: '',
    like: 25,
    comment: 5,
    views: 60,
    location: '音乐厅',
    comments: []
  },
  {
    id: 16,
    user: { name: '沈同学', avatar: '沈', college: '哲学学院' },
    time: '13小时前',
    text: '哲学沙龙：人生的意义，今晚8点见！',
    hashtag: '#哲学 #沙龙',
    image: '',
    like: 12,
    comment: 2,
    views: 25,
    location: '哲学楼202',
    comments: []
  },
  {
    id: 17,
    user: { name: '韩同学', avatar: '韩', college: '新闻学院' },
    time: '14小时前',
    text: '校园记者团招新，欢迎热爱写作的同学加入！',
    hashtag: '#记者 #招新',
    image: '',
    like: 17,
    comment: 4,
    views: 45,
    location: '新闻楼',
    comments: []
  },
  {
    id: 18,
    user: { name: '杨同学', avatar: '杨', college: '地理学院' },
    time: '15小时前',
    text: '地理野外考察报名中，名额有限，先到先得！',
    hashtag: '#地理 #考察',
    image: '',
    like: 20,
    comment: 6,
    views: 55,
    location: '地理楼',
    comments: []
  },
  {
    id: 19,
    user: { name: '朱同学', avatar: '朱', college: '环境学院' },
    time: '16小时前',
    text: '环保社团本周末有公益活动，欢迎报名！',
    hashtag: '#环保 #公益',
    image: '',
    like: 23,
    comment: 7,
    views: 65,
    location: '环境楼',
    comments: []
  },
  {
    id: 20,
    user: { name: '秦同学', avatar: '秦', college: '政治学院' },
    time: '17小时前',
    text: '政治学论坛：国际关系新趋势，明天见！',
    hashtag: '#政治 #论坛',
    image: '',
    like: 15,
    comment: 3,
    views: 30,
    location: '政治楼301',
    comments: []
  },
  {
    id: 21,
    user: { name: '尤同学', avatar: '尤', college: '心理学院' },
    time: '18小时前',
    text: '心理健康讲座，关爱自我成长。',
    hashtag: '#心理 #健康',
    image: '',
    like: 28,
    comment: 8,
    views: 75,
    location: '心理楼',
    comments: []
  },
  {
    id: 22,
    user: { name: '许同学', avatar: '许', college: '教育学院' },
    time: '19小时前',
    text: '教育学专业见习分享会，欢迎参加！',
    hashtag: '#教育 #见习',
    image: '',
    like: 13,
    comment: 2,
    views: 20,
    location: '教育楼',
    comments: []
  },
  {
    id: 23,
    user: { name: '何同学', avatar: '何', college: '信息学院' },
    time: '20小时前',
    text: '信息安全知识讲座，保护你的数据安全。',
    hashtag: '#信息 #安全',
    image: '',
    like: 26,
    comment: 6,
    views: 60,
    location: '信息楼',
    comments: []
  },
  {
    id: 24,
    user: { name: '吕同学', avatar: '吕', college: '材料学院' },
    time: '21小时前',
    text: '材料力学实验报告终于写完了！',
    hashtag: '#材料 #实验',
    image: '',
    like: 11,
    comment: 1,
    views: 15,
    location: '材料楼',
    comments: []
  },
  {
    id: 25,
    user: { name: '施同学', avatar: '施', college: '交通学院' },
    time: '22小时前',
    text: '交通工程专业实习感悟，收获满满。',
    hashtag: '#交通 #实习',
    image: '',
    like: 14,
    comment: 2,
    views: 18,
    location: '交通楼',
    comments: []
  }
];

window.dynamicList = window.dynamicList.map((item, idx) => {
  if (!item.comments || item.comments.length === 0) {
    // 生成2-4条评论
    const commentCount = 2 + (idx % 3);
    const users = [
      { name: '李同学', avatar: '李' },
      { name: '王学长', avatar: '王' },
      { name: '张同学', avatar: '张' },
      { name: '刘同学', avatar: '刘' },
      { name: '赵同学', avatar: '赵' },
      { name: '孙学姐', avatar: '孙' },
      { name: '钱同学', avatar: '钱' },
      { name: '周同学', avatar: '周' }
    ];
    item.comments = Array.from({ length: commentCount }).map((_, i) => ({
      user: users[(idx + i) % users.length],
      time: `${(i + 1) * 2}小时前`,
      text: `评论内容示例${i + 1}：${item.user.name}的动态真棒！`,
      like: Math.floor(Math.random() * 10) + 1,
      replies: []
    }));
    item.comment = item.comments.length;
  }
  return item;
}); 