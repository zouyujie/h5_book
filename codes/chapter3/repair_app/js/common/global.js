/**
 * 全局函数
 * @param {Object} $ ： mui
 * @param {Object} owner：g
 */
(function ($, owner) {
    /**
     * 根据id获取dom
     * @param {Object} id
     */
    owner.id = function (id) {
        return document.getElementById(id);
    }
}(mui, window.g = window.g || {}));