/**
 * ϵͳ������  create by zouqj  2018-10-20
 */
(function (owner) {
    owner.isPublish = true; //�Ƿ񷢲�����ʽ����
    var apiDomain = ''; //api������ַ
    if (owner.isPublish == true) {//���� 
        apiDomain = 'http://www.repair.com';//API����
        owner.OpenLog = false;//�Ƿ�����־ ������̨��־����
    } else { //����
        apiDomain = 'http://www.repairtest.com';//API����
        owner.isMock = true; //�Ƿ���mock����
        owner.OpenLog = false;//�Ƿ�����־ ������̨��־����
    }
    /*ά��*/
    owner.GetFaultType = apiDomain + '/api/Repair/GetFaultType'; //�������ͱ�
}(window.config = {}));