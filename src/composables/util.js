import { ElNotification, ElMessageBox } from 'element-plus'
import nprogress from 'nprogress'
/**
 * 消息提示
 * @param message 消息
 * @param type 图片
 * @param dangerouslyUseHTMLString 文本
 */
export function toast(message, type = "success", dangerouslyUseHTMLString = true) {
    // 对响应错误做点什么
    ElNotification({
        message,
        type,
        dangerouslyUseHTMLString,
        duration: 3000
    })
}

// 显示全屏loading
export function showFullLoading() {
    nprogress.start()
}
// 隐藏全屏loading
export function hideFullLoading() {
    nprogress.done()
}


/**
 * 提示内容
 * @param content 提示内容
 * @param type 图标
 * @param title 文本
 */
export function showModel(content = "提示内容", type = "warning", title = "") {
    return ElMessageBox.confirm(
        content,
        title,
        {
            confirmButtonText: '确认',
            cancelButtonText: '取消',
            type,
        }
    )
}

// 弹出输入框
export function showPrompt(tip, value = "") {
    return ElMessageBox.prompt(tip, '', {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        inputValue: value
    })
}