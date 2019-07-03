#多路由拼图
================
    ##知识点
    为一个路由（画面）组合多个组件，完成整个页面

    *router-view[name]
    *components

    ##实战演习

        -----Header.vue----
        <template>
          <div>
            <h1>头部标题栏</h1>
            <div>header。。。</div>
          </div>
        </template>
        -------------------

        -----  Slide.vue-----
        <template>
          <div>
            <h1>边条栏目</h1>
            <div>slide。。。</div>
          </div>
        </template>
          -------------------


        -----Detail.vue----
        <template>
          <div>
            <h1>详细栏目</h1>
            <p>Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。
              与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。
              Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。
              另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。</p>
          </div>
        </template>
       -------------------
       ------Router/index.js-------------
import SettingDetail from '@/components/setting/Detail'
import SettingHeader from '@/components/setting/Header'
import SettingSlide from '@/components/setting/Slide'

  components: {
        myheader:SettingHeader,
        mydetail:SettingDetail,
        myslide:SettingSlide
      }
       ----------------------------------
      ---------App.vue------------------
         <!--路由拼图-->
            <table width="100%">
              <tr>
                <td colspan="2" style="background-color:salmon">
                    <router-view name="myheader"></router-view>
                </td>
              </tr>
              <tr>
                <td width="20%" style="background-color:darkcyan">
                  <router-view name="myslide"></router-view>
                </td>
                <td width="20%" style="background-color:seashell">
                  <router-view name="mydetail"></router-view>
                </td>
              </tr>
            </table>
      ----------------------------------
