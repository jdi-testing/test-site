 <template>
  <v-app>
    
    <v-navigation-drawer permanent app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Components
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list
        dense
        nav
      >
        <div 
          v-for="item in nav_items"
          :key="item.title"
        >
          <v-list-item
            v-if="item.subitems == null"
            link
            :to="item.link"
            no-action
          >
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-group
            v-else
            no-action
          >
            <template v-slot:activator>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </template>

            <v-list-item
            v-for="subitem in item.subitems"
            :key="subitem.title"
            link
            :to="subitem.link"
            >
              <v-list-item-title v-text="subitem.title"></v-list-item-title>
            </v-list-item>

          </v-list-group>

        </div>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data() {
    return {
      nav_items: [
        { title: 'Alerts', link: '/alerts' },
        { title: 'Application', link: '/application' },
        { title: 'Aspect ratios', link: '/aspect-ratios' },
        { title: 'Avatars', link: '/avatars' },
        { title: 'Badges', link: '/badges' },
        { title: 'Banners', link: '/banners' },
        { title: 'Bars', link: '', 
          subitems : [
            { title: 'App bars', link: '/app-bars' },
            { title: 'Toolbars', link: '/toolbars' },
            { title: 'System bars', link: '/system-bars' }
          ]},
        { title: 'Buttom navigation', link: '/buttom-navigation' },
        { title: 'Bottom sheets', link: '/bottom-sheets' },
        { title: 'Breadcumbs', link: '/breadcumbs' },
        { title: 'Buttons', link: '/buttons' },
        { title: 'Buttons: Floating Action Button', link: '/floating-action-button' },
        { title: 'Calendars', link: '/calendars' },
        { title: 'Cards', link: '/cards' },
        { title: 'Carousels', link: '/carousels' },
        { title: 'Chips', link: '/chips' },
        { title: 'Dialogs', link: '/dialogs' },
        { title: 'Dividers', link: '/dividers' },
        { title: 'Expansion panels', link: '/expansion-panels' },
        { title: 'Footers', link: '/footers' },
        { title: 'Form input & controls', link: '',
          subitems: [
            { title: 'Autocompletes', link: '/autocompletes' },
            { title: 'Checkboxes', link: '/checkboxes' },
            { title: 'Combobox', link: '/combobox' },
            { title: 'File inputs', link: '/file-inputs' },
            { title: 'Forms', link: '/forms' },
            { title: 'Inputs', link: '/inputs' },
            { title: 'Overflow buttons', link: '/overflow-buttons' },
            { title: 'Radio buttons', link: '/radio-buttons' },
            { title: 'Range Sliders', link: '/range-sliders' },
            { title: 'Selects', link: '/selects' },
            { title: 'Sliders', link: '/sliders' },
            { title: 'Switches', link: '/switches' },
            { title: 'Textareas', link: '/textareas' },
            { title: 'Text fields', link: '/text-fields' },
          ]},
        { title: 'Grid system', link: '/grid-system' },
        { title: 'Groups', link: '',
          subitems: [
            { title: 'Button groups', link: '/button-groups' },
            { title: 'Chip groups', link: '/chip-groups' },
            { title: 'Item groups', link: '/item-groups' },
            { title: 'List item groups', link: '/list-item-groups' },
            { title: 'Slide groups', link: '/slide-groups' },
            { title: 'Windows', link: '/windows' },
          ]},
        { title: 'Hover', link: '/hover' },
        { title: 'Icons', link: '/icons' },
        { title: 'Images', link: '/images' },
        { title: 'Lazy', link: '/lazy' },
        { title: 'Lists', link: '/lists' },
        { title: 'Menus', link: '/menus' },
        { title: 'Navigation drawers', link: '/navigation-drawers' },
        { title: 'Overlays', link: '/overlays' },
        { title: 'Pagination', link: '/pagination' },
        { title: 'Parallax', link: '/parallax' },
        { title: 'Pickers', link: '',
          subitems: [
            { title: 'Color pickers', link: '/color-pickers' },
            { title: 'Date pickers', link: '/date-pickers' },
            { title: 'Date pickers - month', link: '/date-pickers-month' },
            { title: 'Time pickers', link: '/time-pickers' },
          ]},
        { title: 'Progress', link: '',
          subitems: [
            { title: 'Progress circular', link: '/progress-circular' },
            { title: 'Progress linear', link: '/progress-linear' },
          ]},
        { title: 'Ratings', link: '/ratings' },
        { title: 'Sheets', link: '/sheets' },
        { title: 'Skeleton loaders', link: '/skeleton-loaders' },
        { title: 'Snackbars', link: '/snackbars' },
        { title: 'Sparklines', link: '/sparklines' },
        { title: 'Steppers', link: '/steppers' },
        { title: 'Subheaders', link: '/subheaders' },
        { title: 'Tables', link: '/tables',
          subitems: [
            { title: 'Data iterators', link: '/data-iterators' },
            { title: 'Simple tables', link: '/simple-tables' },
            { title: 'Data tables', link: '/data-tables' },
          ]},
        { title: 'Tabs', link: '/tabs' },
        { title: 'Timelines', link: '/timelines' },
        { title: 'Tooltips', link: '/tooltips' },
        { title: 'Treeview', link: '/treeview' },
        { title: 'Virtual scroller', link: '/virtual-scroller' },
      ]
    }
  }
};
</script>

