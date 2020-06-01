<template>
  <li class="user-table__row">
    <div class="user-table__row__item user-name">
      {{ rowData.username }}
    </div>
    <div class="user-table__row__item user-email">
      {{ rowData.email }}
    </div>
    <div class="user-table__row__item user-date">
      {{ getDate }}
    </div>
    <div class="user-table__row__item user-rating">
      {{ rowData.rating }}
    </div>
    <font-awesome-icon 
      class="user-delete" 
      :icon="['fas', 'times']"
    />
  </li>
</template>

<script>
export default {
  name: 'UserTableRow',
  props: {
    rowData: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  computed: {
    getDate() {
      let dd = (new Date(this.rowData.registration_date)).getDate();
      if (dd < 10) dd = '0' + dd;

      let mm = (new Date(this.rowData.registration_date)).getMonth() + 1;
      if (mm < 10) mm = '0' + mm;

      let yy = (new Date(this.rowData.registration_date)).getFullYear();
      if (yy < 10) yy = '0' + yy;

      let date = dd + '.' + mm + '.' + yy;

      return date;
    }
  }
}
</script>

<style lang="scss" scoped>
.user-table__row {
  position: relative;
  display: flex;
  width: 100%;
  padding: 28px 31px 32px 31px;
  
  &:not(:last-child) {
    border-bottom: 1px solid #E0E0E0;
  }

  &__item {
    flex-basis: 25%;
  }

  .user-name {
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: #739AFF;
  }

  .user-email,
  .user-date,
  .user-rating {
    font-size: 16px;
    line-height: 19px;
    color: #000;
  }

  .user-delete {
    position: absolute;
    top: 28px;
    right: 32px;
    font-size: 22px;
    color: #E24242;
    transition: .1s;
    cursor: pointer;
  }

  .user-delete:hover {
    color: #bb2c2c;
  }
}
</style>
