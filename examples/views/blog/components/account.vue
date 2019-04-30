<template>
    <div class="account">
        <div class="about">About Me</div>
        <div class="info">
            <div>
                <img src="../../../assets/img/me.jpg" alt="">
            </div>       
            <div class="name">
                <div class="ename">Zhanwei</div>
                <div class="job">fe | 常州 @Amole</div>
            </div>
        </div>     
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.account img{
    width: 60px;
    border-radius: 50%;
    margin: 0 auto
}
.about{
    padding: 10px;
    border-bottom: 1px solid hsla(0,0%,59.2%,.1);
}
.info{
    padding: 10px;
    display: flex
}
.name{
    padding-left: 10px;
    line-height: 32px;
}
.ename{
    font-size: 18px;
    font-weight: bold
}
.job{
    color: #72777b
}
</style>
