/**
 * 全局函数
 * @param {Object} $ ： mui
 * @param {Object} owner：g
 */
(function ($, owner) {
    /**
*  简单封装了绘制原生view控件的方法
*  绘制内容支持font（文本，字体图标）,图片img , 矩形区域rect
*/
    owner.drawNative = function (id, styles, tags) {
        var view = new plus.nativeObj.View(id, styles, tags);
        return view;
    },
    /**
     * 根据id获取dom
     * @param {Object} id
     */
    owner.id = function (id) {
        return document.getElementById(id);
    }
    /**
 * 打开新页面
 * @param {Object} jsonData
 */
    owner.openWindow = function (jsonData) {
        mui.openWindow({
            url: jsonData.url,
            id: jsonData.id,
            extras: jsonData.extras || {},
            styles: jsonData.styles || {},
            show: jsonData.show || {},
            waiting: jsonData.waiting || {}
        });
    }
    //打开新页面（H5+)
    owner.openWindowWithTitle = function (WebviewOptions, title) {
        var _styles = {                             // 窗口参数 参考5+规范中的WebviewStyle,也就是说WebviewStyle下的参数都可以在此设置
            titleNView: {                       // 窗口的标题栏控件
                titleText: title,                // 标题栏文字,当不设置此属性时，默认加载当前页面的标题，并自动更新页面的标题
                titleColor: "#fff",             // 字体颜色,颜色值格式为"#RRGGBB",默认值为"#000000"
                titleSize: "17px",                 // 字体大小,默认17px
                backgroundColor: "#449DED",        // 控件背景颜色,颜色值格式为"#RRGGBB",默认值为"#F7F7F7"
                progress: {                        // 标题栏控件的进度条样式
                    color: "#56CF87",                // 进度条颜色,默认值为"#00FF00"  
                    height: "2px"                    // 进度条高度,默认值为"2px"         
                },
                splitLine: {                       // 标题栏控件的底部分割线，类似borderBottom
                    color: "#CCCCCC",                // 分割线颜色,默认值为"#CCCCCC"  
                    height: "0px"                    // 分割线高度,默认值为"2px"
                },
                autoBackButton: true
            },
        };
        WebviewOptions.styles = _styles;
        mui.openWindow(WebviewOptions);
    }
   /**
   * 获取网络状态
   */
    owner.getNetStatus = function () {
        if (window.plus) {
            var ret = true;
            //获取当前网络类型
            var nt = plus.networkinfo.getCurrentType();
            switch (nt) {
                case plus.networkinfo.CONNECTION_ETHERNET:
                case plus.networkinfo.CONNECTION_WIFI:
                    //console.log("当前网络为WiFi");
                    ret = true;
                    break;
                case plus.networkinfo.CONNECTION_CELL2G:
                case plus.networkinfo.CONNECTION_CELL3G:
                case plus.networkinfo.CONNECTION_CELL4G:
                    //console.log("当前网络非WiFi");
                    ret = true;
                    break;
                default:
                    //console.log("当前没有网络");
                    ret = false;
                    break;
            }
            //if (ret != undefined && ret == false) {
            //    mui.toast("网络异常，请检查网络设置！");
            //}
            return ret;
        } else {
            return false;
        }
    }
    /*
    * 退出登录
    */
    owner.logout = function () {
        localStorage.removeItem('$loginstate');////console.log('退出')
        mui.plusReady(function () {
            plus.runtime.restart();
        })
    }
    //获取本地存储值(key)
    owner.getItem = function (k) {
        var jsonStr = window.localStorage.getItem(k.toString());
        return jsonStr ? JSON.parse(jsonStr).data : null;
    }
    //设置本地存储值（key,value)
    owner.setItem = function (k, value) {
        value = JSON.stringify({
            data: value
        });
        k = k.toString();
        localStorage.setItem(k, value);
    }
    /**
    * 设置菜单本地配置
    **/
    owner.setMenus = function (menus) {
        //g.setItem('$menus', menus);
        menus = JSON.stringify({
            data: menus
        });
        plus.storage.setItem('$menus', menus);
    }
    /**
	 * 获取菜单本地配置
	 **/
    owner.getMenus = function () {
        //return g.getItem('$menus');
        var jsonStr = plus.storage.getItem('$menus');
        return jsonStr ? JSON.parse(jsonStr).data : null;
    }
    //获取登录用户信息实体
    owner.getUserInfo = function () {
        return g.getItem('$userinfo'); // || {};
    }
    /**
	 * 显示等待框
	 * @param {Object} watingPrompt
	 */
    owner.showWaiting = function (watingPrompt) {
        mui.plusReady(function () {
            plus.nativeUI.showWaiting(watingPrompt);
        });
    }
    /**
	 * 关闭等待框
	 */
    owner.closeWaiting = function () {
        mui.plusReady(function () {
            plus.nativeUI.closeWaiting();
        });
    }
    //ajax请求（url地址，json对象）
    owner.ajax = function (url, jsonData) {
        console.log('ajax调用开始' + url)
        if (jsonData.type == undefined) {
            jsonData.type = 'post';
        }
        console.log('where:' + JSON.stringify(jsonData.data));
        var _uuid = config.uuid;
        mui.ajax(url, {
            async: jsonData.async || true,
            data: jsonData.data,
            dataType: 'json', //服务器返回json格式数据
            type: jsonData.type, //HTTP请求类型
            timeout: 20000, //超时时间设置为10秒；
            //'Content-type': 'text/plain; charset=utf-8',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                "USER_APP_ID": _uuid
            },
            beforeSend: function () {
                if (jsonData.mask) {
                    jsonData.mask.show(); //显示遮罩层
                }
            },
            complete: function () {
                if (jsonData.nwaiting) {
                    jsonData.nwaiting.close();
                    g.closeWaiting();
                }
                if (jsonData.isShowing) {

                } else {
                    g.closeWaiting();
                }
                if (jsonData.mask) {
                    jsonData.mask.close(); //关闭遮罩层
                }
            },
            success: jsonData.success,
            error: function (xhr, type, errorThrown) {
                var btn = document.getElementById("btnSubmit");
                if (btn) {
                    btn.disabled = false;
                }
                if (jsonData.nwaiting) {
                    jsonData.nwaiting.close();
                }
                if (jsonData.error) {
                    jsonData.error();
                    if (g.getNetStatus() == false) {
                        mui.toast('网络异常,请稍候再试');
                        return;
                    }
                }
                if (!g.getNetStatus()) {
                    return;
                }
                var _msg = '';
                try {
                    if (xhr.response != null && JSON.parse(xhr.response) != null) {
                        _msg = JSON.parse(xhr.response).Message;
                    }
                } catch (e) {
                    mui.toast(e);
                }
                if (xhr.status == 400) {
                    mui.toast(_msg);
                }
                else if (xhr.status == 403) {
                    mui.toast(_msg);
                    if (url == config.QueryMaintainResultById || url == config.QueryCheckResultById) {
                        setTimeout(function () {
                            old_back();
                        }, 3000);
                    }
                }
                if (_msg == '无效用户') {//自动退出登录
                    g.logout();
                }
            }
        });
    }
    //获取列表条码数
    owner.getCount = function (menus, fun) {
        if (config.isMock) {
            var _database = new smpWebSql();
            _database.counts('tb_repairbill_g', "where STATE<>'E'", function (res) {
                var data = {
                    "StatusCode": 200,
                    "Message": null,
                    "Data": {
                        "cCount": 0,
                        "mCount": 0,
                        "rCount": res,
                        allCount: 0 + 0 + res,
                        "cRob": false,
                        "mRob": false,
                        "rRob": true
                    }
                };
                if (data.StatusCode == '200' && data.Data) {
                    for (var i = 0; i < menus.length; i++) {
                        if (menus[i].name == TaskType.repair.value) {
                            menus[i].taskNum = data.Data.rCount;
                            menus[i].rad = data.Data.rRob;
                        } else
                            if (menus[i].name == TaskType.polling.value) {
                                menus[i].taskNum = data.Data.cCount;
                                menus[i].rad = data.Data.cRob;
                            } else
                                if (menus[i].name == TaskType.maintain.value) {
                                    menus[i].taskNum = data.Data.mCount;
                                    menus[i].rad = data.Data.mRob;
                                }
                    }
                    localStorage.setItem('$EXE_COUNT', JSON.stringify(data.Data));
                    if (fun != '') {
                        fun(data.Data.allCount);
                    }
                    return menus;
                } else {
                    mui.toast(data.Message);
                }
            });
        } else {
            g.ajax(config.BillWorkbench, {
                data: {
                    orgCode: config.ORG_CODE,
                    userId: config.USER_ID
                },
                success: function (data) {
                    if (data.StatusCode == '200' && data.Data) {
                        console.log('BillWorkbench:' + JSON.stringify(data))
                        for (var i = 0; i < menus.length; i++) {
                            if (menus[i].name == TaskType.repair.value) {
                                menus[i].taskNum = data.Data.rCount;
                                menus[i].rad = data.Data.rRob;
                            } else
                                if (menus[i].name == TaskType.polling.value) {
                                    menus[i].taskNum = data.Data.cCount;
                                    menus[i].rad = data.Data.cRob;
                                } else
                                    if (menus[i].name == TaskType.maintain.value) {
                                        menus[i].taskNum = data.Data.mCount;
                                        menus[i].rad = data.Data.mRob;
                                    }
                        }
                        localStorage.setItem('$EXE_COUNT', JSON.stringify(data.Data));
                        //console.log('getCount0:' + JSON.stringify(menus));
                        if (fun != '') {
                            fun(data.Data.allCount);
                        }
                        return menus;
                    } else {
                        mui.toast(data.Message);
                    }
                }, error: function () {
                    if (fun) {
                        fun();
                    }
                }
            })
        }
        /* //console.log('getCount:' + e);
     }
     //console.log('getCount1:' + JSON.stringify(menus));*/
        return menus;
    }
    //订单生成时的初始化状态名称
    owner.getOrderInitStatusText = function () {
        var txt = '';
        var roleType = g.AppRoleType;
        //console.log('roleType:' + roleType)
        switch (roleType) {
            case comm.repairman: //运维人员
            case comm.leader: //班组
                txt = '待抢单';
                break;
            case comm.customer:
                txt = '待接受';
                break;
            case comm.pm:
                txt = '待派工';
                break;
            default:
                txt = '待抢单';
                break;
        }
        ////console.log('角色ID:' + roleid)
        return txt;
    }
    /**
 * 获得屏幕的高度
 * @param {Object} element
 */
    owner.getScreenInfo = function (element) {
        if (element == 'width') {
            return document.documentElement.clientWidth || document.body.clientWidth;
        } else {
            return document.documentElement.clientHeight || document.body.clientHeigth;
        }
    }
    //初始化区域滚动
    owner.initScroll = function (options) {
        options = options || {};
        var deceleration = mui.os.ios ? 0.003 : 0.0009; //阻尼系数
        if (options.id == undefined) {
            var _mui_scroll_wrapper = document.querySelector('.mui-scroll-wrapper');
            if (_mui_scroll_wrapper == undefined || _mui_scroll_wrapper == null) {
                return;
            }
            var _h = _mui_scroll_wrapper.style.height;
            _mui_scroll_wrapper.style.height = options.h || (_h == 0 ? '200px' : _h);
            mui('.mui-scroll-wrapper').scroll({
                bounce: false,
                indicators: true, //是否显示滚动条
                deceleration: deceleration
            });
        } else {
            var _dom = document.querySelector("#" + options.id);
            var _h = _dom == undefined || _dom == null ? 0 : _dom.style.height;
            document.querySelector("#" + options.id).style.height = options.h || (_h == 0 ? '200px' : _h);
            mui("#" + options.id).scroll({
                bounce: false,
                indicators: true, //是否显示滚动条
                deceleration: deceleration
            });
        }
    }
    function pad2(n) {
        return n < 10 ? '0' + n : n
    }
    /**
	 * 获得当前时间 格式：yyyyMMddHHmmss毫秒
	 */
    owner.getCurrentTimeFormat = function () {
        var oDate = new Date();
        return oDate.getFullYear().toString() + pad2(oDate.getMonth() + 1) + pad2(oDate.getDate()) + pad2(oDate.getHours()) + pad2(oDate.getMinutes()) + pad2(oDate.getSeconds()) + oDate.getMilliseconds().toString();
    }
    //日期格式化处理
    owner.formatDate = function (value, type) {
        ////console.log('formatDate;' + value);
        if (value == undefined || value == null || value == 'null') {
            return '';
        }

        var dataTime = "";
        var date;
        if (!value) {
            return dataTime;
        }
        else if (value == 'D') {
            date = new Date();
        }
        else if (value.toString().indexOf('T') >= 0) {
            value = value.toString().replace('T', ' ');
            date = new Date(value);
        } else {
            date = new Date(value);
        }
        if (date.toString() == 'Invalid Date') {
            if (type == 'YMDHMS') {
                return value;
            }
            else if (type == 'YMDHM') {
                //console.log(type + ':' + value.split(':')[0] + value.split(':')[1]);
                return value.split(':')[0] + ':' + value.split(':')[1];
            }
            else if (type == 'YMD') {
                return value.split(' ')[0];
            }
        }
        ////console.log('data:' + value + ',' + date);
        var year = date.getFullYear();
        var month = addZero(parseInt(date.getMonth()) + 1);
        var day = addZero(date.getDate());
        var hour = addZero(date.getHours());//getUTCHours
        var minute = addZero(date.getMinutes());
        var second = addZero(date.getSeconds());

        if (type == "YMD") {
            dataTime = year + "-" + month + "-" + day;
        } else if (type == "YMDHMS") {
            dataTime = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
        } else if (type == "YMDHM") {
            dataTime = year + "-" + month + "-" + day + " " + hour + ":" + minute;
        }
        else if (type == "HMS") {
            dataTime = hour + ":" + minute + ":" + second;
        } else if (type == "YM") {
            dataTime = year + "-" + month;
        } else if (type == "MD") {
            dataTime = month + "-" + day;
        }
        ////console.log('dataTime;' + dataTime);
        return dataTime;
    }
    function addZero(val) {
        if (val < 10) {
            return "0" + val;
        } else {
            return val;
        }
    }
    /**
 * 根据状态ID获取状态名称
 * @param {string} id
 */
    owner.getStatusNameById = function (id, isRepair) {
        var name = '';
        switch (id) {
            case WorkOrderStatus.waitOrder.value:
                name = g.getOrderInitStatusText(); // WorkOrderStatus.waitOrder.text;
                break;
            case WorkOrderStatus.waitSignin.value:
                name = WorkOrderStatus.waitSignin.text;
                break;
            case WorkOrderStatus.waitOver.value:
                name = WorkOrderStatus.waitOver.text;
                break;
            case WorkOrderStatus.waitAudit.value:
                name = WorkOrderStatus.waitAudit.text;
                break;
            case WorkOrderStatus.Over.value:
                name = WorkOrderStatus.Over.text;
                break;
            case WorkOrderStatus.Revoke.value:
                name = WorkOrderStatus.Revoke.text;
                break;

            default:
                name = '';
                break;
        }
        return name;
    }
    owner.AppRoleType = localStorage.getItem('$appRoleType');
    //订单生成时的初始化状态名称
    owner.getOrderInitStatusText = function () {
        var txt = '';
        var roleType = g.AppRoleType;
        //console.log('roleType:' + roleType)
        switch (roleType) {
            case comm.repairman: //运维人员
            case comm.leader: //班组
                txt = '待抢单';
                break;
            case comm.customer:
                txt = '待接受';
                break;
            case comm.pm:
                txt = '待派工';
                break;
            default:
                txt = '待抢单';
                break;
        }
        ////console.log('角色ID:' + roleid)
        return txt;
    }
    //初始化下拉刷新
    owner.pullRefreshInit = function (jsonData) {
        var id = jsonData.id || '#pullrefresh';
        mui.init({
            pullRefresh: {
                container: id,
                down: { //下拉刷新
                    style: 'circle',
                    offset: '0px',
                    //auto: true,//可选,默认false.自动下拉刷新一次
                    callback: jsonData.pulldownRefresh
                },
                up: { //上拉加载
                    //auto:true,
                    //height: 100, //可选.默认50.触发上拉加载拖动距离
                    callback: jsonData.pullupRefresh
                }
            }
        });
    }
}(mui, window.g = window.g || {}));
/**
 * ------------------------------------------------菜单权限----------------------------------------
 */
var defaultInfo = '监控运行状态';
(function (m) {
    function getSmpMenus() {
        return g.getMenus() == '{}' ? {} : g.getMenus(); //GloabMenus
    }
    //获取一级菜单
    m.getFrstLevelMenus = function () {
        ////console.log('获取一级菜单')
        var smpMenus = getSmpMenus();
        //console.log(JSON.stringify(smpMenus[0]))
        if (smpMenus == undefined || smpMenus == null || smpMenus[0] == {}) {
            localStorage.removeItem('$loginstate');
            mui.openWindow({
                id: 'login',
                url: 'login.html'
            })
            return;
        }
        if (config.isTest) {
            var frstLevelMenus = [];
            var length = smpMenus.length;
            if (length > 0) {
                var _menu = null;
                for (var i = 0; i < length; i++) {
                    var temp = {};
                    _menu = smpMenus[i];
                    temp.id = _menu.id;
                    temp.icon = _menu.icon;
                    temp.title = _menu.title;
                    temp.url = _menu.url;
                    frstLevelMenus.push(temp);
                }
            }
            return frstLevelMenus;
        }
        var frstLevelMenus = [];
        ////console.log(JSON.stringify(smpMenus))
        var length = smpMenus.length;
        ////console.log('一级菜单长度:' + length)
        if (length > 0) {
            var _menu = {};
            for (var i = 0; i < length; i++) {
                _menu = smpMenus[i];
                ////console.log('LEVEL:' + _menu.LEVEL)
                if (_menu.LEVEL == 1) {
                    var temp = {};
                    temp.id = _menu.URIGHT_ID;
                    temp.icon = _menu.ICON;
                    temp.title = _menu.URIGHT_NAME;
                    temp.url = _menu.FUNC;
                    temp.name = _menu.MODULE_NAME;
                    frstLevelMenus.push(temp);
                }
            }
        }
        ////console.log('一级菜单：' + JSON.stringify(frstLevelMenus))
        return frstLevelMenus;
    };
    //获取二级菜单
    m.getTwoLevelMenus = function (id) {
        var smpMenus = getSmpMenus();
        if (config.isTest) {
            var twoLevelMenus = [];
            var length = smpMenus.length;
            if (length > 0) {
                var _menu = null;
                for (var i = 0; i < length; i++) {
                    _menu = smpMenus[i];
                    if (id == _menu.id) {
                        twoLevelMenus = _menu.children;
                        break;
                    }
                }
            }
            return twoLevelMenus;
        }
        var twoLevelMenus = [];
        var length = smpMenus.length;
        //console.log('length:' + length);
        //console.log(JSON.stringify(smpMenus[0]))
        if (length > 0) {
            for (var i = 0; i < length; i++) {
                var _menu = smpMenus[i];
                if (id == _menu.PARENT_ID) {
                    var temp = {};
                    temp.id = _menu.URIGHT_ID;
                    temp.icon = _menu.ICON;
                    temp.title = _menu.URIGHT_NAME;
                    temp.url = _menu.FUNC;
                    temp.bgColor = _menu.BACKGROUND_COLOR;
                    temp.name = _menu.MODULE_NAME;
                    twoLevelMenus.push(temp);
                }
            }
        }
        return twoLevelMenus;
    }
}(window.smp_menu = {}));
/**
 * 工单状态
 */
var WorkOrderStatus = {
    waitOrder: {
        value: 'A',
        text: g.getOrderInitStatusText()
    },
    waitSignin: {
        value: 'B',
        text: '待签到'
    },
    waitOver: {
        value: 'C',
        text: '待完工'
    },
    waitAudit: {
        value: 'D',
        text: '待评价'
    },
    Revoke: {
        value: 'F',
        text: '已撤单'
    },
    Over: {
        value: 'E',
        text: '已结束'
    }
}
//工单类型
var BillType = {
    bj: {
        value: 'A',
        text: '报警'
    },
    xj: {
        value: 'C',
        text: '巡检'
    },
    by: {
        value: 'M',
        text: '保养'
    },
    wx: {
        value: 'R',
        text: '维修'
    }
}