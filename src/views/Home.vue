<template>
  <div class="container">
    <h1 class="title">Список пользователей</h1>
    <UserSearch></UserSearch>
    <UserTable 
      :usersData="USERS"
    ></UserTable>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import UserSearch from '@/components/UserSearch'
import UserTable from '@/components/UserTable'

export default {
  name: 'Home',
  components: {
    UserSearch,
    UserTable
  },
  data: () => ({
    
  }),
  computed: {
    ...mapGetters([
      'USERS'
    ])
  },
  methods: {
    ...mapActions([
      'GET_USERS_FROM_API'
    ])
  },
  mounted() {
    this.GET_USERS_FROM_API();
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 1200px;
  max-width: 80%;
  margin: 0 auto;
}

.title {
  font-size: 36px;
  font-weight: 900;
  line-height: 42px;
  color: #739AFF;
  margin-bottom: 22px;
}
</style>
