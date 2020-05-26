﻿if (config.isMock) {
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
}