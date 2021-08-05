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
        { title: 'Application', link: '' },
        { title: 'Aspect ratios', link: '/aspect_ratios' },
        { title: 'Avatars', link: '/avatars' },
        { title: 'Badges', link: '/badges' },
        { title: 'Banners', link: '' },
        { title: 'Bars', link: '', 
          subitems : [
            { title: 'App bars', link: '' },
            { title: 'Toolbars', link: '' },
            { title: 'System bars', link: '' }
          ]},
        { title: 'Buttom navigation', link: '' },
        { title: 'Bottom sheets', link: '' },
        { title: 'Breadcumbs', link: '' },
        { title: 'Buttons', link: '' },
        { title: 'Buttons: Floating Action Button', link: '' },
        { title: 'Calendars', link: '' },
        { title: 'Cards', link: '' },
        { title: 'Carousels', link: '' },
        { title: 'Chips', link: '' },
        { title: 'Dialogs', link: '' },
        { title: 'Dividers', link: '' },
        { title: 'Expansion panels', link: '' },
        { title: 'Footers', link: '' },
        { title: 'Form input & controls', link: '',
          subitems: [
            { title: 'Autocompletes', link: '' },
            { title: 'Checkboxes', link: '' },
            { title: 'Combobox', link: '' },
            { title: 'File inputs', link: '' },
            { title: 'Forms', link: '' },
            { title: 'Inputs', link: '' },
            { title: 'Overflow buttons', link: '' },
            { title: 'Radio buttons', link: '' },
            { title: 'Range Sliders', link: '' },
            { title: 'Selects', link: '' },
            { title: 'Sliders', link: '' },
            { title: 'Switches', link: '' },
            { title: 'Textareas', link: '' },
            { title: 'Text fields', link: '' },
          ]},
        { title: 'Grid system', link: '' },
        { title: 'Groups', link: '',
          subitems: [
            { title: 'Button groups', link: '' },
            { title: 'Chip groups', link: '' },
            { title: 'Item groups', link: '' },
            { title: 'List item groups', link: '' },
            { title: 'Slide groups', link: '' },
            { title: 'Windows', link: '' },
          ]},
        { title: 'Hover', link: '' },
        { title: 'Icons', link: '' },
        { title: 'Images', link: '' },
        { title: 'Lazy', link: '' },
        { title: 'Lists', link: '' },
        { title: 'Menus', link: '' },
        { title: 'Navigation drawers', link: '' },
        { title: 'Overlays', link: '' },
        { title: 'Pagination', link: '' },
        { title: 'Parallax', link: '' },
        { title: 'Pickers', link: '',
          subitems: [
            { title: 'Color pickers', link: '' },
            { title: 'Date pickers', link: '' },
            { title: 'Date pickers - month', link: '' },
            { title: 'Time pickers', link: '' },
          ]},
        { title: 'Progress', link: '',
          subitems: [
            { title: 'Progress circular', link: '' },
            { title: 'Progress linear', link: '' },
          ]},
        { title: 'Ratings', link: '' },
        { title: 'Sheets', link: '' },
        { title: 'Skeleton loaders', link: '' },
        { title: 'Snackbars', link: '' },
        { title: 'Sparklines', link: '' },
        { title: 'Steppers', link: '' },
        { title: 'Subheaders', link: '' },
        { title: 'Tables', link: '',
          subitems: [
            { title: 'Data iterators', link: '' },
            { title: 'Simple tables', link: '' },
            { title: 'Data tables', link: '' },
          ]},
        { title: 'Tabs', link: '' },
        { title: 'Timelines', link: '' },
        { title: 'Tooltips', link: '' },
        { title: 'Treeview', link: '' },
        { title: 'Virtual scroller', link: '' },
      ]
    }
  }
};
</script>

