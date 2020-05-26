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