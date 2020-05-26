/**
 * 系统配置项  create by zouqj  2017-09-01
 */
(function (owner) {
    owner.isPublish=false; //是否发布到正式环境
    owner.appTitle = "维修平台";
    owner.uuid = localStorage.getItem('$uuid');//获取设备的唯一标识号
    owner.ORG_CODE = localStorage.getItem('$ORG_CODE');//项目编码
    owner.ROLE_ID = localStorage.getItem('$ROLE_ID'); //登录角色编号
    owner.USER_ID = localStorage.getItem('$USER_ID'); //登录用户编号
    owner.getCount = localStorage.getItem('$EXE_COUNT') || '';
    var apiDomain=''; //api域名地址
    if (owner.isPublish == true) {//生产 
        apiDomain = 'http://www.repair.com';//API域名
        owner.apkUrl = apiDomain+'/app/android.apk'; //Android安装包下载地址
        owner.OpenLog = false;//是否开启日志 ，控制台日志开关
    } else { //测试
        owner.OpenLog = true;//是否开启日志 ，控制台日志开关
        owner.isMock = true; //是否是mock数据
        apiDomain = 'http://www.repairtest.com';//API域名
        owner.apkUrl = apiDomain + '/app/android.apk';//Android安装包下载地址
    }
    /*基础类*/
    owner.loginUrl = apiDomain + "/api/Base/LoginApp"; //登录
    owner.uploadImgUrl = apiDomain + "/api/file/FileUpload"; //上传图片路径
    owner.GetBuildsPage = apiDomain + '/api/Base/GetBuildsPage'; //建筑信息列表
    /*维修*/
    owner.GetFaultType = apiDomain + '/api/Repair/GetFaultType'; //故障类型表
    owner.AddRepairBill = apiDomain + '/api/Repair/AddRepairBill'; //维修报修
    owner.AddBillFile = apiDomain + '/api/Bill/AddBillFile'; //添加文件
}(window.config = {}));
//App角色类型
(function (owner) {
    owner.pm = 'pm'; //项目经理
    owner.leader = 'leader'; //班组
    owner.repairman = 'repairman'; //维修人员
    owner.customer = 'customer'; //报修人员
}(window.comm = {}));
/** 
 * 任务类型 -工作台模块
 */
var TaskType = {
    //维修
    repair: {
        value: 'repair',
        name: 'repair'
    },
    polling: {
        value: 'polling',
        name: 'polling'
    },
    maintain: {
        value: 'maintain',
        name: 'maintain'
    }
}