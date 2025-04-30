import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";//自动引入组件plugin
import AutoImport from "unplugin-auto-import/vite";
import{ElementPlusResolver} from "unplugin-vue-components/resolvers";

export default defineConfig({
  plugins: [
    vue(), 
    //自动引入组件
    AutoImport({
        import: ['vue','vue-router', 'pinia']
    }),
    Components({
        resolvers: [ElementPlusResolver()]
    })
  ]
})