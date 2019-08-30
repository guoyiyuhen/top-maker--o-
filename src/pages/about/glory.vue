<template>
    <div class="glory">
        <com-returntop></com-returntop>
        <div class="glory-zhengshu">
            <ul>
                <li><img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/glory/glory1.jpg" alt=""><div><span>2018</span><span>全国建材职业教育教学指导委员会教学成果奖</span></div></li>
                <li><img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/glory/glory2.jpg" alt=""><div><span>2018</span><span>城乡建设科学技术成果奖</span></div></li>
                <li><img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/glory/glory6.jpg" alt=""><div><span>2018</span><span>商混站仿真教学软件科学技术奖三等奖</span></div></li>
                <li><img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/glory/glory7.png" alt=""><div><span>2018</span><span>中国煤炭工业科学技术三等奖</span></div></li>
                <li><img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/glory/glory4.png" alt=""><div><span>2017</span><span>建材行指委工作贡献奖</span></div></li>
                <li><img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/glory/glory5.jpg" alt=""><div><span>2016</span><span>山东省电力职工技术成果奖三等奖</span></div></li>
                <li><img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/glory/glory3.jpg" alt=""><div><span>2014</span><span>国家教育成果二等奖</span></div></li>
            </ul>
        </div>
    </div>
</template>
<script>
import comReturntop from "@/components/returntop";
export default {
    components: {
        comReturntop
    },
    data() {
        return {

        };
    },
    watch: {},
    created() {},
    mounted() {

    },
    methods: {

    }
};
</script>
<style>
.glory {
    width: 1200px;
    margin: 0 auto;
    margin-top: 80px;
    padding-bottom: 80px;
}
.glory-zhengshu {
        width: 1200px;
        margin: 0 auto;
        margin-top: 60px;
    }
    .glory-zhengshu img {
        width: 380px;
        height: 266px;
    }
    .glory-zhengshu ul {
        display: flex;
        flex-wrap: wrap;
    }
    .glory-zhengshu ul li {
        margin: 0 10px;
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .glory-zhengshu ul div {
        width: 340px;
        height: 80px;
        background: #fff;
        color: #333;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 20px;
    }
    .glory-zhengshu ul div:hover {
        background: #0055d3;
        color: #fff;
    }

    .glory-zhengshu ul div span:nth-child(1) {
        font-size: 24px;
    }
    .glory-zhengshu ul div span:nth-child(2) {
        font-size: 16px;
        margin-top: 10px;
    }
</style>