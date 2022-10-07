<script setup lang="ts">
import ContentFulClient from '../../data/ContentFulClient';
import Quote from '../../objects/Quote';
import QouteCard from './QouteCard.vue';

const quotes = await ContentFulClient.getEntries<Quote>({
    content_type: 'quote',
});
</script>

<template>
    <h2>Quote cards</h2>
    <div class="quote-cards">
        <QouteCard v-for="quote in quotes.items" :author="quote.fields.author?.fields">{{(quote.fields.quote)}}</QouteCard>
    </div>
</template>

<style scoped lang="less">
.quote-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>
