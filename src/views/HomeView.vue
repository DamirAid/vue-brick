<template>
  <div class="home">
    <Card fullWidth>
      <div class="user-info-wrap">
        <Avatar :size="size"
          src="data:image/png;base64,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"
          alt="avatar" />
        <div class="user-info-text">
          <div class="user-name">Абрамова Екатерина</div>
          <div class="user-social-wrap">
            <a href="#" class="user-social-icon">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1831_383)">
                  <path
                    d="M22 0H3C1.34315 0 0 1.34315 0 3V22C0 23.6569 1.34315 25 3 25H22C23.6569 25 25 23.6569 25 22V3C25 1.34315 23.6569 0 22 0Z"
                    fill="#61A8DE" />
                  <path
                    d="M19.6852 5.51858L2.9674 12.0333C2.4259 12.2444 2.45871 13.0214 3.01611 13.186L7.26429 14.4405L8.84971 19.4712C9.01532 19.9966 9.68123 20.1559 10.0667 19.7623L12.2631 17.5197L16.5727 20.683C17.1001 21.0701 17.8512 20.7825 17.9851 20.1422L20.8393 6.49597C20.9791 5.82754 20.3215 5.27063 19.6852 5.51858ZM17.5892 8.54701L9.82391 15.4139C9.74651 15.4824 9.69725 15.5771 9.68573 15.6798L9.38675 18.3375C9.37699 18.4242 9.2557 18.4356 9.22981 18.3524L7.99975 14.3888C7.94341 14.2073 8.01687 14.0107 8.17831 13.9106L17.3484 8.22325C17.5592 8.09236 17.7751 8.38266 17.5892 8.54701Z"
                    fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_1831_383">
                    <rect width="25" height="25" fill="white" />
                  </clipPath>
                </defs>
              </svg>

            </a>
            <a href="#" class="user-social-icon">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1831_387)">
                  <path
                    d="M22 0H3C1.34315 0 0 1.34315 0 3V22C0 23.6569 1.34315 25 3 25H22C23.6569 25 25 23.6569 25 22V3C25 1.34315 23.6569 0 22 0Z"
                    fill="#7D3DAF" />
                  <path
                    d="M20.407 8.05852L20.402 8.03877C20.0027 6.42433 18.2023 4.69195 16.5489 4.33154L16.5302 4.3277C13.856 3.81753 11.1444 3.81753 8.47066 4.3277L8.45146 4.33154C6.79862 4.69195 4.99821 6.42433 4.59831 8.03877L4.59392 8.05852C4.1002 10.3131 4.1002 12.5996 4.59392 14.8542L4.59831 14.8739C4.98115 16.4195 6.64749 18.0723 8.23916 18.5268V20.329C8.23916 20.9812 9.03404 21.3016 9.48606 20.8309L11.312 18.9329C11.708 18.9551 12.1042 18.9674 12.5004 18.9674C13.8466 18.9674 15.1934 18.8402 16.5302 18.5851L16.5489 18.5812C18.2023 18.2208 20.0027 16.4884 20.402 14.874L20.407 14.8543C20.9007 12.5996 20.9007 10.3131 20.407 8.05852ZM18.962 14.5273C18.6954 15.5805 17.3284 16.8899 16.2422 17.1319C14.8203 17.4022 13.3871 17.5178 11.9553 17.4782C11.9269 17.4774 11.8995 17.4884 11.8796 17.5088C11.6764 17.7174 10.5464 18.8774 10.5464 18.8774L9.12839 20.3328C9.02471 20.4408 8.84259 20.3673 8.84259 20.2181V17.2327C8.84259 17.1834 8.80737 17.1415 8.75893 17.132C8.75865 17.1319 8.75838 17.1319 8.75811 17.1318C7.67194 16.8899 6.30545 15.5804 6.0383 14.5272C5.59396 12.4893 5.59396 10.4233 6.0383 8.38541C6.30545 7.33216 7.67194 6.02273 8.75811 5.78081C11.2415 5.30849 13.7594 5.30849 16.2422 5.78081C17.329 6.02273 18.6954 7.33216 18.962 8.38541C19.4069 10.4234 19.4069 12.4893 18.962 14.5273Z"
                    fill="white" />
                  <path
                    d="M14.8634 15.9053C14.6964 15.8546 14.5373 15.8205 14.3895 15.7592C12.8581 15.1239 11.4487 14.3042 10.3323 13.0477C9.69746 12.3332 9.20057 11.5265 8.78053 10.6728C8.58134 10.268 8.41348 9.84729 8.24238 9.42934C8.08637 9.04819 8.31616 8.65443 8.55814 8.36725C8.78519 8.09774 9.07736 7.89148 9.39377 7.73947C9.64074 7.62082 9.88436 7.68922 10.0647 7.89856C10.4547 8.35112 10.8128 8.82684 11.1028 9.35144C11.2812 9.67411 11.2323 10.0685 10.909 10.2881C10.8305 10.3415 10.7589 10.4041 10.6857 10.4644C10.6215 10.5173 10.5611 10.5706 10.5171 10.6422C10.4367 10.7731 10.4329 10.9274 10.4847 11.0697C10.8833 12.1651 11.5551 13.0169 12.6576 13.4756C12.834 13.549 13.0112 13.6345 13.2145 13.6108C13.5548 13.571 13.6651 13.1977 13.9036 13.0026C14.1367 12.812 14.4346 12.8094 14.6858 12.9684C14.937 13.1273 15.1805 13.298 15.4225 13.4705C15.6601 13.6398 15.8966 13.8054 16.1158 13.9984C16.3265 14.1839 16.3991 14.4274 16.2804 14.6792C16.0632 15.1405 15.7471 15.5242 15.2911 15.7691C15.1624 15.8382 15.0086 15.8606 14.8634 15.9053C15.0086 15.8606 14.6964 15.8546 14.8634 15.9053Z"
                    fill="white" />
                  <path
                    d="M12.5047 7.21209C14.5078 7.26821 16.153 8.59756 16.5056 10.5779C16.5657 10.9153 16.587 11.2603 16.6138 11.6028C16.625 11.7468 16.5434 11.8837 16.388 11.8856C16.2274 11.8875 16.1552 11.7532 16.1447 11.6092C16.1241 11.3241 16.1098 11.0378 16.0705 10.7551C15.8632 9.26298 14.6733 8.02847 13.188 7.76357C12.9646 7.72369 12.7358 7.71321 12.5094 7.68946C12.3663 7.67443 12.1788 7.66576 12.1471 7.48786C12.1205 7.3387 12.2464 7.21994 12.3884 7.21231C12.4271 7.21017 12.4659 7.21193 12.5047 7.21209C14.5078 7.26821 12.4659 7.21193 12.5047 7.21209Z"
                    fill="white" />
                  <path
                    d="M15.549 11.1583C15.5457 11.1833 15.544 11.2421 15.5293 11.2975C15.4762 11.4986 15.1713 11.5238 15.1011 11.3208C15.0803 11.2606 15.0772 11.1921 15.0771 11.1272C15.0763 10.7029 14.9841 10.2791 14.7702 9.90999C14.5503 9.5306 14.2143 9.21166 13.8202 9.01867C13.5819 8.90199 13.3242 8.82947 13.063 8.78624C12.9488 8.76737 12.8335 8.75591 12.7188 8.73994C12.5798 8.72063 12.5055 8.63204 12.5121 8.49506C12.5183 8.3667 12.6121 8.27437 12.752 8.28227C13.2117 8.30838 13.6557 8.40773 14.0643 8.62414C14.8954 9.06426 15.3702 9.75897 15.5087 10.6866C15.515 10.7286 15.5251 10.7703 15.5282 10.8124C15.5361 10.9166 15.541 11.0209 15.549 11.1583C15.5457 11.1833 15.541 11.0209 15.549 11.1583Z"
                    fill="white" />
                  <path
                    d="M14.3025 11.1098C14.135 11.1128 14.0453 11.02 14.028 10.8664C14.016 10.7592 14.0065 10.6507 13.9809 10.5464C13.9306 10.3411 13.8215 10.1509 13.6488 10.0251C13.5673 9.96571 13.4749 9.92243 13.3781 9.8945C13.2552 9.85901 13.1275 9.86877 13.0049 9.83871C12.8717 9.80607 12.798 9.69822 12.819 9.57326C12.838 9.45954 12.9486 9.37078 13.0729 9.37978C13.8495 9.43584 14.4045 9.83734 14.4837 10.7516C14.4893 10.8161 14.4959 10.8843 14.4816 10.946C14.4571 11.0517 14.3789 11.1046 14.3025 11.1098C14.3789 11.1046 14.135 11.1128 14.3025 11.1098Z"
                    fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_1831_387">
                    <rect width="25" height="25" fill="white" />
                  </clipPath>
                </defs>
              </svg>

            </a>
            <a href="#" class="user-social-icon">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1831_396)">
                  <path
                    d="M22 0H3C1.34315 0 0 1.34315 0 3V22C0 23.6569 1.34315 25 3 25H22C23.6569 25 25 23.6569 25 22V3C25 1.34315 23.6569 0 22 0Z"
                    fill="#1BD741" />
                  <path
                    d="M3.75781 21.2521L4.98238 16.9028C4.19491 15.565 3.7803 14.0429 3.7803 12.4793C3.7803 7.66477 7.6972 3.74787 12.5117 3.74787C17.3262 3.74787 21.2431 7.66477 21.2431 12.4793C21.2431 17.2938 17.3262 21.2107 12.5117 21.2107C11.0115 21.2107 9.54258 20.8267 8.24308 20.0975L3.75781 21.2521ZM8.47238 18.509L8.73964 18.6722C9.87266 19.3639 11.177 19.7296 12.5117 19.7296C16.5095 19.7296 19.7619 16.4771 19.7619 12.4793C19.7619 8.48148 16.5095 5.22901 12.5117 5.22901C8.51391 5.22901 5.26144 8.48148 5.26144 12.4793C5.26144 13.8723 5.65734 15.225 6.40625 16.3912L6.58624 16.6714L5.88105 19.1761L8.47238 18.509Z"
                    fill="white" />
                  <path
                    d="M10.0594 8.41543L9.49283 8.38455C9.31488 8.37484 9.14032 8.4343 9.00581 8.55115C8.73115 8.78967 8.29196 9.25079 8.15707 9.8517C7.95591 10.7477 8.26678 11.8448 9.07137 12.942C9.87595 14.0391 11.3754 15.7945 14.0268 16.5442C14.8812 16.7858 15.5533 16.623 16.0718 16.2912C16.4825 16.0285 16.7657 15.6068 16.8677 15.1301L16.9581 14.7076C16.9869 14.5733 16.9187 14.4371 16.794 14.3796L14.8792 13.497C14.7549 13.4397 14.6075 13.4759 14.5239 13.5843L13.7722 14.5587C13.7154 14.6324 13.6182 14.6616 13.5304 14.6307C13.0156 14.4498 11.2913 13.7276 10.3451 11.905C10.3041 11.826 10.3143 11.7301 10.3725 11.6626L11.0909 10.8316C11.1643 10.7467 11.1828 10.6274 11.1387 10.5242L10.3133 8.59322C10.2694 8.49042 10.1709 8.42152 10.0594 8.41543Z"
                    fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_1831_396">
                    <rect width="25" height="25" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <Button :theme="buttonTheme.clear">Комментарии</Button>
          </div>
        </div>
      </div>
    </Card>
    <div class="document_section">
      <div class="document_add_btn_wrap">
        <FilterList />
        <Button :theme="buttonTheme.contained" @click="onToggleModal">добавить документ</Button>
        <Modal :isOpen="isOpenAddModal" :onClose="onToggleModal">
          <h2>Добавить документ</h2>
          <div class="input_wrap">
            <div class="input_info">Тип документа: * </div>
            <div class="radio_btn_wrap">
              <label for="dogovor">
                <input value="Договор" id="dogovor" type="radio" name="type_document" v-model="document_type">
                Договор
              </label>
              <label for="spravka">
                <input value="Справка" id="spravka" type="radio" name="type_document" v-model="document_type">
                Справка
              </label>
              <label for="anketa">
                <input value="Анкета" id="anketa" type="radio" name="type_document" v-model="document_type">
                Другое
              </label>
            </div>
            <div class="input_text_wrap">
              <input v-model="document_title" type="text" name="title" placeholder="Название документа *">
            </div>
            <div class="input_text_wrap">
              <input v-model="document_number" type="text" name="number" placeholder="Номер">
            </div>
            <div class="btn_wrap">
              <Button :theme="buttonTheme.contained" @click="onSubmit">Добавить документ</Button>
            </div>
          </div>
        </Modal>
      </div>
      <div class="document_container">
        <DocumentItem v-for="(document, i) in allDocuments" :key="i" :document="document" />
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { mapActions, mapGetters } from "vuex"
import { defineComponent } from 'vue';
import Card from '@/shared/ui/Card/Card.vue';
import { SIZE } from '@/shared/ui/Avatar/Avatar.vue';
import Avatar from '@/shared/ui/Avatar/Avatar.vue';
import Button, { BUTTON_THEME } from '@/shared/ui/Button/Button.vue';
import DocumentItem from '@/entity/Document/ui/DocumentItem.vue';
import Modal from "@/shared/ui/Modal/Modal.vue";
import FilterList from "@/widgets/FilterList/UpdateDocumentsBar.vue";


export default defineComponent({
  components: {
    Card,
    Avatar,
    Button,
    DocumentItem,
    Modal,
    FilterList
},
  computed: {
    ...mapGetters(["allDocuments"]),
    size() {
      return SIZE.large
    },
    buttonTheme() {
      return BUTTON_THEME
    }
  },
  methods: {
    ...mapActions(["getDocuments", "addDocument"]),
    onToggleModal() {
      this.isOpenAddModal = !this.isOpenAddModal
    },
    onSubmit() {
      const data = {
        type: this.document_type,
        title: this.document_title,
        number: this.document_number,
        start_date: "04.07.2021",
        end_date: "04.07.2022",
        status: "Заключен",
        file: {
          type: "pdf",
          file_url: "http://google.com"
        }
      }
      this.addDocument(data)
      this.onToggleModal()


    }
  },
  data() {
    return {
      isOpenAddModal: false,
      document_type: "Договор",
      document_title: "",
      document_number: ""
    }
  },

  async mounted() {
    this.getDocuments()
  }
});
</script>

<style scoped>
.home {
  padding: 30px 90px;
}

.user-name {
  font-weight: 700;
  font-size: 36px;
  line-height: 43px;
  color: #458AFB;
}

.user-info-wrap {
  display: flex;
  justify-content: flex-start;
}

.user-info-text {
  margin-left: 40px;
}

.user-social-wrap {
  display: flex;
  align-items: center;
  padding-top: 40px;
}

.user-social-wrap a {
  margin-right: 10px;
}

.document_container {
  padding-top: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.document_section {
  padding-top: 30px;
}

.document_add_btn_wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.input {
  width: 100%;
}

.input_text_wrap input {
  width: 100%;
  padding: 12px 0;
  border: none;
  border-bottom: 1px solid #B9C2C9;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #000;
  margin-top: 40px;
}

.btn_wrap {
  padding-top: 30px;
}
</style>