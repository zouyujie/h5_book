/**
 * ȫ�ֺ���
 * @param {Object} $ �� mui
 * @param {Object} owner��g
 */
(function ($, owner) {
    /**
     * ����id��ȡdom
     * @param {Object} id
     */
    owner.id = function (id) {
        return document.getElementById(id);
    }
}(mui, window.g = window.g || {}));