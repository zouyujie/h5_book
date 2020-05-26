if (config.isMock) {
    //获取故障类型 GetFaultType
    Mock.mock(config.GetFaultType, {
        "StatusCode": 200,
        "Message": null,
        "Data": [{
            "CODE": "GZDT01",
            "EQT_ID": "4403Z01",
            "NAME": "设备故障",
            "sys_updatetime": "2018-09-19T11:03:55.670795Z",
            "STATE": 1,
            "CREATE_USER_ID": "zouqj",
            "MODIFY_TIME": null,
            "MODIFY_USER_ID": null,
            "CREATE_TIME": "2018-09-19T11:03:55"
        }, {
            "CODE": "GZDT02",
            "EQT_ID": "4403Z01",
            "NAME": "采集器掉线",
            "sys_updatetime": "2018-09-19T11:04:06.984182Z",
            "STATE": 1,
            "CREATE_USER_ID": "zouqj",
            "MODIFY_TIME": null,
            "MODIFY_USER_ID": null,
            "CREATE_TIME": "2018-09-19T11:04:06"
        }]
    });
}