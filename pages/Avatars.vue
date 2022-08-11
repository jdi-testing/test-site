<template>
    <v-container>
        <v-col>
            <h1>Avatars</h1>
            <p class="body-1 mt-2">
                The <code>v-avatar</code> component is typically used to display circular user profile pictures. 
                This component will allow you to dynamically size and add a border radius of responsive images, icons, and text. 
                A tile variation is available for displaying an avatar without border radius.
            </p>
        </v-col>

        <v-col>
            <p class="text-h5">
                Avatars with size
            </p>
            <AvatarSize id="avatarsWithSize" class="mt-5" />
        </v-col>

        <v-col class="mt-3">
            <p class="text-h5">
                Tile avatar
            </p>
            <TileAvatar id="tileAvatar" />
        </v-col>

        <v-col class="mt-3">
            <p class="text-h5">
                Slots
            </p>
            <SlotAvatar id="slotAvatars" />
        </v-col>

        <v-col class="mt-3">
            <p class="text-h5">
                Profile card
            </p>
            <ProfileCard id="profileCard" />
        </v-col>

        <v-col class="mt-3">
            <p class="text-h5">
                Combination with menu
            </p>
            <AvatarMenuCombi id="avatarMenuCombi" />
        </v-col>

        <v-col class="mt-3">
            <p class="text-h5">
                Combination with elements
            </p>
            <AvatarMix id="avatarMix" />
        </v-col>

    </v-container>
</template>

<script>

import AvatarSize from '@/components/avatars/AvatarSize.vue';
import TileAvatar from '@/components/avatars/TileAvatar.vue';
import SlotAvatar from '@/components/avatars/SlotAvatar.vue';
import ProfileCard from '@/components/avatars/ProfileCard.vue';
import AvatarMenuCombi from '@/components/avatars/AvatarMenuCombi.vue';
import AvatarMix from '@/components/avatars/AvatarMix.vue';

export default {
  name: 'Avatars',
  components: {
    AvatarSize,
    TileAvatar,
    SlotAvatar,
    ProfileCard,
    AvatarMenuCombi,
    AvatarMix,
  },
};

</script>
