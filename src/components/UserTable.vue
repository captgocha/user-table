<template>
  <div class="user-table__wrapper">
    <div class="user-table__sort">
        <p class="user-table__sort__title">Сортировка:</p>
        <button
          class="user-table__sort__btn"
          @click="sortByDate" 
        >
          Дата регистрации
        </button>
        <button
          class="user-table__sort__btn"
          @click="sortByRating"
        >
          Рейтинг
        </button>
    </div>

    <div class="user-table">
      <UserTableHeader></UserTableHeader>
      <div class="user-table__body">
        <ul class="user-table__list">
          <UserTableRow
            v-for="row in paginatedUsers"
            :key="row.id"
            :rowData="row"
          ></UserTableRow>
        </ul>
      </div>
    </div>

    <div class="user-table__pagination">
      <div
        class="user-table__pagination__item"
        :class="{'active-page': page === pageNumber}"
        v-for="page in pages"
        :key="page"
        @click="togglePage(page)"
      >
        {{ page }}
      </div>
    </div>
  </div>
</template>

<script>
import UserTableHeader from '@/components/UserTableHeader'
import UserTableRow from '@/components/UserTableRow'

export default {
  name: 'UserTable',
  components: {
    UserTableRow,
    UserTableHeader
  },
  props: {
    usersData: {
      Type: Array,
      default: () => {
        return []
      }
    }
  },
  data: () => ({
    dateFilterFlag: null,
    ratingFilterFlag: null,
    usersPerPage: 5,
    pageNumber: 1
  }),
  computed: {
    pages() {
      return Math.ceil(this.usersData.length / 5);
    },
    paginatedUsers() {
      let from = (this.pageNumber - 1) * this.usersPerPage;
      let to = from + this.usersPerPage;

      return this.usersData.slice(from, to);
    }
  },
  methods: {
    togglePage(page) {
      this.pageNumber = page;
    },
    sortByDate() {
        this.usersData.sort( (a, b) => a.registration_date.localeCompare(b.registration_date) );
    },
    sortByRating() {
      this.usersData.sort( (a, b) => a.rating - b.rating );
    },
    clearFilter() {
      this.dateFilterFlag = null;
      this.ratingFilterFlag = null;
    }
  }
}
</script>

<style lang="scss" scoped>
.user-table {
  width: 100%;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;

  &__sort {
    display: flex;
    align-items: center;
    margin-bottom: 23px;

    &__title {
      margin-right: 20px;
    }

    &__btn {
      font-size: 16px;
      line-height: 19px;
      color: #767676;
      cursor: pointer;
      transition: .2s;
    }

    &__btn:first-child {
      margin-right: 10px;
    }
  }

  &__pagination {
    display: flex;
    align-items: center;
    justify-content: center;

    &__item {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 34px;
      height: 34px;
      font-weight: bold;
      font-size: 18px;
      border: 2px solid #739AFF;
      box-sizing: border-box;
      border-radius: 4px;
      margin: 0 5px;
      cursor: pointer;
    }

    .active-page {
      background: #739AFF;
      color: #fff;
    }
  }
}
</style>
