<template>
    <div>
        <h1>Dashboard Page</h1>
        <div>
            UserName -- {{gettersAuthData.userName}}
        </div>
        <div>
            Id  -- {{gettersAuthData.userId}}
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    computed:{
        ...mapGetters('auth',{
            gettersAuthData:'getAuthData'
        })
    }
}
</script>