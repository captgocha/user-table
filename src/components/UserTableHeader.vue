<template>
  <div class="user-table__header">
    <div
      class="user-table__header__item"
      v-for="title in headerTitles"
      :key="title.id"
    >
      {{ title.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserTableHeader',
  data: () => ({
    headerTitles: [
      { id: 1, name: 'Имя пользоватьеля' },
      { id: 2, name: 'E-mail' },
      { id: 3, name: 'Дата регистрации' },
      { id: 4, name: 'Рейтинг' }
    ],
  })
}
</script>

<style lang="scss" scoped>
 .user-table__header {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 28px 31px 32px 31px;
  border-bottom: 1px solid #E0E0E0;

  &__item {
    flex-basis: 25%;
    line-height: 19px;
    color: #767676;
  }
}
</style>
