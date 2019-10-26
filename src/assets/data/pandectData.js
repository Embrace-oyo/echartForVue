/**
 * 获取总览数据
 */
export const getPandectData = () => {
    return {
        /**
         * 兵种人数总览（柱状图）
         */
        theNumberOfUnits: {
            xAxisData: ["炮兵", "侦查", "炊事", "特种", "医护"],
            series: [
                {
                    name: '兵种人数总览',
                    data: [4000, 500, 1000, 500, 1000]
                }
            ]
        },
        /**
         * 正常、出差、学习、休假、事假、病假分布情况（饼状图）
         */
        affair: [
            {value: 6000, name: '正常'},
            {value: 200, name: '出差'},
            {value: 200, name: '学习'},
            {value: 200, name: '休假'},
            {value: 200, name: '事假'},
            {value: 200, name: '病假'},
        ],
        /**
         * 单兵素质分析（雷达图）
         */
        quality: {
            indicatorData: [
                { name: '军事', max: 100},
                { name: '政治', max: 100},
                { name: '武器', max: 100},
                { name: '战术', max: 100},
                { name: '训练', max: 100},
            ],
            series:[
                {
                    value : [90, 100, 95, 75, 90],
                    name:"单兵素质分析"
                }
            ]
        },
        /**
         * 单兵战力分析（雷达图）
         */
        fightingCapacity: {
            indicatorData: [
                { name: '格斗', max: 100},
                { name: '射击', max: 100},
                { name: '急救', max: 100},
                { name: '驾驶', max: 100},
                { name: '操作', max: 100},
            ],
            series:[
                {
                    value : [70, 90, 60, 96, 99],
                    name:"单兵战力分析"
                }
            ]
        },
        /**
         * 单兵综合分析（雷达图）
         */
        comprehensiveAbilities: {
            indicatorData: [
                { name: '素质', max: 100},
                { name: '武力', max: 100},
                { name: '健康', max: 100},
                { name: '思想', max: 100},
            ],
            series:[
                {
                    value : [90, 80, 97, 100],
                    name:"单兵综合分析"
                }
            ]
        },
        /**
         * 动态当前士兵活动计划（以消息的方式展现xxx训练、演习等等正在进行，以及近期准备进行的各类计划的情况，
         * 紧急情况（如军营所在地出现传染病等），点击后可跳转链接）
         */
        dynamicCondition: [
            {
                time:"2019-10-15 14:30:00",
                content:"三团政委赵刚召开三团会议"
            },
            {
                time:"2019-10-15 11:30:31",
                content:"三团团长李云龙在演习时受到意外轻伤"
            },
            {
                time:"2019-10-15 09:30:31",
                content:"三团团长李云龙组织“122毫米自行榴弹炮精确打击战术”演习"
            },

        ],
        /**
         * 政治面貌分类统计（饼状图）
         */
        politicsStatus: [
            {value: 6000, name: '党员'},
            {value: 500, name: '预备党员'},
            {value: 500, name: '团员'},
        ],
        /**
         * 身高分布（面积图）
         */
        stature: {
            xAxisData: ["一团", "二团", "三团"],
            series: [
                {
                    name: '165以下',
                    data: [200, 100, 100]
                },
                {
                    name: '165-170',
                    data: [1800, 1400, 1400]
                },
                {
                    name: '170以上',
                    data: [1000, 500, 500]
                }
            ]
        },
        /**
         * 体重分布（面积图）
         */
        weight: {
            xAxisData: ["一团", "二团", "三团"],
            series: [
                {
                    name: '60kg以下',
                    data: [190, 100, 100]
                },
                {
                    name: '60kg-65kg',
                    data: [300, 100, 100]
                },
                {
                    name: '66kg-70kg',
                    data: [2500, 1790, 1790]
                },
                {
                    name: '70kg以上',
                    data: [10, 10, 10]
                }
            ]
        },
        /**
         * 学历分布（面积图）
         */
        educationBackground: {
            xAxisData: ["一团", "二团", "三团"],
            series: [
                {
                    name: '高中毕业以下',
                    data: [100, 100, 100]
                },
                {
                    name: '高中毕业',
                    data: [600, 400, 400]
                },
                {
                    name: '中专',
                    data: [600, 400, 400]
                },
                {
                    name: '大专',
                    data: [1500, 1000, 1000]
                },
                {
                    name: '大专以上',
                    data: [200, 100, 100]
                }
            ]
        },
        /**
         * 特长（热词图）
         */
        speciality: [
            {value: 5000, name: '进攻'},
            {value: 500, name: '防守'},
            {value: 500, name: '长途'},
            {value: 500, name: '撤退'},
            {value: 500, name: '阵地'},
        ],
        /**
         * 血型（饼状图）
         */
        bloodType: [
            {value: 3000, name: 'A型血'},
            {value: 1000, name: 'B型血'},
            {value: 1000, name: 'O型血'},
            {value: 2000, name: 'AB型血'},
        ],
        /**
         * 年龄（柱状图）
         */
        age: {
            xAxisData: ["20岁以下", "20-25岁", "26-30岁", "30岁以上"],
            series: [
                {
                    name: '年龄',
                    data: [1000, 3000, 1000, 1000]
                }
            ]
        },
        /**
         * 病史（心血管疾病、视力、传染病、精神病、残疾等），柱状图
         */
        medicalHistory: {
            xAxisData: ["心血管", "视力", "传染病", "精神病", "其他"],
            series: [
                {
                    name: '病史',
                    data: [3, 212, 5, 0, 309]
                }
            ]
        },
        /**
         * 体能分布（面积图）
         */
        stamina: {
            xAxisData: ["一团", "二团", "三团"],
            series: [
                {
                    name: '差',
                    data: [100, 100, 100]
                },
                {
                    name: '良',
                    data: [2400, 1700, 1700]
                },
                {
                    name: '优',
                    data: [500, 200, 200]
                }
            ]
        },
        /**
         * 射击分布（面积图）
         */
        shoot: {
            xAxisData: ["一团", "二团", "三团"],
            series: [
                {
                    name: '差',
                    data: [100, 100, 200]
                },
                {
                    name: '良',
                    data: [2000, 1000, 1600]
                },
                {
                    name: '优',
                    data: [900, 900, 200]
                }
            ]
        },
        /**
         * 障碍分布（面积图）
         */
        obstacle: {
            xAxisData: ["一团", "二团", "三团"],
            series: [
                {
                    name: '差',
                    data: [200, 50, 100]
                },
                {
                    name: '良',
                    data: [2200, 1750, 1300]
                },
                {
                    name: '优',
                    data: [600, 200, 600]
                }
            ]
        },
        /**
         * 特种侦查专业技术能力分布（饼状图）
         */
        specialInvestigation: [
            {value: 100, name: '突袭'},
            {value: 200, name: '强袭'},
            {value: 100, name: '潜行'},
            {value: 100, name: '暗杀'},
        ],
        /**
         * 后勤保障专业技术能力分布（饼状图）
         */
        logisticalSupport: [
            {value: 300, name: '维修'},
            {value: 100, name: '抢修'},
            {value: 100, name: '保养'},
            {value: 100, name: '伙食'},
        ],
        /**
         * 军官专业技术能力分布（饼状图）
         */
        militaryOfficer: [
            {value: 100, name: '指挥'},
            {value: 300, name: '管理'},
            {value: 100, name: '指导'},
            {value: 100, name: '政委'},
        ],
        /**
         * 炮兵专业技术能力分布（饼状图）
         */
        artillery: [
            {value: 200, name: '旗手'},
            {value: 500, name: '炮手'},
            {value: 2300, name: '填装手'},
            {value: 1000, name: '通讯'},
        ],
        /**
         * 医护专业技术能力分布（饼状图）
         */
        professionalSkill: [
            {value: 100, name: '急救'},
            {value: 100, name: '手术'},
            {value: 300, name: '护理'},
            {value: 100, name: '康复'},
        ]
    }
};

export default {
    getPandectData
}