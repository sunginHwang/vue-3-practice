import Vue, { ref, onMounted } from 'vue';

export default function useMountedState() {
    const isMounted = ref(false);

    onMounted(async () => {
        await Vue.nextTick();
        isMounted.value = true;
    });

    return isMounted;
}
