<template>
    <div id="app">
        <h2>{{name}}</h2>
        <p>{{personInfo}}</p>
        <input type="text" :value="name" @input="changeName" placeholder="이름을 작성해 주세요."/>
        <div v-if="isShowResizeComponent">
            <button @click="toggleShowResize">버튼 가리기</button>
            <resize/>
        </div>
    </div>
</template>

<script>
    import {computed,ref } from 'vue';
    import {useStore} from 'vuex';
    import Resize from "./components/resize";

    function usePerson() {
        const store = useStore();

        const name = computed(() => store.state.person.name);
        const personInfo = computed(() => store.getters['person/personInfo']);
        const changeName = e => store.dispatch('person/changeName', e.target.value);

        return {
            name,
            personInfo,
            changeName
        }
    }

    function useResize(){
      const isShowResizeComponent = ref(true);
      const toggleShowResize = () => isShowResizeComponent.value = !isShowResizeComponent.value;

      return {
          isShowResizeComponent,
          toggleShowResize
      }
    }

    export default {
        name: 'App',
        components: {Resize},
        setup() {

            return {
                ...usePerson(),
                ...useResize()
            }
        },
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
