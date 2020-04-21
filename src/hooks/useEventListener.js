import { onMounted, onUnmounted} from 'vue';

function useEventListener(eventName, fn) {

    onMounted(()=>{
        console.log('onMounted useEventListener')
        window.addEventListener(eventName, fn);
    });

    onUnmounted(()=>{
        console.log('destroy useEventListener')
        window.removeEventListener(eventName, fn);
    })
}

export default useEventListener;