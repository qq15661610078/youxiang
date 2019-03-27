<template>
    <div>
        <div class="more-box">
            <p class="bag">箱包</p>
            <ul>
                <li><img src="../../server/public/images/bag.png" alt=""><p>双肩包</p></li>
                <li><img src="../../server/public/images/bag.png" alt=""><p> 钱 包</p></li>
                <li><img src="../../server/public/images/bag.png" alt=""><p>单肩包</p></li>
                <li><img src="../../server/public/images/bag.png" alt=""><p>手提包</p></li>
                <li><img src="../../server/public/images/bag.png" alt=""><p>斜跨包</p></li>
                <li><img src="../../server/public/images/bag.png" alt=""><p>晚宴包</p></li>
                <li><img src="../../server/public/images/bag.png" alt=""><p>公文包</p></li>
                <li><img src="../../server/public/images/bag.png" alt=""><p>行李包</p></li>
            </ul>
        </div>
        <div class="more-box">
            <p class="bag">鞋靴</p>
            <ul>
                <li><p>凉鞋</p></li>
                <li><p>帆布鞋</p></li>
                <li><p>运动鞋</p></li>
                <li><p>芭蕾舞鞋</p></li>
                <li><p>猫跟鞋</p></li>
                <li><p>系带鞋</p></li>
                <li><p>小白鞋</p></li>
                <li><p>穆勒鞋</p></li>
            </ul>
        </div>
        <div class="more-box">
            <p class="bag">数码</p>
            <ul>
                <li><p>笔记本</p></li>
                <li><p>蓝牙耳机</p></li>
                <li><p>手机</p></li>
                <li><p>照相机</p></li>
                <li><p>斜跨包</p></li>
                <li><p>晚宴包</p></li>
                <li><p>公文包</p></li>
                <li><p>行李包</p></li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:"buyMore",

}
</script>
<style  lang="less" scope>
.more-box{
    .bag{
        text-align: center;
        margin:2rem 5rem;
    }
    ul{
       
        li{
            float:left;
            width:23.5%;
            height:7rem;
            margin:0.10rem;
            background-color: #E6E6E6;
            
            p{
                font-size: 0.80rem;
                margin-left:1.5rem;
            }

            img{
                width:90%;
                padding:0.25rem 0.25rem;
            }
        }
    }
}
</style>
