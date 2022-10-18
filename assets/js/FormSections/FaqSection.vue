<template>
    <h2>Foire aux questions</h2>

    <div class="faq-container">

        <div class="faq-element mb-4 " v-for="faqElement in faqElements">


            <div
                class="faq-question is-flex is-align-items-center is-justify-content-space-between">
                <div class="field">
                    <div class="control">
                        <input class="input" type="text"
                            v-model="faqElement.question"
                            placeholder="Nouvelle Question" />
                    </div>
                </div>
                <div @click="faqElement.isClosed = !faqElement.isClosed"
                    class="question-close">
                    <i class="fas is-flex"
                        :class="[faqElement.isClosed == true ? 'fa-edit':'fa-check' ]">
                    </i>
                </div>
            </div>


            <div class="faq-answer  field"
                :class="[faqElement.isClosed == true ? 'closed':'open']">
                <div class="control">
                    <textarea class="textarea" v-model="faqElement.reponse"
                        placeholder="Nouvelle Réponse"></textarea>
                </div>
            </div>

        </div>

    </div>

    <div class="faq-buttons">
        <button type="button" class="button is-info "
            @click="addFaqElement">Ajouter une
            question</button>
        <button type="button" class="button is-danger ml-4"
            @click="removeFaqElement">Supprimer une
            question</button>
    </div>
</template>

<script>
export default {
    name: "FaqSection",
    props: {
        faqElements: Array,
    },
    methods: {
        addFaqElement() {
            this.$emit("add-question");
        },
        removeFaqElement() {
            this.$emit("remove-question");
        },

    },
}
</script>

<style scoped>
.question-close {
    padding: 0.5rem;
    background: #84f8a1;
    cursor: pointer;
    margin-left: 1rem;
    width: 80px;
    display: flex;
    justify-content: center;
    height: 30px;
    border-radius: 5px;
}

.faq-answer {
    max-height: 200px;
    transition: all 0.5s;
    overflow: hidden;
}

.open {
    max-height: auto;
    opacity: 1;
}

.closed {
    max-height: 0;
    opacity: 0;
}
</style>