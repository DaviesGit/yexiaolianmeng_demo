layui.use(['jquery', 'layer'], function () {
    layui.$(function () {
        layui.$('.layui-btn-sm').click(function () {
            //询问框

            layer.confirm('确定要接单吗？', {
                btn: ['是的', '再想想'], //按钮
                title: '确认接单：',
            }, function () {
                layer.msg('接单成功！', {
                    icon: 1
                });
            }, function () {
                //  layer.msg('购买成功！', {icon: 1});
            });
        });
    });
});
