export default {
  getBanner: () => ({
    code: 1,
    data: {
      bannerList: [
        {
          image: '/static/hhxh.jpg',
          title: '弘德明志，博学笃行'
        },
        {
          image: '/static/library.jpg',
          title: '弘德明志，博学笃行'
        },
		{
		  image: '/static/xm.jpg',
		  title: '弘德明志，博学笃行'
		}
      ]
    },
    msg: ''
  }),

  getHomeList: () => ({
    code: 1,
    data: [
      {
        id: 1,
        title: '图书馆',
        img: '/static/library.jpg',
        tag: ['图书', '学习'],
        isDot: '推荐',
        introduce: '路线介绍1：从北门出发，向南走595米，步行大约需要8分钟。 ',
		introducee:'路线介绍2：从西门出发，沿文渊路向东步行约300m，到博学路左拐，沿博学路向北步行约400m到文津路，右侧就是图书馆，全程约760m,步行耗时约9分钟。',
		introducex:'路线介绍3：从图书馆出发？？？这里就是图书馆！',
		introduce1:'山东师范大学图书馆始建于1950年，前身为山东师范学院图书馆，1952年接收原齐鲁大学调拨的近二十万册图书奠定馆藏基础 。现设千佛山校区图书馆（建筑面积13400平方米）和长清湖校区图书馆（建筑面积50934.67平方米），后者2015年启用，2023年5月典籍博物馆正式开放 。馆藏纸质文献330余万册，含20万册线装古籍，拥有112万册电子图书及135个中外文数据库 。该馆1993年启用ILAS系统实现自动化管理 。2025年位列全国高校图书馆学术能力排名第18位，连续15次获评山东省古籍保护工作先进单位，获批全国古籍重点保护单位 。配备15个研习间、40个单人学习位及咖啡厅等设施，采用刷脸入馆和智能座位管理系统 。承办“图书馆与新质生产力”等学术研讨会，构建古籍保护、整理研究与文化传承六位一体工作布局 。',
        times: '周一到周天 8:30--22:00 开放'
      },
      {
        id: 2,
        title: '一餐',
        img: '/static/yic.jpg',
        tag: ['正餐','食堂'],
        isDot: '推荐',
        introduce: '路线介绍1：从北门出发，沿文渊路向西走到博学路，再继续沿博学路走1km到文渊路再继续右拐到第一餐厅，全程约1.2km，耗时15分钟。 ',
		introducee:'路线介绍2：从西门出发，沿文渊路向东步行约300m，到博学路左拐，沿博学路向北步行约400m到文津路，沿文津路向东步行约300m，右侧就是一餐，全程约1.1km，步行耗时约12分钟',
		introducex:'路线介绍3：从图书馆出法，向东走200m左右',
        introduce1:'长清湖校区共有4大餐厅，分别是第一餐厅、第二餐厅、清真餐厅、海棠园餐厅。第一餐厅：共有三层，分为5个部分（一楼、二楼北、二楼南、三楼北、三楼南）。牡丹园：提供油条、豆浆、包子、粥、豆腐脑等早餐，以及多种炒菜。桂花园：有丰富的菜品选择。玫瑰园：以山师大骨面闻名，是校内网红面。蔷薇园：456 窗口的炒菜备受好评，老板热情好客。民族餐厅：提供烤鱼等特色菜品',
		times: '周一到周天正餐时间开放'
      },
      {
        id: 3,
        title: '二餐',
        img: '/static/erc.jpg',
        tag: ['小吃','美食广场'],
        isDot: '推荐',
        introduce: '路线介绍1：从北门出发，沿文渊路向西走到博学路，再继续沿博学路走1km到文渊路再继续右拐到第二餐厅，全程约1.2km，耗时15分钟。',
		introducee:'路线介绍2：从西门出发，向东直走112m,全程约112m，耗时1分钟。',
		introducex:'路线介绍3：从图书馆出发,沿文津路步行到博学路，向南步行约400m到文渊路，继续沿文渊路向西走约200m，全程约623m，耗时8分钟。',
        introduce1:'山东师范大学第二餐厅隆重开业，餐厅由山东纳博士和博佳餐饮有限公司携手打造，是我校教育事业与第三产业合作的又一成果。 餐厅设计新颖，菜色齐全，能够充分满足广大师生多样化的就餐需求。',
		times: '周一到周天 8:30--22:00 开放'
      },
      {
        id: 4,
        title: '计算机与人工智能学院',
        img: '/static/xgxyl.jpg',
        tag: ['人机楼','学院楼'],
        isDot: '推荐',
        introduce: '路线介绍1：从北门出发，沿笃行路走约400米，左拐向南步行约460米，全程约860m,耗时11分钟。',
		introducee:'路线介绍2：从西门出发，沿文汇路走约100m,然后向进入笃行路，沿笃行路向北走约300 m,右侧到计算机与人工智能学院,全程约1.2km,耗时约5分钟。',
		introducex:'路线介绍3：从图书馆出发,沿文津路向西走约350m，正对着就是学院楼,全程约350m,耗时约5分钟。',
        introduce1:'学院概况：信息科学与工程学院其前身计算机科学系成立于1985年12月（其中计算机科学与技术专业1984年即开始招生），1995年3月计算机科学系和计算中心合并成立信息管理学院，2005年9月更名为信息科学与工程学院，下设计算机系、人工智能系（含公共课教学部）、通信工程系、物联网工程系、网络空间安全系和实验教学中心。2022年获批山东省人工智能现代产业学院。经过39年的发展和建设，现已发展成为师资队伍较强、招生规模较大、培养特色鲜明、教学科研突出的学院之一。',
		times: '周一到周天 9:00--22:30 开放'
      },
      {
        id: 5,
        title: '北门',
        img: '/static/xm.jpg',
        tag: ['校门', '大门'],
        isDot: '推荐',
        introduce: '第二餐厅...',
		introducee:'路线介绍2：从西门出发，',
		introducex:'路线介绍3：从图书馆出发？？？这里就是图书馆！',
        introduce1:'',
		times: '周一到周天6:00--23:00 开放'
      },
	  {
	    id: 6,
	    title: '西门',
	    img: '/static/xxmm.png',
	    tag: ['校门', '小门'],
	    isDot: '推荐',
	    introduce: '第二餐厅...',
		introducee:'路线介绍2：从西门出发，',
		introducex:'路线介绍3：从图书馆出发？？？这里就是图书馆！',
	    introduce1:'',
		times: '周一到周天6:00--23:00 开放'
	  },
	  {
	    id: 7,
	    title: '文渊楼C区',
	    img: '/static/wycC.jpg',
	    tag: ['教学楼', '可自习'],
	    isDot: '推荐',
	    introduce: '第二餐厅...',
		introducee:'路线介绍2：从西门出发，',
		introducex:'路线介绍3：从图书馆出发？？？这里就是图书馆！',
	    introduce1:'',
		times: '周一到周天6:00--23:00 开放'
	  },
	  {
	    id: 8,
	    title: '英华楼',
	    img: '/static/yhl.jpg',
	    tag: ['~~', '~~'],
	    isDot: '推荐',
	    introduce: '第二餐厅...',
		introducee:'路线介绍2：从西门出发，',
		introducex:'路线介绍3：从图书馆出发？？？这里就是图书馆！',
	    introduce1:'',
		times: '周一到周天6:00--23:00 开放'
	  },
	  {
	    id: 9,
	    title: '校医院',
	    img: '/static/xyyl.jpg',
	    tag: ['~~', '~~'],
	    isDot: '推荐',
	    introduce: '第二餐厅...',
		introducee:'路线介绍2：从西门出发，',
		introducex:'路线介绍3：从图书馆出发？？？这里就是图书馆！',
	    introduce1:'',
		times: '周一到周天6:00--23:00 开放'
	  },
	  {
	    id: 10,
	    title: '田径场',
	    img: '/static/屏幕截图 2025-12-25 173833.png',
	    tag: ['体育', '运动'],
	    isDot: '推荐',
	    introduce: '第二餐厅...',
		introducee:'路线介绍2：从西门出发，',
		introducex:'路线介绍3：从图书馆出发？？？这里就是图书馆！',
		introduce1:'',
	    times: '全天开放'
	  },
	  {
	    id: 11,
	    title: '足球场',
	    img: '/static/屏幕截图 2025-12-25 174752.png',
	    tag: ['足球', '运动'],
	    isDot: '推荐',
	    introduce: '第二餐厅...',
		introducee:'路线介绍2：从西门出发，',
		introducex:'路线介绍3：从图书馆出发？？？这里就是图书馆！',
		introduce1:'',
	    times: '全天开放'
	  },
	  {
	    id: 12,
	    title: '天颐广场',
	    img: '/static/tygc.jpg',
	    tag: ['广场', '活动'],
	    isDot: '推荐',
	    introduce: '第二餐厅...',
		introducee:'路线介绍2：从西门出发，',
		introducex:'路线介绍3：从图书馆出发？？？这里就是图书馆！',
		introduce1:'',
	    times: '全天开放'
	  },
	  {
	    id: 13,
	    title: '快递点',
	    img: '/static/kdd.png',
	    tag: ['菜鸟驿站', '京东'],
	    isDot: '推荐',
	    introduce: '第二餐厅...',
	  		introducee:'路线介绍2：从西门出发，',
	  		introducex:'路线介绍3：从图书馆出发？？？这里就是图书馆！',
	  		introduce1:'',
	    times: '全天开放'
	  },
	  {
	    id: 14,
	    title: '大学生活动中心',
	    img: '/static/library.jpg',
	    tag: ['~~', '活动'],
	    isDot: '推荐',
	    introduce: '第二餐厅...',
	  		introducee:'路线介绍2：从西门出发，',
	  		introducex:'路线介绍3：从图书馆出发？？？这里就是图书馆！',
	  		introduce1:'',
	    times: '全天开放'
	  },
	  {
	    id: 15,
	    title: '文渊E区',
	    img: '/static/wyeE.jpg',
	    tag: ['教学楼', '实验'],
	    isDot: '推荐',
	    introduce: '第二餐厅...',
	  		introducee:'路线介绍2：从西门出发，',
	  		introducex:'路线介绍3：从图书馆出发？？？这里就是图书馆！',
	  		introduce1:'',
	    times: '全天开放'
	  },
	  {
	    id: 16,
	    title: '文昌楼',
	    img: '/static/wcl.jpg',
	    tag: ['广场', '活动'],
	    isDot: '推荐',
	    introduce: '第二餐厅...',
	  		introducee:'路线介绍2：从西门出发，',
	  		introducex:'路线介绍3：从图书馆出发？？？这里就是图书馆！',
	  		introduce1:'',
	    times: '全天开放'
	  },
	  {
	    id: 17,
	    title: '文澜楼',
	    img: '/static/wyeE.jpg',
	    tag: ['广场', '活动'],
	    isDot: '推荐',
	    introduce: '第二餐厅...',
	  		introducee:'路线介绍2：从西门出发，',
	  		introducex:'路线介绍3：从图书馆出发？？？这里就是图书馆！',
	  		introduce1:'',
	    times: '全天开放'
	  },
	  {
	    id: 18,
	    title: '文渊D区',
	    img: '/static/wycC.jpg',
	    tag: ['广场', '活动'],
	    isDot: '推荐',
	    introduce: '第二餐厅...',
	  		introducee:'路线介绍2：从西门出发，',
	  		introducex:'路线介绍3：从图书馆出发？？？这里就是图书馆！',
	  		introduce1:'',
	    times: '全天开放'
	  },
	  {
	    id: 19,
	    title: '文渊A区',
	    img: '/static/wyaA.jpg',
	    tag: ['广场', '活动'],
	    isDot: '推荐',
	    introduce: '第二餐厅...',
	  		introducee:'路线介绍2：从西门出发，',
	  		introducex:'路线介绍3：从图书馆出发？？？这里就是图书馆！',
	  		introduce1:'',
	    times: '全天开放'
	  },
	  {
	    id: 20,
	    title: '文渊B区',
	    img: '/static/wybB.jpg',
	    tag: ['广场', '活动'],
	    isDot: '推荐',
	    introduce: '第二餐厅...',
	  		introducee:'路线介绍2：从西门出发，',
	  		introducex:'路线介绍3：从图书馆出发？？？这里就是图书馆！',
	  		introduce1:'',
	    times: '全天开放'
	  },
	  {
	    id: 21,
	    title: '文渊D区',
	    img: '/static/wycC.jpg',
	    tag: ['广场', '活动'],
	    isDot: '推荐',
	    introduce: '第二餐厅...',
	  		introducee:'路线介绍2：从西门出发，',
	  		introducex:'路线介绍3：从图书馆出发？？？这里就是图书馆！',
	  		introduce1:'',
	    times: '全天开放'
	  },
	  {
	    id: 22,
	    title: '体育馆',
	    img: '/static/屏幕截图 2025-12-25 173823.png',
	    tag: ['广场', '活动'],
	    isDot: '推荐',
	    introduce: '第二餐厅...',
	  		introducee:'路线介绍2：从西门出发，',
	  		introducex:'路线介绍3：从图书馆出发？？？这里就是图书馆！',
	  		introduce1:'',
	    times: '全天开放'
	  },
	  {
	    id: 23,
	    title: '正德楼',
	    img: '/static/屏幕截图 2025-12-25 180220.png',
	    tag: ['广场', '活动'],
	    isDot: '推荐',
	    introduce: '第二餐厅...',
	  		introducee:'路线介绍2：从西门出发，',
	  		introducex:'路线介绍3：从图书馆出发？？？这里就是图书馆！',
	  		introduce1:'',
	    times: '全天开放'
	  },
	  {
	    id: 24,
	    title: '明德楼',
	    img: '/static/屏幕截图 2025-12-25 180215.png',
	    tag: ['广场', '活动'],
	    isDot: '推荐',
	    introduce: '第二餐厅...',
	  		introducee:'路线介绍2：从西门出发，',
	  		introducex:'路线介绍3：从图书馆出发？？？这里就是图书馆！',
	  		introduce1:'',
	    times: '全天开放'
	  },
	  {
	    id: 25,
	    title: '崇德楼',
	    img: '/static/屏幕截图 2025-12-25 180144.png',
	    tag: ['广场', '活动'],
	    isDot: '推荐',
	    introduce: '第二餐厅...',
	  		introducee:'路线介绍2：从西门出发，',
	  		introducex:'路线介绍3：从图书馆出发？？？这里就是图书馆！',
	  		introduce1:'',
	    times: '全天开放'
	  },
	  {
	    id: 26,
	    title: '厚德楼',
	    img: '/static/屏幕截图 2025-12-25 180136.png',
	    tag: ['广场', '活动'],
	    isDot: '推荐',
	    introduce: '第二餐厅...',
	  		introducee:'路线介绍2：从西门出发，',
	  		introducex:'路线介绍3：从图书馆出发？？？这里就是图书馆！',
	  		introduce1:'',
	    times: '全天开放'
	  }
    ],
    msg: ''
  }),
  
  // 详情
  detailProject: () => ({
    code: 1,
    data: [
      {
        id: 1,
        url: '/static/lib_road.jpg',
        tag: '高德导航',
        title: '路线详情',
        desc: ''
      },
	  {
	    id: 12,
	    url: '/static/屏幕截图 2025-12-25 195649.png',
	    tag: '入口',
	    title: '闸机',
	    desc: ''
	  },
      {
        id: 2,
        url: '/static/ts1l.jpg',
        tag: '图书室',
        title: '1F',
        desc: ''
      },
      {
        id: 3,
        url: '/static/ts2l.jpg',
        tag: '图书室',
        title: '2F',
        desc: ''
      },
      {
        id: 4,
        url: '/static/ts3l.jpg',
        tag: '图书室',
        title: '3F',
        desc: ''
      },
	  {
	    id: 5,
	    url: '/static/ts4l.jpg',
	    tag: '图书室',
	    title: '4F',
	    desc: ''
	  },
	  {
	    id: 6,
	    url: '/static/ts5l.jpg',
	    tag: '图书室',
	    title: '5F',
	    desc: ''
	  },
	  {
	    id: 7,
	    url: '/static/ts6l.jpg',
	    tag: '图书室',
	    title: '6F',
	    desc: ''
	  },
	  {
	    id: 8,
	    url: '/static/ts7l.jpg',
	    tag: '咖啡厅',
	    title: '7F',
	    desc: ''
	  },
	  {
	    id: 9,
	    url: '/static/cft.jpg',
	    tag: '7F',
	    title: '咖啡厅',
	    desc: ''
	  },
	  {
	    id: 10,
	    url: '/static/xxs.jpg',
	    tag: '休息室',
	    title: '休息室',
	    desc: ''
	  },
	  {
	    id: 11,
	    url: '/static/jyjq.jpg',
	    tag: '1F',
	    title: '借阅机',
	    desc: ''
	  },
	  {
	    id: 13,
	    url: '/static/yyj.jpg',
	    tag: 'xxx',
	    title: '预约机制',
	    desc: ''
	  }
    ],
    msg: ''
  }),
  
  
  
  
  
  projectInfo: () => ({
      code: 1,
      data: [
	    {
          id: 1,
          img: '/static/lib_road.jpg',
          tag: '高德导航',
          title: '路线详情',
          desc: '',
		  explain:'高德路线详情。'
        },
		{
		  id: 12,
		  img: '/static/屏幕截图 2025-12-25 195649.png',
		  tag: '入口',
		  title: '闸机',
		  desc: '',
		   explain:'图书馆入口，需要使用学生证刷卡进入。'
		},
        {
          id: 2,
          img: '/static/ts1l.jpg',
          tag: '图书室',
          title: '1F',
          desc: '',
		  explain:'中1F是总服务台，可以自助借书，还书。在考研或期末周时1F可以背书。'
        },
        {
          id: 3,
          img: '/static/ts2l.jpg',
          tag: '图书室',
          title: '2F',
          desc: '',
		  explain:'东2F 文学（I类）'
        },
        {
          id: 4,
          img: '/static/ts3l.jpg',
          tag: '图书室',
          title: '3F',
          desc: '',
		  explain:'东3F 文化 教育 体育 （G类）'
        },
        {
          id: 5,
          img: '/static/ts4l.jpg',
          tag: '图书室',
          title: '4F',
          desc: '',
		  explain:'东4F 经济（F类）'
        },
        {
          id: 6,
          img: '/static/ts5l.jpg',
          tag: '图书室',
          title: '5F',
          desc: '',
		  explain:'东5F 政治 法律 军事（D E类）' 
        },
        {
          id: 7,
          img: '/static/ts6l.jpg',
          tag: '图书室',
          title: '6F',
          desc: '',
		  explain:'马列 哲学 社会科学（A B C类）'
        },
        {
          id: 8,
          img: '/static/ts7l.jpg',
          tag: '咖啡厅',
          title: '7F',
          desc: '',
		  explain:'中7F 咖啡厅 东7F 文化交流空间 外文书库 '
        },
        {
          id: 9,
          img: '/static/cft.jpg',
          tag: '7F',
          title: '咖啡厅',
          desc: '',
		  explain:'咖啡厅在7F，咖啡厅内可用餐，自习'
        },
        {
          id: 10,
          img: '/static/xxs.jpg',
          tag: '休息室',
          title: '休息室',
          desc: '',
		  explain:'休息空间，有沙发桌子，可以小声说话，睡觉，吃味道小的食品。'
        },
        {
          id: 11,
          img: '/static/jyjq.jpg',
          tag: '1F',
          title: '借阅机',
          desc: '',
		  explain:'借阅机在一楼大厅，拿到书后在一楼自主借阅。教职工每卡可借10册，借期60天。 学生每卡可借5册，借期30天。 图书可续借一次，续借期限为30天。 逾期未还者将暂停借阅权限，停借天数与过期天数相同。 读者可在自助借还设备上办理借还手续，如遇问题可到一层总服务台寻求帮助。'
        },
		{
		  id: 13,
		  img: '/static/yyj.jpg',
		  tag: 'xxx',
		  title: '预约机制',
		  desc: '',
		  explain:'在图书馆内学习，需要主动预约。可以在每层楼的服务台上预约，也可以在微信小程序上扫码预约。'
		}
      ],
      msg: ''
    }),
	
	
	
	likeList: () => ({
	    code: 1,
	    data: [
	      {
	        id: 1,
	        img: '/static/xxxx.png',
	        tag: '学院',
	        title: '计算机与人工智能学院',
	        introduce: '工学'
	      },
	      {
	        id: 2,
	        img: '/static/faf.png',
	        tag: '学院',
	        title: '法学院',
	        introduce: '法学'
	      },
	      {
	        id: 3,
	        img: '/static/jjxy.png',
	        tag: '学院',
	        title: '经济学院',
	        introduce: '经济学'
	      },
	      {
	        id: 4,
	        img: '/static/xlxy.png',
	        tag: '学院',
	        title: '心理学部',
	        introduce: '理学'
	      },
		  {
		    id: 5,
		    img: '/static/skxy.png',
		    tag: '学院',
		    title: '生命科学学院',
		    introduce: '理学'
		  },
		  {
		    id: 6,
		    img: '/static/wxxy.png',
		    tag: '学院',
		    title: '文学院',
		    introduce: '文学'
		  },
		  {
		    id: 7,
		    img: '/static/dhxy.png',
		    tag: '学院',
		    title: '地理环境科学学院',
		    introduce: '工学'
		  },
		  {
		    id: 8,
		    img: '/static/wdxy.png',
		    tag: '学院',
		    title: '物理与电子科学学院',
		    introduce: '工学'
		  },
		  {
		    id: 9,
		    img: '/static/hhxh.jpg',
		    tag: '学院',
		    title: '新闻与传媒学院',
		    introduce: '教育学'
		  },
		  {
		    id: 10,
		    img: '/static/lsxy.png',
		    tag: '学院',
		    title: '历史文化学院',
		    introduce: '历史学'
		  }
	    ],
	    msg: ''
	  }),
	  
	  
	  
	  // 论坛帖子列表（本地 mock）
	  forumList: () => ({
	    code: 1,
	    data: [
	      {
	        id: 1,
	        collegeId: 1,               // 学院 id，用于过滤
	        avatar: '/static/avatar1.jpg',
	        nick: 'id1',
	        time: '一周前',
	        title: '',
	        content: '',
	        like: 0,
	        reply: 0
	      },
		  {
		  	        id: 2,
		  	        collegeId: 1,
		  	        avatar: '/static/avatar2.jpg',
		  	        nick: 'id2',
		  	        time: '一周前',
		  	        title: '',
		  	        content: '',
		  	        like: 0,
		  	        reply: 0
		  	      },
				   {
				  		    id: 3,
				  		    collegeId: 1,
				  		    avatar: '/static/avatar2.jpg',
				  		    nick: 'id2',
				  		    time: '一周前',
				  		    title: '',
				  		    content: '',
				  		    like: 0,
				  		    reply: 0
				  		  },
				  		  {
				  		    id: 4,
				  		    collegeId: 1,
				  		    avatar: '/static/avatar2.jpg',
				  		    nick: 'id2',
				  		    time: '一周前',
				  		    title: '',
				  		    content: '',
				  		    like: 0,
				  		    reply: 0
				  		  },
				  		  {
				  		    id: 5,
				  		    collegeId: 1,
				  		    avatar: '/static/avatar2.jpg',
				  		    nick: 'id2',
				  		    time: '一周前',
				  		    title: '',
				  		    content: '',
				  		    like: 0,
				  		    reply: 0
				  		  },
				  		  {
				  		    id: 6,
				  		    collegeId: 1,
				  		    avatar: '/static/avatar2.jpg',
				  		    nick: 'id2',
				  		    time: '一周前',
				  		    title: '',
				  		    content: '',
				  		    like: 0,
				  		    reply: 0
				  		  },
				  		  {
				  		    id: 7,
				  		    collegeId: 1,
				  		    avatar: '/static/avatar2.jpg',
				  		    nick: 'id2',
				  		    time: '一周前',
				  		    title: '',
				  		    content: '',
				  		    like: 0,
				  		    reply: 0
				  		  },
				  		  {
				  		    id: 8,
				  		    collegeId: 1,
				  		    avatar: '/static/avatar2.jpg',
				  		    nick: 'id2',
				  		    time: '一周前',
				  		    title: '',
				  		    content: '',
				  		    like: 0,
				  		    reply: 0
				  		  },
				  		  {
				  		    id: 9,
				  		    collegeId: 1,
				  		    avatar: '/static/avatar2.jpg',
				  		    nick: 'id2',
				  		    time: '一周前',
				  		    title: '',
				  		    content: '',
				  		    like: 0,
				  		    reply: 0
				  		  },
				  		  {
				  		    id: 10,
				  		    collegeId: 1,
				  		    avatar: '/static/avatar2.jpg',
				  		    nick: 'id2',
				  		    time: '一周前',
				  		    title: '',
				  		    content: '',
				  		    like: 0,
				  		    reply: 0
				  		  },
				  		  {
				  		    id: 11,
				  		    collegeId: 1,
				  		    avatar: '/static/avatar2.jpg',
				  		    nick: 'id2',
				  		    time: '一周前',
				  		    title: '',
				  		    content: '',
				  		    like: 0,
				  		    reply: 0
				  		  },
				  	      {
				  	        id: 12,
				  	        collegeId: 2,               // 法学院
				  	        avatar: '/static/avatar3.jpg',
				  	        nick: '法小助手',
				  	        time: '1天前',
				  	        title: '法考资料免费分享',
				  	        content: '2025 法考客观题资料整理，网盘链接在评论区，自取～',
				  	        like: 0,
				  	        reply: 0
				  	      },
				  		  {
				  		    id: 13,
				  		    collegeId: 2,               // 法学院
				  		    avatar: '/static/avatar3.jpg',
				  		    nick: '法小助手',
				  		    time: '1天前',
				  		    title: '法考资料免费分享',
				  		    content: '2025 法考客观题资料整理，网盘链接在评论区，自取～',
				  		    like: 0,
				  		    reply: 0
				  		  }
				  
	    
	    ],
	    msg: ''
	  })
  
}



