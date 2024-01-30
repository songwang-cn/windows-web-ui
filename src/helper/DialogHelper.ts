import { App, Component, createApp } from 'vue'
import ElementPlus from 'element-plus'

export class DialogHelper {
  static async create(component: Component, param?: Record<string, any>) {
    const node = document.createElement('div')

    node.setAttribute('id', `dialog_${Date.now()}`)

    let app: App<Element> | undefined

    // 卸载dom的方法
    const unmount = () => {
      if (app) {
        app.unmount()
        document.body.removeChild(node)
        app = undefined
      }
    }

    return new Promise((resolve, reject) => {
      if (app) {
        return
      }

      app = createApp(component, {
        param,
        onConfirm: async (res: any) => {
          unmount()
          resolve(res)
        },
        onClose: () => {
          unmount()
          reject()
        },
      })

      app.use(ElementPlus)

      document.body?.appendChild(node)

      app.mount(node)
    })
  }

  static async show(component: Component, param?: Record<string, any>): Promise<any> {
    return this.create(component, param)
  }
}
