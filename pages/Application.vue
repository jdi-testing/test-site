<template>
    <v-container class="">
        <v-col>
            <h1>Application</h1>
        </v-col>
        <p class="body-1 mx-5">
        The <code>v-app</code> component is REQUIRED for all applications. 
        This is the mount point for many of Vuetify’s components. <br />
        <code>v-app</code> should only be rendered within your application ONCE.
        </p>
        <h2 class="mb-3">Application components</h2>
        Each of these application components have a designated location and priority that it affects within the layout system.
        <ul class="my-3">
            <li><code>v-app-bar</code>: Is always placed at the top of an application with a lower priority than v-system-bar.</li>
            <li><code>v-bottom-navigation</code>: Is always placed at the bottom of an application with a higher priority than v-footer.</li>
            <li><code>v-footer</code>: Is always placed at the bottom of an application with a lower priority than v-bottom-navigation.</li>
            <li><code>v-navigation-drawer</code>: Can be placed on the left or right side of an application 
            and can be configured to sit next to or below v-app-bar.</li>
            <li><code>v-system-bar</code>: Is always placed at the top of an application with higher priority than v-app-bar.</li>
        </ul>
    </v-container>
</template>
