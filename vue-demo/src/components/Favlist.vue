<template id="template-home">
    <div class="div">
        <div v-for="n in 10">div</div>
        <p>msg :  {{msg}}</p>
    </div>
</template>

<script >

export default{
    data:function(){
        return{
            msg:"0"
        }
    }
}

</script>

<style>
@import '../assets/css/test.css'
</style>
