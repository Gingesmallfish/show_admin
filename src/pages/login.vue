<template>
  <el-row class="login-container">
    <el-col :lg="16" :md="12" class="left">
      <div>
        <div>欢迎光临</div>
        <div>此战点是《vue + vite实战商城后台开发》</div>
      </div>
    </el-col>
    <el-col :lg="8" :md="12" class="right">
      <h2 class="font-bold text-3xl text-gray-800">欢迎回来</h2>
      <div class="flex items-center justify-center my-5 text-gray-300 space-x-2">
        <span class="h-[1px] w-16 bg-gray-300"></span>
        <span>账号密码登录</span>
        <span class="h-[1px] w-16 bg-gray-300"></span>
      </div>
      <!-- from表单 -->
      <el-form ref="formRef" :rules="rules" :model="form" class="w-[250px]">
        <!-- 登录 -->
        <el-form-item prop="username">
          <el-input v-model="form.username" placeholder="请输入用户名">
            <!-- el-icon -->
            <template #prefix>
              <el-icon>
                <User />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input type="password" show-password v-model="form.password" placeholder="请输入密码">
            <!-- el-icon -->
            <template #prefix>
              <el-icon>
                <Lock />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-button class="w-[250px]" colo="#626aef" round type="primary" @click="onSubmit"
          :loading="loading">登录</el-button>
      </el-form>
    </el-col>
  </el-row>
</template>

<script setup>
import { reactive, ref, onMounted, onBeforeUnmount } from 'vue'
import { toast } from "@/composables/util.js";
import { useRouter } from "vue-router";
import store from "@/store/index.js";
const router = useRouter()

// do not use same name with ref
const form = reactive({
  username: "",
  password: ""
})

// 表单验证
const rules = {
  username: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
  password: [{ required: true, message: '密码不能为空', trigger: 'blur' }],
}

const formRef = ref(null)
const loading = ref(false)

const onSubmit = () => {
  formRef.value.validate((valid) => {
    if (!valid) {
      return false
    }
    loading.value = true
    store.dispatch("login", form).then(res => {
      toast("登录成功")
      router.push("/")
    }).finally(() => {
      loading.value = false
    })
  })
}

// 监听回车事件
function onKeyUp(e) {
  if (e.key === "Enter") onSubmit()
}

// 添加键盘监听
onMounted(() => {
  document.addEventListener("keyup", onKeyUp)
})

// 移除键盘监听
onBeforeUnmount(() => {
  document.removeEventListener("keyup", onKeyUp)
})
</script>


<style>
.login-container {
  @apply min-h-screen bg-indigo-500;
}

.login-container .left,
.login-container .right {
  @apply flex items-center justify-center;
}

.login-container .right {
  @apply bg-light-50 flex-col;
}

.left>div>div:first-child {
  @apply font-bold text-5xl text-light-50 mb-4;
}

.left>div>div:last-child {
  @apply text-gray-200 text-sm;
}
</style>
