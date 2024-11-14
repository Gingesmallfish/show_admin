import { reactive, ref } from "vue";
import { logout, updatepassword } from "@/api/manager.js";
import { showModel, toast } from "@/composables/util.js";
import { useRouter } from "vue-router";
import { useStore } from "vuex";


export function useRePassword() {
    const router = useRouter();
    const store = useStore();
    // 修改密码
    const formDrawerRef = ref(null)
    const form = reactive({
        oldpassword: "",
        password: "",
        repassword: ""
    })


    // 表单验证
    const rules = {
        oldpassword: [{ required: true, message: '旧密码不能为空', trigger: 'blur' }],
        password: [{ required: true, message: '新密码不能为空', trigger: 'blur' }],
        repassword: [{ required: true, message: '确认密码不能为空', trigger: 'blur' }],
    }

    const formRef = ref(null)
    const onSubmit = () => {
        formRef.value.validate((valid) => {
            if (!valid) {
                return false
            }
            formDrawerRef.value.showLoading()
            updatepassword(form).then(res => {
                toast("修改密码成功，请重新登录")
                store.dispatch("logout")
                // 调转会登录页
                router.push("/login")
            }).finally(() => {
                formDrawerRef.value.hideLoading()
            })
        })
    }

    const openRePasswordFrom = () => formDrawerRef.value.open()

    return {
        formDrawerRef,
        form,
        formRef,
        onSubmit,
        openRePasswordFrom
    }
}


export function useLogout() {
    const router = useRouter();
    const store = useStore();

    function handleLogout() {
        showModel("是否要退出登录").then((res) => {
            logout().finally(() => {
                store.dispatch("logout");
                // 跳转回登录页
                router.push("/login")
                // 提示退出登录
                toast("退出登录")
            })
        })
    }

    return {
        handleLogout,
    }

}
