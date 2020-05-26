if (config.isMock) {
    var _database = new smpWebSql();
    //生成一个GUID（取16位）伪随机数
    function newGuid() {
        var guid = "";
        for (var i = 1; i <= 16; i++) {
            var n = Math.floor(Math.random() * 16.0).toString(16);
            guid += n;
            if ((i == 8) || (i == 12))
                guid += "-";
        }
        return guid;
    }
    function getNamebyTypeId(typeId) {
        var result = "";
        switch (typeId) {
            case "GZDT01":
                result = "设备故障";
                break;
            case "GZDT02":
                result = "采集器掉线";
                break;
            default:
                break;
        }
        return result;
    }
    // 添加跟踪记录
    function addBillExecute(data) {
        _database.add('tb_billexecute_g', [data], function (res) {
            console.log("添加跟踪记录：" + res);//成功
        });
    }
    /*------------------------------用户登录权限start-------------------------------------*/
    //项目经理菜单权限
    var pmObj = {
        "StatusCode": 200,
        "Message": null,
        "Data": {
            "U": {
                "USER_ID": "4403001",
                "ORG_CODE": "4403Z01",
                "ORG_NAME": "XX维修项目",
                "DEPT_CODE": "ZHJD",
                "DEP_NAME": "事业部",
                "DIST_ID": "440300",
                "CODE": "4403Z01YWB110",
                "IS_SYS": false,
                "BUILD_ID": null,
                "ROLE_ID": "U007",
                "UROLE_TYPE": 3,
                "ROLE_NAME": "项目经理",
                "PASSWORD": "e10adc3949ba59abbe56e057f20f883e",
                "GENDER": 1,
                "BIND_PHONE": true,
                "FACE": null,
                "MEMO": null,
                "ADDRESS": null,
                "DUTY_TYPE": null,
                "ACTION_TYPE": "-1,B",
                "EMAIL": null,
                "FIX": false,
                "IS_ACC": false,
                "IS_OUT": false,
                "JOB_TYPE": null,
                "NAME": "李经理",
                "PHONE": "13200000001",
                "POSITION": null,
                "TITLE": null,
                "SUPPER_ID": null,
                "SUPPER_NAME": null,
                "SUPPER_TYPE": null,
                "SUPPER_CONTACT": null,
                "SUPPER_ADDRESS": null,
                "SUPPER_TEL": null,
                "CREATE_TIME": "2018-08-29T00:00:00",
                "CREATE_USER_ID": "admin",
                "MODIFY_USER_ID": null,
                "MODIFY_TIME": null,
                "STATE": 1,
                "sys_updatetime": "2018-08-30T09:39:27.101386Z"
            },
            "P": [{
                "URIGHT_ID": 1,
                "URIGHT_NAME": "工作台",
                "RIGHT_TYPE": null,
                "PARENT_ID": null,
                "LEVEL": 1,
                "ORDER_NO": 0,
                "MODULE_NAME": "home",
                "IS_MENU": false,
                "ICON": "iconfont icon-gongzuotai",
                "BACKGROUND_COLOR": "",
                "FUNC": "pages/home.html",
                "PARAMETER": "",
                "IS_SINGLE": false,
                "MEMO": "",
                "PARENT_NAME": ""
            }, {
                "URIGHT_ID": 5,
                "URIGHT_NAME": "维修",
                "RIGHT_TYPE": null,
                "PARENT_ID": 1,
                "LEVEL": 2,
                "ORDER_NO": 1,
                "MODULE_NAME": "repair",
                "IS_MENU": true,
                "ICON": "iconfont icon-weixiubaoyang",
                "BACKGROUND_COLOR": "#FFBD4D",
                "FUNC": "home/task-main.html",
                "PARAMETER": null,
                "IS_SINGLE": false,
                "MEMO": null,
                "PARENT_NAME": ""
            }, {
                "URIGHT_ID": 6,
                "URIGHT_NAME": "模块2",
                "RIGHT_TYPE": null,
                "PARENT_ID": 1,
                "LEVEL": 2,
                "ORDER_NO": 2,
                "MODULE_NAME": "polling",
                "IS_MENU": true,
                "ICON": "iconfont icon-xunjianguanli",
                "BACKGROUND_COLOR": "#6BA7F0",
                "FUNC": "home/polling/order-detail.html",
                "PARAMETER": null,
                "IS_SINGLE": false,
                "MEMO": null,
                "PARENT_NAME": ""
            }, {
                "URIGHT_ID": 7,
                "URIGHT_NAME": "模块3",
                "RIGHT_TYPE": null,
                "PARENT_ID": 1,
                "LEVEL": 2,
                "ORDER_NO": 3,
                "MODULE_NAME": "maintain",
                "IS_MENU": true,
                "ICON": "iconfont icon-Maintenance",
                "BACKGROUND_COLOR": "#5CBD9C",
                "FUNC": "home/maintain/order-detail.html",
                "PARAMETER": null,
                "IS_SINGLE": false,
                "MEMO": null,
                "PARENT_NAME": ""
            }, {
                "URIGHT_ID": 3,
                "URIGHT_NAME": "我的",
                "RIGHT_TYPE": null,
                "PARENT_ID": null,
                "LEVEL": 1,
                "ORDER_NO": 4,
                "MODULE_NAME": "my",
                "IS_MENU": true,
                "ICON": "iconfont icon-wode",
                "BACKGROUND_COLOR": null,
                "FUNC": "pages/my.html",
                "PARAMETER": null,
                "IS_SINGLE": false,
                "MEMO": null,
                "PARENT_NAME": ""
            }, {
                "URIGHT_ID": 4,
                "URIGHT_NAME": "模块4",
                "RIGHT_TYPE": null,
                "PARENT_ID": 1,
                "LEVEL": 2,
                "ORDER_NO": 4,
                "MODULE_NAME": "alarm",
                "IS_MENU": true,
                "ICON": "iconfont icon-alarm",
                "BACKGROUND_COLOR": "#F27475",
                "FUNC": "home/alarm/order-detail.html",
                "PARAMETER": null,
                "IS_SINGLE": false,
                "MEMO": null,
                "PARENT_NAME": ""
            }],
            "R": true
        }
    };
    //班组菜单权限
    var leaderObj = {
        "StatusCode": 200,
        "Message": null,
        "Data": {
            "U": {
                "USER_ID": "4403006",
                "ORG_CODE": "4403Z01",
                "ORG_NAME": "XX维修项目",
                "DEPT_CODE": "6201X01DEP1",
                "DEP_NAME": "运维二部",
                "DIST_ID": "440300",
                "CODE": "4403006",
                "IS_SYS": false,
                "BUILD_ID": null,
                "ROLE_ID": "U008",
                "UROLE_TYPE": 3,
                "ROLE_NAME": "运维班组",
                "PASSWORD": "e10adc3949ba59abbe56e057f20f883e",
                "GENDER": 1,
                "BIND_PHONE": true,
                "FACE": null,
                "MEMO": null,
                "ADDRESS": null,
                "DUTY_TYPE": null,
                "ACTION_TYPE": "A,B",
                "EMAIL": null,
                "FIX": false,
                "IS_ACC": false,
                "IS_OUT": false,
                "JOB_TYPE": null,
                "NAME": "邹琼俊",
                "PHONE": "15243641131",
                "POSITION": null,
                "TITLE": null,
                "SUPPER_ID": null,
                "SUPPER_NAME": null,
                "SUPPER_TYPE": null,
                "SUPPER_CONTACT": null,
                "SUPPER_ADDRESS": null,
                "SUPPER_TEL": null,
                "CREATE_TIME": "2018-09-18T00:00:00",
                "CREATE_USER_ID": "admin",
                "MODIFY_USER_ID": null,
                "MODIFY_TIME": null,
                "STATE": 1,
                "sys_updatetime": "2018-09-18T18:04:47.433957Z"
            },
            "P": [{
                "URIGHT_ID": 1,
                "URIGHT_NAME": "工作台",
                "RIGHT_TYPE": null,
                "PARENT_ID": null,
                "LEVEL": 1,
                "ORDER_NO": 0,
                "MODULE_NAME": "home",
                "IS_MENU": false,
                "ICON": "iconfont icon-gongzuotai",
                "BACKGROUND_COLOR": "",
                "FUNC": "pages/home.html",
                "PARAMETER": "",
                "IS_SINGLE": false,
                "MEMO": "",
                "PARENT_NAME": ""
            }, {
                "URIGHT_ID": 5,
                "URIGHT_NAME": "维修",
                "RIGHT_TYPE": null,
                "PARENT_ID": 1,
                "LEVEL": 2,
                "ORDER_NO": 1,
                "MODULE_NAME": "repair",
                "IS_MENU": true,
                "ICON": "iconfont icon-weixiubaoyang",
                "BACKGROUND_COLOR": "#FFBD4D",
                "FUNC": "home/task-main.html",
                "PARAMETER": null,
                "IS_SINGLE": false,
                "MEMO": null,
                "PARENT_NAME": ""
            }, {
                "URIGHT_ID": 6,
                "URIGHT_NAME": "模块2",
                "RIGHT_TYPE": null,
                "PARENT_ID": 1,
                "LEVEL": 2,
                "ORDER_NO": 2,
                "MODULE_NAME": "polling",
                "IS_MENU": true,
                "ICON": "iconfont icon-xunjianguanli",
                "BACKGROUND_COLOR": "#6BA7F0",
                "FUNC": "home/polling/order-detail.html",
                "PARAMETER": null,
                "IS_SINGLE": false,
                "MEMO": null,
                "PARENT_NAME": ""
            }, {
                "URIGHT_ID": 7,
                "URIGHT_NAME": "模块3",
                "RIGHT_TYPE": null,
                "PARENT_ID": 1,
                "LEVEL": 2,
                "ORDER_NO": 3,
                "MODULE_NAME": "maintain",
                "IS_MENU": true,
                "ICON": "iconfont icon-Maintenance",
                "BACKGROUND_COLOR": "#5CBD9C",
                "FUNC": "home/maintain/order-detail.html",
                "PARAMETER": null,
                "IS_SINGLE": false,
                "MEMO": null,
                "PARENT_NAME": ""
            }, {
                "URIGHT_ID": 4,
                "URIGHT_NAME": "模块4",
                "RIGHT_TYPE": null,
                "PARENT_ID": 1,
                "LEVEL": 2,
                "ORDER_NO": 4,
                "MODULE_NAME": "alarm",
                "IS_MENU": true,
                "ICON": "iconfont icon-alarm",
                "BACKGROUND_COLOR": "#F27475",
                "FUNC": "home/alarm/order-detail.html",
                "PARAMETER": null,
                "IS_SINGLE": false,
                "MEMO": null,
                "PARENT_NAME": ""
            }, {
                "URIGHT_ID": 3,
                "URIGHT_NAME": "我的",
                "RIGHT_TYPE": null,
                "PARENT_ID": null,
                "LEVEL": 1,
                "ORDER_NO": 4,
                "MODULE_NAME": "my",
                "IS_MENU": true,
                "ICON": "iconfont icon-wode",
                "BACKGROUND_COLOR": null,
                "FUNC": "pages/my.html",
                "PARAMETER": null,
                "IS_SINGLE": false,
                "MEMO": null,
                "PARENT_NAME": ""
            }],
            "R": true
        }
    };
    //维修人员菜单权限
    var repairmanObj = {
        "StatusCode": 200,
        "Message": null,
        "Data": {
            "U": {
                "USER_ID": "4403007",
                "ORG_CODE": "4403Z01",
                "ORG_NAME": "XX维修项目",
                "DEPT_CODE": "6201X01DEP1",
                "DEP_NAME": "运维二部",
                "DIST_ID": "440300",
                "CODE": "GZDT02",
                "IS_SYS": false,
                "BUILD_ID": null,
                "ROLE_ID": "U009",
                "UROLE_TYPE": 3,
                "ROLE_NAME": "维修人员",
                "PASSWORD": "e10adc3949ba59abbe56e057f20f883e",
                "GENDER": 1,
                "BIND_PHONE": true,
                "FACE": null,
                "MEMO": null,
                "ADDRESS": null,
                "DUTY_TYPE": null,
                "ACTION_TYPE": "-1,A",
                "EMAIL": null,
                "FIX": false,
                "IS_ACC": false,
                "IS_OUT": false,
                "JOB_TYPE": "D",
                "NAME": "邹玉杰",
                "PHONE": "13249838330",
                "POSITION": null,
                "TITLE": null,
                "SUPPER_ID": null,
                "SUPPER_NAME": null,
                "SUPPER_TYPE": null,
                "SUPPER_CONTACT": null,
                "SUPPER_ADDRESS": null,
                "SUPPER_TEL": null,
                "CREATE_TIME": "2018-09-18T00:00:00",
                "CREATE_USER_ID": "admin",
                "MODIFY_USER_ID": null,
                "MODIFY_TIME": null,
                "STATE": 1,
                "sys_updatetime": "2018-09-18T18:05:13.008656Z"
            },
            "P": [{
                "URIGHT_ID": 2,
                "URIGHT_NAME": "工作台",
                "RIGHT_TYPE": null,
                "PARENT_ID": null,
                "LEVEL": 1,
                "ORDER_NO": 0,
                "MODULE_NAME": "action-home",
                "IS_MENU": true,
                "ICON": "iconfont icon-gongzuotai",
                "BACKGROUND_COLOR": null,
                "FUNC": "pages/action-home.html",
                "PARAMETER": null,
                "IS_SINGLE": false,
                "MEMO": "执行人员",
                "PARENT_NAME": ""
            }, {
                "URIGHT_ID": 17,
                "URIGHT_NAME": "维修",
                "RIGHT_TYPE": null,
                "PARENT_ID": 2,
                "LEVEL": 2,
                "ORDER_NO": 1,
                "MODULE_NAME": "repair",
                "IS_MENU": true,
                "ICON": "iconfont icon-weixiubaoyang",
                "BACKGROUND_COLOR": "#FFBD4D",
                "FUNC": "home/task-main.html",
                "PARAMETER": null,
                "IS_SINGLE": false,
                "MEMO": null,
                "PARENT_NAME": ""
            }, {
                "URIGHT_ID": 18,
                "URIGHT_NAME": "模块2",
                "RIGHT_TYPE": null,
                "PARENT_ID": 2,
                "LEVEL": 2,
                "ORDER_NO": 2,
                "MODULE_NAME": "polling",
                "IS_MENU": true,
                "ICON": "iconfont icon-xunjianguanli",
                "BACKGROUND_COLOR": "#6BA7F0",
                "FUNC": "home/polling/order-detail.html",
                "PARAMETER": null,
                "IS_SINGLE": false,
                "MEMO": null,
                "PARENT_NAME": ""
            }, {
                "URIGHT_ID": 19,
                "URIGHT_NAME": "模块3",
                "RIGHT_TYPE": null,
                "PARENT_ID": 2,
                "LEVEL": 2,
                "ORDER_NO": 3,
                "MODULE_NAME": "maintain",
                "IS_MENU": true,
                "ICON": "iconfont icon-Maintenance",
                "BACKGROUND_COLOR": "#5CBD9C",
                "FUNC": "home/maintain/order-detail.html",
                "PARAMETER": null,
                "IS_SINGLE": false,
                "MEMO": null,
                "PARENT_NAME": ""
            }, {
                "URIGHT_ID": 3,
                "URIGHT_NAME": "我的",
                "RIGHT_TYPE": null,
                "PARENT_ID": null,
                "LEVEL": 1,
                "ORDER_NO": 4,
                "MODULE_NAME": "my",
                "IS_MENU": true,
                "ICON": "iconfont icon-wode",
                "BACKGROUND_COLOR": null,
                "FUNC": "pages/my.html",
                "PARAMETER": null,
                "IS_SINGLE": false,
                "MEMO": null,
                "PARENT_NAME": ""
            }],
            "R": true
        }
    };
    //报修人员菜单权限
    var customerObj = {
        "StatusCode": 200,
        "Message": null,
        "Data": {
            "U": {
                "USER_ID": "4403010",
                "ORG_CODE": "4403Z01",
                "ORG_NAME": "XX维修项目",
                "DEPT_CODE": "ZHJD",
                "DEP_NAME": "事业部",
                "DIST_ID": "440300",
                "CODE": "4403010",
                "IS_SYS": false,
                "BUILD_ID": null,
                "ROLE_ID": "U011",
                "UROLE_TYPE": 4,
                "ROLE_NAME": "报修人员",
                "PASSWORD": "e10adc3949ba59abbe56e057f20f883e",
                "GENDER": 1,
                "BIND_PHONE": true,
                "FACE": "APP,4125e757-484c-4a62-b9b9-21aed6f0f037",
                "MEMO": null,
                "ADDRESS": null,
                "DUTY_TYPE": null,
                "ACTION_TYPE": null,
                "EMAIL": null,
                "FIX": false,
                "IS_ACC": false,
                "IS_OUT": false,
                "JOB_TYPE": null,
                "NAME": "报修人A",
                "PHONE": "15243641131",
                "POSITION": null,
                "TITLE": null,
                "SUPPER_ID": null,
                "SUPPER_NAME": null,
                "SUPPER_TYPE": null,
                "SUPPER_CONTACT": null,
                "SUPPER_ADDRESS": null,
                "SUPPER_TEL": null,
                "CREATE_TIME": "2018-10-11T00:00:00",
                "CREATE_USER_ID": "admin",
                "MODIFY_USER_ID": null,
                "MODIFY_TIME": null,
                "STATE": 1,
                "sys_updatetime": "2018-10-11T17:20:19.49005Z"
            },
            "P": [{
                "URIGHT_ID": 10,
                "URIGHT_NAME": "维修",
                "RIGHT_TYPE": null,
                "PARENT_ID": null,
                "LEVEL": 1,
                "ORDER_NO": 1,
                "MODULE_NAME": "repair-home",
                "IS_MENU": true,
                "ICON": "iconfont icon-weixiubaoyang",
                "BACKGROUND_COLOR": null,
                "FUNC": "pages/repair-home.html",
                "PARAMETER": null,
                "IS_SINGLE": false,
                "MEMO": "报修人员",
                "PARENT_NAME": ""
            }, {
                "URIGHT_ID": 11,
                "URIGHT_NAME": "我的",
                "RIGHT_TYPE": null,
                "PARENT_ID": null,
                "LEVEL": 1,
                "ORDER_NO": 2,
                "MODULE_NAME": "repair-my",
                "IS_MENU": true,
                "ICON": "iconfont icon-wode",
                "BACKGROUND_COLOR": null,
                "FUNC": "pages/repair-my.html",
                "PARAMETER": null,
                "IS_SINGLE": false,
                "MEMO": "报修人员",
                "PARENT_NAME": ""
            }],
            "R": true
        }
    };
    var loginUrlErrorObj = {
        "StatusCode": 200,
        "Message": null,
        "Data": {
            "U": {
                "USER_ID": null,
                "ORG_CODE": null,
                "ORG_NAME": null,
                "DEPT_CODE": null,
                "DEP_NAME": null,
                "DIST_ID": null,
                "CODE": null,
                "IS_SYS": null,
                "BUILD_ID": null,
                "ROLE_ID": null,
                "UROLE_TYPE": 0,
                "ROLE_NAME": null,
                "PASSWORD": null,
                "GENDER": null,
                "BIND_PHONE": null,
                "FACE": null,
                "MEMO": null,
                "ADDRESS": null,
                "DUTY_TYPE": null,
                "ACTION_TYPE": null,
                "EMAIL": null,
                "FIX": null,
                "IS_ACC": null,
                "IS_OUT": null,
                "JOB_TYPE": null,
                "NAME": null,
                "PHONE": null,
                "POSITION": null,
                "TITLE": null,
                "SUPPER_ID": null,
                "SUPPER_NAME": null,
                "SUPPER_TYPE": null,
                "SUPPER_CONTACT": null,
                "SUPPER_ADDRESS": null,
                "SUPPER_TEL": null,
                "CREATE_TIME": "0001-01-01T00:00:00",
                "CREATE_USER_ID": null,
                "MODIFY_USER_ID": null,
                "MODIFY_TIME": null,
                "STATE": null,
                "sys_updatetime": "0001-01-01T00:00:00"
            },
            "P": [],
            "R": false
        }
    }
    var GetBuildsPageData = {
        "StatusCode": 200,
        "Message": null,
        "Data": {
            "Total": 503,
            "List": [{
                "BUILD_ID": "440300A002",
                "BUILD_NAME": "深圳投资大厦",
                "DIST_ID": "440304",
                "org_code": "4403Z01",
                "OWNER": "test",
                "MANAGER": "st",
                "ADDRESS": "深圳市福田区深南大道  [4009]号",
                "BUILD_YEAR": 2008,
                "FLOOR_SUM": null,
                "BUILD_TYPE": "D",
                "UP_FLOOR": null,
                "DOWN_FLOOR": null,
                "COORDINATE": "fsssssssssssssss",
                "FLOOR_HEIGHT": null,
                "TOTAL_HEIGHT": 0,
                "TOTAL_AREA": 6312,
                "AIR_AREA": 45726,
                "HEAT_AREA": 105,
                "AIR_TYPE": "A",
                "HEAT_TYPE": "A",
                "BUILD_COEFF": null,
                "STRUC_TYPE": "G",
                "WALL_MAT_TYPE": "B",
                "WALL_WARM_TYPE": "B",
                "ROOWARM_TYPE": "A",
                "WINDOW_TYPE": "A",
                "GLASS_TYPE": "A",
                "WIN_FRAME_TYPE": "A",
                "STATE": 1,
                "CREATE_TIME": "2018-01-03T14:00:00",
                "CREATE_USER_ID": "admin",
                "MODIFY_TIME": "2018-09-19T11:17:05",
                "MODIFY_USER_ID": "qyyy1",
                "BUILD_NATURE": "B",
                "BUILD_MONITOR_TYPE": null,
                "DIST_NAME": "福田区",
                "CONTACT": "周泽礵",
                "TEL": "13249838330",
                "EMAIL": null,
                "OPCS_URL": null,
                "OPEN_TIME": null,
                "CLOSE_TIME": null,
                "USED_CONTROL": false,
                "OPCS_USERNAME": null,
                "OPCS_PASSWORD": null,
                "OPCS_CERT": null,
                "OPCS_WRITE": null,
                "OPCS_REFRESH": null,
                "BUILD_TYPE_NAME": "文化教育建筑",
                "ONLINE_TIME": null,
                "MONITOR_MODE_SET": null,
                "ELEC_PRICE": null,
                "WATER_PRICE": null,
                "DAQ_INTERVAL": 15,
                "OPC_OPCTION_WCF_URL": null,
                "MH_OPCS_URL": null,
                "PROJECT_TYPE": null,
                "MARK_TYPE": null,
                "FA": null,
                "FB": null,
                "FC": null,
                "MARK_SUB": null,
                "POWER_MAIN_SUB": null,
                "POWER_CHILD_SUB": null,
                "HOUR_MAIN_SUB": null,
                "HOUR_CHILD_SUB": null,
                "PARA_SOURCE": null,
                "STAND_BEGIN": null,
                "STAND_END": null,
                "MATLAB_TYPE": null,
                "HOLIDAY_PARA": null,
                "ENERGY_RANK_TYPE": null,
                "MONITOR_TYPE": null,
                "MONITOR_LEFT_VISIBLE": null,
                "HOME_SOURCE": null,
                "FKQUOTA_SET": 1,
                "COLLECTOR_ADDRESS": null
            }, {
                "BUILD_ID": "440300A003",
                "BUILD_NAME": "鼎城国际大厦",
                "DIST_ID": "440304",
                "org_code": "4403Z01",
                "OWNER": null,
                "MANAGER": null,
                "ADDRESS": "深圳市福田区振华路9号",
                "BUILD_YEAR": 0,
                "FLOOR_SUM": null,
                "BUILD_TYPE": "A",
                "UP_FLOOR": null,
                "DOWN_FLOOR": null,
                "COORDINATE": null,
                "FLOOR_HEIGHT": null,
                "TOTAL_HEIGHT": 0,
                "TOTAL_AREA": 85137,
                "AIR_AREA": 85137,
                "HEAT_AREA": null,
                "AIR_TYPE": "C",
                "HEAT_TYPE": "A",
                "BUILD_COEFF": null,
                "STRUC_TYPE": "A",
                "WALL_MAT_TYPE": "A",
                "WALL_WARM_TYPE": "A",
                "ROOWARM_TYPE": "A",
                "WINDOW_TYPE": "A",
                "GLASS_TYPE": "A",
                "WIN_FRAME_TYPE": "A",
                "STATE": 1,
                "CREATE_TIME": "2018-01-03T14:00:00",
                "CREATE_USER_ID": "admin",
                "MODIFY_TIME": "2018-09-17T12:18:39",
                "MODIFY_USER_ID": "qyyy1",
                "BUILD_NATURE": "A",
                "BUILD_MONITOR_TYPE": null,
                "DIST_NAME": "福田区",
                "CONTACT": null,
                "TEL": null,
                "EMAIL": null,
                "OPCS_URL": null,
                "OPEN_TIME": null,
                "CLOSE_TIME": null,
                "USED_CONTROL": false,
                "OPCS_USERNAME": null,
                "OPCS_PASSWORD": null,
                "OPCS_CERT": null,
                "OPCS_WRITE": null,
                "OPCS_REFRESH": null,
                "BUILD_TYPE_NAME": "办公及写字楼建筑",
                "ONLINE_TIME": null,
                "MONITOR_MODE_SET": null,
                "ELEC_PRICE": null,
                "WATER_PRICE": null,
                "DAQ_INTERVAL": 15,
                "OPC_OPCTION_WCF_URL": null,
                "MH_OPCS_URL": null,
                "PROJECT_TYPE": null,
                "MARK_TYPE": null,
                "FA": null,
                "FB": null,
                "FC": null,
                "MARK_SUB": null,
                "POWER_MAIN_SUB": null,
                "POWER_CHILD_SUB": null,
                "HOUR_MAIN_SUB": null,
                "HOUR_CHILD_SUB": null,
                "PARA_SOURCE": null,
                "STAND_BEGIN": null,
                "STAND_END": null,
                "MATLAB_TYPE": null,
                "HOLIDAY_PARA": null,
                "ENERGY_RANK_TYPE": null,
                "MONITOR_TYPE": null,
                "MONITOR_LEFT_VISIBLE": null,
                "HOME_SOURCE": null,
                "FKQUOTA_SET": 1,
                "COLLECTOR_ADDRESS": "2楼储物间"
            }]
        }
    };
    /*------------------------------用户登录权限end-------------------------------------*/
    //登录
    Mock.mock(config.loginUrl, null, function (options) {
        console.log('options.body:' + options.body)
        var _body = JSON.parse(options.body);
        var userid = _body.USER_ID;
        var result = null;
        if (_body.PASSWORD != 'e10adc3949ba59abbe56e057f20f883e') { //密码不等于123456
            return loginUrlErrorObj;
        }
        if (userid == '4403001') { //项目经理
            result = pmObj;
        } else if (userid == '4403006') { //班组
            result = leaderObj;
        } else if (userid == '4403007') { //维修人员
            result = repairmanObj;
        } else if (userid == '4403010') { //报修人员
            result = customerObj;
        }
        else {
            result = loginUrlErrorObj;
        }
        return result;
    });
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
    Mock.mock(config.AddRepairBill, null, function (options) {
        var _body = JSON.parse(options.body);
        var no = newGuid();
        console.log('no:' + no)
        let obj = {
            "NO": no,
            "ORG_CODE": _body.ORG_CODE,
            "EQT_WORK_ID": "0",
            "IS_URGENCY": _body.IS_URGENCY,
            "STATE": _body.STATE,
            "REPORT_USER_CODE": _body.REPORT_USER_CODE,
            "CREATE_USER_ID": _body.CREATE_USER_ID,
            "REPORT_USER_NAME": _body.REPORT_USER_NAME,
            "REPORT_ROLE_ID": _body.REPORT_ROLE_ID,
            "PHONE": _body.PHONE,
            "DEPT_CODE": _body.DEPT_CODE,
            "FAULT_INFO": _body.FAULT_INFO,
            "ADDRESS": _body.ADDRESS,
            "SOURCE": "C",
            "FAULT_TYPE": _body.FAULT_TYPE,
            "LABOR_COST": 0,
            "PART_COST": 0,
            "SUMMARY": null,
            "RECEIVE_TYPE": 0,
            "BOOK_TIME": null,
            "EQ_ID": null,
            "EQP_NAME": null,
            "ACCEPT_USER_ID": "1",
            "SIGN_TIME": null,
            "ACCEPT_TIME": null,
            "DISPATCH_USER_ID": null,
            "FINISH_SIGN": null,
            "FINISH_TIME": null,
            "FINISH_INFO": null,
            "DISPATCH_TIME": null,
            "NEED_HELP": false,
            "NEED_DISPATCH": false,
            "HELP_SEND_USER_ID": null,
            "HELP_SEND_TIME": null,
            "CONFIRM_USER_ID": null,
            "CONFIRM_TIME": null,
            "CONFIRM_STATUS": 0,
            "CONFIRM_SIGN": null,
            "REPORT_TIME": _body.REPORT_TIME,
            "PRESS_NUM": 0,
            "PRESS_FIRST_TIME": "2018-10-11T15:40:40",
            "PRESS_LAST_TIME": "2018-10-11T15:40:40",
            "MEMO": null,
            "DEPT_CODE_NAME": "",
            "FAULT_NAME": getNamebyTypeId(_body.FAULT_TYPE),
            "REPAIR_USER_NAME": null,
            "REPAIR_DEPT_NAME": null,
            "MONEY": 2,
            "HOURS": 1,
            "IS_WAITING": 0,
            "OTHER_DEV_NAME": null,
            "BUILD_ID": _body.BUILD_ID,
            "LIMIT_TIME": _body.LIMIT_TIME || null,
            "BUILD_NAME": _body.BUILD_NAME,
            "DIST_ID": "440303",
            "IsOverTime": 0,
            "sys_updatetime": new Date().toLocaleString()
        };
        console.log('obj:' + JSON.stringify(obj))
        _database.add('tb_repairbill_g', [obj], function (res) {
            console.log("添加维修工单：" + res);//成功
        });
        //添加跟踪记录
        let billExecute = {
            "ID": newGuid(),
            "createdate": "",
            "BILL_NO": no,
            "BUSINESS_TYPE": "R",
            "STATE": 'A',
            "CREATE_USER_ID": _body.CREATE_USER_ID,
            "CREATE_TIME": _body.REPORT_TIME,
            "RESULT": "提交报修单",
            "MESSAGE": null,
            "CREATE_TIMEStr": _body.REPORT_TIME,
            "STATE_Text": g.getStatusNameById('A'),
            "UserName": _body.REPORT_USER_NAME,
            "RoleName": null,
            "OpeType": null,
            "sys_updatetime": "0001-01-01T00:00:00"
        }
        addBillExecute(billExecute);
        return { "StatusCode": 200, "Message": null, "Data": no };
    });
    //添加工单图片 tb_billfile_g
    Mock.mock(config.AddBillFile, null, function (options) {
        //{"BILL_NO":"W4403Z01181012001","BUSINESS_TYPE":"R","SUB_TYPE":"A","FILENAME":"F_SMP-20181012134401868P81008-122534.jpg","FILE_PATH":"c960ba12-cf85-41c3-860f-4aa1249b7898","CREATE_USER_ID":"4403006","CREATE_TIME":"2018-10-12T05:45:57.644Z"}
        var _body = JSON.parse(options.body);
        _database.add('tb_billfile_g', [_body], function (res) {
            console.log("添加工单图片：" + res);//成功
        }, true);
        return { "StatusCode": 200, "Message": null, "Data": 1 };
    });
    //建筑数据列表 GetBuildsPage
    Mock.mock(config.GetBuildsPage, GetBuildsPageData);
}
