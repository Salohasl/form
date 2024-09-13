import { ref } from 'vue';

export function useFormStorage() {
    const formData = ref({
        name: localStorage.getItem('name') || '',
        age: Number(localStorage.getItem('age')) || '',
        children: JSON.parse(localStorage.getItem('children') || '[]')
    });

    const saveToLocalStorage = () => {
        localStorage.setItem('name', formData.value.name);
        localStorage.setItem('age', formData.value.age.toString());
        localStorage.setItem('children', JSON.stringify(formData.value.children));
    };

    const removeFromLocalStorage = (index: number) => {
        if (index < 0 || index >= formData.value.children.length) {
            console.error('Ошибка по индексу', index, formData.value.children.length);
            return;
        }
        const children = [...formData.value.children];
        children.splice(index, 1);
        formData.value.children = children;
        saveToLocalStorage();
    };

    return {
        formData,
        saveToLocalStorage,
        removeFromLocalStorage,
    };
}
