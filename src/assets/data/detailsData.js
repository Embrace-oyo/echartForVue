/**
 * 获取总览数据
 */
export const getDetailsData = () => {
    return {
        soldier: [
            {
                name: "沈某",
                phone: 18988989989,
                age: 25,
                nativePlace: "四川成都",
                stature: "174cm",
                education: "大专",
                soldierServices: "炮兵",
                speciality: "搏斗",
                bloodType: "AB",
                medicalHistory: "无",
                nation: "汉族",
                politicsStatus: "党员",
                familyTies: "正常",
                maritalStatus: "未婚",
                haveChildren: "否",
                mentalHealth: "健康",
                portrait: "http://photocdn.sohu.com/20120514/Img343136320.jpg",
                /*成绩*/
                performance: [
                    {name: '体能考验', value: '5公里'},
                    {name: '射击考验', value: '48环'},
                    {name: '障碍考验', value: '400m:50s'},
                    {name: '专业考验', value: '一炮手'},
                    {name: '擅长技能', value: '驾驶'},
                    {name: '心理健康', value: '正常'}
                ],
                /*出勤状态*/
                turnType: '正常',
                /**
                 * 单兵素质分析（雷达图）
                 */
                analyze: {
                    indicatorData: [
                        {name: '心理', max: 100},
                        {name: '知识', max: 100},
                        {name: '身体', max: 100},
                        {name: '生理', max: 100},
                    ],
                    series: [
                        {
                            value: [62, 98, 80, 88],
                            name: "单兵素质分析"
                        }
                    ]
                },
                currentPosition: [{
                    '当前位置': [-615.9725750135193,
                        30.662518754219317]
                }, [
                    {name: '当前位置', value: 100}
                ]],
                /**
                 * 行为分析
                 */
                behavioural: {
                    xAxisData: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11",
                        "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23",
                        "24", "25", "26", "27", "28", "29", "30"],
                    series: [
                        {
                            name: '月度考核',
                            data: [79, 89, 75, 88, 96, 79, 89, 75, 88, 96, 79, 89, 75, 88, 96, 79,
                                89, 75, 88, 96, 79, 89, 75, 88, 96, 79, 89, 75, 88, 96]
                        }
                    ]
                }
            },
            {
                name: "孙悦"
            },
            {
                name: "李世林"
            },
            {
                name: "赵雷"
            },
            {
                name: "李亚东"
            },
            {
                name: "任世豪"
            },
            {
                name: "王志文"
            },
            {
                name: "胡浩帆"
            }
            ,
            {
                name: "张浩"
            }
        ]
    }
};

export default {
    getDetailsData
}
