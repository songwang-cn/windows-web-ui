import { App, createApp } from 'vue'
import ContextMenuVue from '@/components/ContextMenu.vue'

export function UseContextMenu(e: MouseEvent, menu?: any[]) {
  const node = document.getElementById('context_menu') || document.createElement('div')

  node.setAttribute('id', 'context_menu')

  return new Promise((resolve) => {
    let app: App<Element> | undefined

    // eslint-disable-next-line prefer-const
    app = createApp(ContextMenuVue, {
      event: e,
      menu,
      onAction: (res: any) => {
        document.body.removeChild(node)
        resolve(res)
      },
      onClose: () => {
        document.body.removeChild(node)
      },
    })

    document.body.appendChild(node)

    app.mount(node)
  })
}
