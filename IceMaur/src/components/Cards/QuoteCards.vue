<script setup lang="ts">
import ContentfulClient from '../../data/ContentfulClient';
import Quote from '../../objects/Quote';
import QuoteCard from './QuoteCard.vue';

const quotes = await ContentfulClient.getEntries<Quote>({
    content_type: 'quote',
});
</script>

<template>
    <div class="quote-cards">
        <QuoteCard v-for="quote in quotes.items" :author="quote.fields.author?.fields">{{(quote.fields.quote)}}</QuoteCard>
    </div>
</template>

<style scoped lang="less">
.quote-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>
