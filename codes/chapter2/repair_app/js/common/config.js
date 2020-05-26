/**
 * 系统配置项  create by zouqj  2018-10-20
 */
(function (owner) {
    owner.isPublish = true; //是否发布到正式环境
    var apiDomain = ''; //api域名地址
    if (owner.isPublish == true) {//生产 
        apiDomain = 'http://www.repair.com';//API域名
        owner.OpenLog = false;//是否开启日志 ，控制台日志开关
    } else { //测试
        apiDomain = 'http://www.repairtest.com';//API域名
        owner.isMock = true; //是否是mock数据
        owner.OpenLog = false;//是否开启日志 ，控制台日志开关
    }
    /*维修*/
    owner.GetFaultType = apiDomain + '/api/Repair/GetFaultType'; //故障类型表
}(window.config = {}));