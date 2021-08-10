<template>
    <v-container>
        <v-col>
            <h1>Avatars</h1>
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
    </v-container>
</template>

<script>

import AvatarSize from '@/components/avatars/AvatarSize.vue';
import TileAvatar from '@/components/avatars/TileAvatar.vue';
import SlotAvatar from '@/components/avatars/SlotAvatar.vue';
import ProfileCard from '@/components/avatars/ProfileCard.vue';

export default {
  name: 'Avatars',
  components: {
    AvatarSize,
    TileAvatar,
    SlotAvatar,
    ProfileCard,
  },
};

</script>
