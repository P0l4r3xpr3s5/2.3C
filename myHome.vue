<template>
    <div>
        <h1>Welcome to Our E-commerce Site</h1>
  
        <!-- 1.b Raw HTML -->
        <div v-html="rawHtml"></div>
  
        <!-- 1.d JavaScript expressions inside syntax -->
        <p>{{ 2 + 2 }}</p>
  
        <!-- 5.a Binding HTML class [v-bind:class] -->
        <div :class="classObject">This is a class bound element</div>

        <!-- 5.b Binding Inline Styles -->
        <p :style="styleObject">Styled text</p>
  
        <!-- 6.b v-for with a Range -->
        <ul>
            <li v-for="n in 5">{{ n }}</li>
        </ul>
    
        <!-- 6.c v-for on <template> -->
        <template v-for="item in items">
            <p>{{ item.text }}</p>
        </template>
    
        <!-- 6.d v-for with v-if -->
        <ul>
            <li v-for="item in filteredItems" :key="item.id">{{ item.text }}</li>
        </ul>

        <!-- 7.a Event Handling: Inline Handlers -->
        <button @click="alert('Inline handler')">Inline Handler</button>

        <!-- 8.a v-model with input -->
        <input type="text" v-model="inputValue" />
        <input type="checkbox" v-model="isChecked" /> <!-- checkbox -->
        <input type="radio" v-model="selectedOption" value="A"/> <!-- radio -->
        <select v-model="selectedValue"> <!-- select -->
        <option>A</option>
        <option>B</option>
        </select>
        <textarea v-model="textAreaValue"></textarea> <!-- textarea -->

        <!-- 8.b v-model modifiers -->
        <input type="text" v-model.lazy="lazyInput" />
        <input type="text" v-model.number="numericInput" />
        <input type="text" v-model.trim="trimmedInput" />   
    
        <!-- 10.c Slots -->
        <slot name="footer"></slot>
    </div>
</template>
    
<script setup>
    // 3. Reactivity Fundamentals [ref()]
    import { ref, watch } from 'vue';
    
    // 1.b Raw HTML
    const rawHtml = ref('<p>Some raw HTML</p>');
    
    // 5.a Binding HTML class [v-bind:class]
    const classObject = ref({
    active: true,
    'text-success': true
    });

    // 5.b Binding Inline Styles
    const styleObject = ref({
        color: 'red',
        fontSize: '2em'
    });
    
    import { computed } from 'vue'
    const filteredItems = computed(() => {
        return items.value.filter(item => item.show)
    })


    // 6.c v-for on <template>
    const items = ref([
        { text: 'Item 1', show: true },
        { text: 'Item 2', show: false },
        { text: 'Item 3', show: true }
    ]);
    
    // 8.a v-model with input
    const inputValue = ref('');
    const isChecked = ref(false);
    const selectedOption = ref('');
    const selectedValue = ref('');
    const textAreaValue = ref('');
    
    // 8.b v-model modifiers
    const lazyInput = ref('');
    const numericInput = ref(0);
    const trimmedInput = ref('');
    
    // 9. Watchers
    watch(inputValue, (newVal, oldVal) => {
        console.log(`Input changed from ${oldVal} to ${newVal}`);
    });
</script>
    
