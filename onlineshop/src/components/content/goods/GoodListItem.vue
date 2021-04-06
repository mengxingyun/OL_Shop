<template>
<li class="each">
    <a class="itemwrapper">
        <div class="imgwrapper">
            <img class="img" src="~assets/img/3.jpg">
        </div>

        <div class="mes">
            <p class="title">标题</p>
            <div class="pricewrapper">
                <div class="price">
                    <i>&yen;</i>
                    <span class="pricemes">10000</span>
                </div>
            </div>
        </div>
    </a>
</li>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.goods-item {
    width: 46
}

.itemwrapper{
    -webkit-font-smoothing: antialiased;
    font: 12px/1.5 Microsoft YaHei,Heiti SC,tahoma,arial,Hiragino Sans GB,"\5B8B\4F53",sans-serif;
    list-style: none;
    margin: 0;
    padding: 0;
    color: #666;
    text-decoration: none;
    display: inline-block;
    width: 100%;
    height: 100%;
}

.imgwrapper{
    -webkit-font-smoothing: antialiased;
    font: 12px/1.5 Microsoft YaHei,Heiti SC,tahoma,arial,Hiragino Sans GB,"\5B8B\4F53",sans-serif;
    list-style: none;
    color: #666;
    padding: 0;
    position: relative;
    overflow: hidden;
    transition: background .2s linear,opacity .2s linear!important;
    background: transparent;
    display: block;
    width: 120px;
    height: 120px;
    margin: 30px auto;
}

.img{
    -webkit-font-smoothing: antialiased;
    font: 12px/1.5 Microsoft YaHei,Heiti SC,tahoma,arial,Hiragino Sans GB,"\5B8B\4F53",sans-serif;
    list-style: none;
    color: #666;
    padding: 0;
    border: 0;
    transition: opacity .2s linear;
    display: block;
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    margin: 0 auto;
    opacity: 1;
}

.mes{
    -webkit-font-smoothing: antialiased;
    font: 12px/1.5 Microsoft YaHei,Heiti SC,tahoma,arial,Hiragino Sans GB,"\5B8B\4F53",sans-serif;
    list-style: none;
    color: #666;
    margin: 0;
    height: 65px;
    clear: both;
    padding: 0 10px;
    line-height: 22px;
}

.title{
    -webkit-font-smoothing: antialiased;
    font: 12px/1.5 Microsoft YaHei,Heiti SC,tahoma,arial,Hiragino Sans GB,"\5B8B\4F53",sans-serif;
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: center;
    color: #666;
    transition: color .2s ease;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 12px;
    line-height: 20px;
    height: 40px;
}

.pricewrapper{
    -webkit-font-smoothing: antialiased;
    font: 12px/1.5 Microsoft YaHei,Heiti SC,tahoma,arial,Hiragino Sans GB,"\5B8B\4F53",sans-serif;
    list-style: none;
    color: #666;
    line-height: 22px;
    margin: 0;
    padding: 0;
    margin-top: 10px;
}

.price{
    -webkit-font-smoothing: antialiased;
    font: 12px/1.5 Microsoft YaHei,Heiti SC,tahoma,arial,Hiragino Sans GB,"\5B8B\4F53",sans-serif;
    list-style: none;
    margin: 0;
    padding: 0;
    display: inline-block;
    font-size: 16px;
    line-height: 18px;
    height: 18px;
    color: #e1251b;
    width: 62px;
}

.pricemes{
    -webkit-font-smoothing: antialiased;
    font: 12px/1.5 Microsoft YaHei,Heiti SC,tahoma,arial,Hiragino Sans GB,"\5B8B\4F53",sans-serif;
    list-style: none;
    line-height: 18px;
    color: #e1251b;
    text-align: center;
    margin: 0;
    padding: 0;
    font-weight: 700;
    font-family: arial,sans-serif;
    font-size: 16px;
}

.each{
    -webkit-font-smoothing: antialiased;
    font: 12px/1.5 Microsoft YaHei,Heiti SC,tahoma,arial,Hiragino Sans GB,"\5B8B\4F53",sans-serif;
    color: #666;
    padding: 0;
    list-style: none;
    position: relative;
    float: left;
    background: #fff;
    width: 190px;
    height: 266px;
    margin: 0 5px 8px;
}
</style>